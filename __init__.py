from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/main')
def main():
    return render_template("main.html")

@app.route('/result')
def result():
    return render_template("result.html")

@app.route('/graduate_table')
def graduate_table():
    return render_template("graduate_table.html")

myhost = "127.0.0.1"
myport = 5000

if __name__ == "__main__":
    app.run(host=myhost, port=myport)
