from flask import Flask, request, jsonify
from flask_cors import CORS

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
import xarray as xr
import joblib
import tensorflow as tf
from tensorflow import keras
from keras.models import Sequential
from keras.layers import Input, LSTM, Dense

input_length = 7
variables = 1
batch_size = 1
lstm_cells = 7

lstm_model = Sequential()
lstm_model.add(Input(shape=(input_length, variables), batch_size=batch_size))
lstm_model.add(LSTM(lstm_cells))
lstm_model.add(Dense(units=7))
lstm_model.add(Dense(units=1))

lstm_model.load_weights('./models/lstm_mongolia_weights.keras')

filename = 'Mongolia_Test_ERA5_2mTEMP.nc'
fullpath = os.path.join('./datasets/', filename)
mongolia_test_dataset = xr.open_dataset(fullpath)

lr = joblib.load('./models/linear_mongolia.pkl')

# lstm_model.summary()

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/welcome', methods=['GET'])
def welcome():
    message = 'Welcome to Scorched Earth 🔥🌎'
    return jsonify({'message': message})

@app.route('/predict', methods=['GET'])
def predict():
    weekly_data = mongolia_test_dataset['t2m'][0:7].data.reshape(1,7,1)
    predictions = lstm_model.predict(weekly_data).tolist()
    data = {
        'ground_truth': mongolia_test_dataset['t2m'][7].data.tolist(),
        'predictions': predictions[0]
    }
    return jsonify(data)

if __name__ == "__main__":
	app.run()