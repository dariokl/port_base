from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/aboutme')
def about_me():
    return render_template('aboutme.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/project1')
def project1():
    return render_template('project1.html')


@app.route('/project2')
def project2():
    return render_template('project2.html')


@app.route('/project3')
def project3():
    return render_template('project3.html')


if __name__ == "__main__":
    app.run()
