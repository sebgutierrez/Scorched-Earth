from flask import Flask, request, jsonify
from flask_cors import CORS

from models import ModelCollection
from form import Form

# To be changed with SQLite db is set up
LAST_24HR_DATA = []

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    predictions = dict()
    form = request.json
    print(form)
    form = Form(form)
    if form.is_validated():
        region_model_tuple = form.to_short_hand()
        model = model_collection.get_model(region_name=region_model_tuple[0], model_name=region_model_tuple[1])
        # Currently placeholder data until weather api is integrated. Assumes the data is a NumPy array that has already been normalized.
        predictions = model.get_predictions(LAST_24HR_DATA)
        return jsonify({"Predictions": predictions})
    else:
        return jsonify({"Error": "Invalid form data."})
    
if __name__ == "__main__":
    model_collection = ModelCollection()
    model_collection.load_models()

    app.run()