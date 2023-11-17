from flask import Flask, jsonify
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/welcome', methods=['GET'])
def welcome():
    message = 'Welcome to Scorched Earth 🔥🌎'
    return jsonify({'message': message})

if __name__ == "__main__":
	app.run()