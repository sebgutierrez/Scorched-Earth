from flask import Flask, request, jsonify
from flask_cors import CORS

import os

import numpy as np
import xarray as xr
import tensorflow as tf
from tensorflow import keras

from keras.models import Sequential
from keras.layers import Input, LSTM, Dense

input_length = 24
variables = 1
batch_size = 64
lstm_cells = 36

lstm = Sequential()
lstm.add(Input(shape=(input_length, variables), batch_size=batch_size))
lstm.add(LSTM(lstm_cells))
lstm.add(Dense(units=36))
lstm.add(Dense(units=1))

# lstm.load_weights('./models/lstm_mongolia_weights.keras')

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/welcome', methods=['GET'])
def welcome():
    message = 'Welcome to Scorched Earth 🔥🌎'
    return jsonify({'message': message})

@app.route('/predict', methods=['POST'])
def predict():
    form = request.json
    data = {}
    if form['Location'] == 'Ulaanbaatar, Mongolia':
        inputs = mongolia_test_dataset['t2m'][:24].data
        if form['Model'] == 'LSTM':
            inputs = inputs.reshape(1,7,1)
            outputs = lstm.predict(inputs)
            data = {
                'expected': "%.2f" % mongolia_test_dataset['t2m'][24].data,
                'predicted': ["%.2f" % output for output in outputs]
            }
    if form['Location'] == 'Austin, TX, USA':
        if form['Model'] == 'LSTM':
            pass
    return jsonify(data)

if __name__ == "__main__":
	app.run()