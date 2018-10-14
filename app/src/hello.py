from flask import Flask
from flask_cors import CORS
from flask import jsonify
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
	name = 'Sherry'
	age = '19'
	resp = jsonify(name=name, age=age)
	return resp

if __name__ == '__main__':
	app.run()