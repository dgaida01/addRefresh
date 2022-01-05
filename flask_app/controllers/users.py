from flask_app.models.user import User
from flask_app import app
from flask import render_template, jsonify, request, redirect

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users')
def users():
    return jsonify(User.get_all_json())

@app.route('/create/user',methods=['POST'])
def create_user():
    print("we are in the route")
    print (request.form)
    if request.form['email'] is '' or request.form['userName'] is '':
        return jsonify("oh no you dont")
    else:
        data = {
            'users' : request.form['userName'],
            'email' : request.form['email']

        }
        User.addUser(data)
        
    # write code to save it to our database . . .
    return jsonify(message="Add a user!!!")



