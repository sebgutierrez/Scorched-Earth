from flask import Flask, jsonify
from flask_cors import CORS

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
import xarray as xr
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

# lstm_model.compile(loss=keras.losses.MeanSquaredError(), optimizer=keras.optimizers.Adam(), metrics=[keras.metrics.MeanAbsoluteError()])

lstm_model.load_weights('./models/lstm_mongolia_weights.keras')

lstm_model.summary()

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/welcome', methods=['GET'])
def welcome():
    message = 'Welcome to Scorched Earth 🔥🌎'
    return jsonify({'message': message})

@app.route('/predict', methods=['GET'])
def predict():
    weekly_data = np.array([-15.1607895, -16.899155 , -26.145554 , -25.436138 , -23.275787, -19.539417 , -5.772232]).reshape(1, 7, 1)
    predictions = lstm_model.predict(weekly_data).tolist()
    data = {
        'ground_truth': [0.93571854],
        'predictions': predictions[0]
    }
    return jsonify(data)

if __name__ == "__main__":
	app.run()