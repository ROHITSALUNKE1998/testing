from flask_ngrok import run_with_ngrok
from flask import Flask, Response, request, jsonify, render_template

app = Flask(__name__,template_folder='template')
run_with_ngrok(app)

@app.route('/')
def index():
    return render_template('abc.html')

@app.route('/hello', methods=['POST'])
def hello():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    return 'Hello %s %s have fun learning python <br/> <a href="/">Back Home</a>' % (first_name, last_name)

if __name__ == '__main__':
    app.run()