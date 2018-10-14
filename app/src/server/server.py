from flask import Flask
from flask import request
from flask_cors import CORS
from flask import jsonify
import nlp

app = Flask(__name__)
CORS(app)

notes = nlp.initializeDict()

@app.route('/')
def getTopMatch():
    sent = request.args.get('sent')
    stuff = nlp.inputSent(sent,notes)
    return jsonify(word=stuff[0],freq=stuff[1],file=stuff[2],text=stuff[3])


if __name__ == '__main__':
    app.run()
