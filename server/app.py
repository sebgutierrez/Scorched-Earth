from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

from models import ModelCollection
from form import Form
from accuweather import request_weather_data

# To be changed with SQLite db is set up
LAST_24HR_DATA = []

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    predictions = dict()
    form_json = request.json
    form = Form(form_json)
    if form.is_validated():
        region_name, model_name = form.get_region_and_model_name()
        model = model_collection.get_model(region_name, model_name)

        # Currently placeholder data until weather api is integrated. Assumes the data is a NumPy array that has already been normalized.
        predictions = model.get_predictions(LAST_24HR_DATA)
        return jsonify({"Predictions": predictions})
    else:
        return jsonify({"Error": "Invalid form data."})
    
if __name__ == "__main__":
    logger = logging.getLogger(__name__)
    logging.basicConfig(filename="server.log", filemode='w', level=logging.DEBUG, format='%(asctime)s : %(levelname)s : %(name)s : %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')

    model_collection = ModelCollection()
    model_collection.load_models()

    request_weather_data(model_collection)
    app.run()