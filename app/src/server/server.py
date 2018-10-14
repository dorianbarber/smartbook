from flask import Flask
from flask_cors import CORS
from flask import jsonify
app = Flask(__name__)
CORS(app)

@app.route('/')
def helloworld():
    lineNum = 6
    file = 'test file'
    return jsonify(
        lineNumber = lineNum,
        file=file
    )

if __name__ == '__main__':
    app.run()
