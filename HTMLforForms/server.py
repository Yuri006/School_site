from flask import Flask, render_template, request, redirect, url_for, send_file
import os

app = Flask(__name__)

@app.route('/images/<name>')
def source_image(name):
    print(os.path.abspath(name))
    return send_file(os.path.dirname(os.path.abspath(__file__))+'/templates/images/'+name)

@app.route('/')
def Index():
    return render_template('Index.html')

@app.route('/cgi-bin/test_<id>')
def check_test(id):
    answer = request.args.get('answer')
    return redirect('/test_{0}'.format(int(id)+1))

@app.route('/test_<id>')
def test(id):
    return render_template('test.html', id=id) 

@app.errorhandler(404)
def page_not_found(error):
    return render_template('Error404.html'), 404

if __name__ == '__main__':
    app.run()
