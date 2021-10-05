from flask import Flask, redirect, url_for, render_template, request, flash, session, send_from_directory
from classes import Untis



untis = Untis(
    server='https://kalliope.webuntis.com',
    username='phillip.guetschow',
    password='20041024',
    school='CSS-Neckarsulm',
    useragent='WebUntis Test',
    className='1BK1T1'
)

jsonString = untis.getTimetableThisWeek()


app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html', jsonTimeTable = jsonString)


@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)


if __name__ == "__main__":
    app.run(debug=True, port=1111)