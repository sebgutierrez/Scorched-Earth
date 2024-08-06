from flask import Flask, request, jsonify
from flask_cors import CORS

from models import load_models

REGION_MODEL_TUPLES = [('mongolia', 'lstm')]
REGION_MODEL_DICT = {}
LAST_24HR_DATA = []

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    form = request.json
    is_valid = form_validator(form)
    predictions = []
    if is_valid:
        region_name = form['region']
        model_name = form['model']
        model = REGION_MODEL_DICT[(region_name, model_name)]

        # Currently placeholder data until weather api is integrated. Assumes the data is a NumPy array that has already been normalized.
        predictions = model.get_predictions(LAST_24HR_DATA)
        return jsonify({"Predictions": predictions})
    else:
        return jsonify({"Error": "Invalid form data."})

def form_validator(form):
    """ 
        Checks that the form keys and values are in the list of possible values
        @param form: the json form to validate

        Returns the boolean is_valid
    """

    form_keys = ['region', 'model']
    form_models = ['LSTM']
    form_regions = ['Ulaanbaatar, Mongolia']

    is_valid = True
    for key, value in form.items():
        if key not in form_keys:
            valid = False
            break
        if key == 'region' and value not in form_regions:
            valid = False
            break
        if key == 'model' and value not in form_models:
            valid = False
            break

    return is_valid

if __name__ == "__main__":
    REGION_MODEL_DICT = load_models(REGION_MODEL_TUPLES)

    app.run()