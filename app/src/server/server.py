from flask import flask
app = Flask(__name__)

@app.route('/')
def helloworld():
    return 'Hello World'
