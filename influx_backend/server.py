from flask import Flask
from flask import request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_cors import CORS

import os
import csv
import json
import math
import jwt
import uuid
import hashlib
import datetime

app = Flask(__name__, static_url_path='/static')
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/learn_mongo_2"
mongo = PyMongo(app)

# Function to create a hash for password
def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()


# Function to add Salt to the Password
def generate_salt():
    salt = os.urandom(16)
    print(salt.hex())
    return salt.hex()

# REGISTER
@app.route('/register', methods=['POST'])
def register():
    user = {}
    user['username'] = request.json['username']
    user['dob'] = request.json['dob']
    user['email'] = request.json['email']
    password = request.json['password']
    street = request.json['street']
    city = request.json['city']
    pincode = request.json['pincode']
    user['address'] = [{'street': street, 'city': city, 'pincode': pincode}]
    user['salt'] = generate_salt()
    user['password_hash'] = md5_hash(user['salt'] + password)
    count = mongo.db.prohireusers.find({"$and": [{'email': user['email']}, {'username': user['username']}]}).count()
    if count != 0:
        return {"message": "User Already exists", "status": 401}
    else:
        if user['username'] == '' and user['email'] == '' and user['password'] == '':
            return {"message": 'Fields are Empty'}
        mongo.db.prohireusers.insert(user)
        return {"message": "New User Added", 'status': 200}

# LOGIN
@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    user = mongo.db.prohireusers.find({'email': email})
    if user[0]['email'] == email and md5_hash(user[0]['salt'] + password) == user[0]['password_hash']:
        encode_data = jwt.encode({'email': email}, 'Nr4F1o9N1o4F0z5F', algorithm='HS256').decode('utf-8')
        return {"message": "Authentication Successful", "status": 200, 'token': str(encode_data)}
    else:
        return ({"message": "Incorrect email and/or password"})



#   TO VIEW ALL CARS ON HOME PAGE
@app.route('/home', methods=['GET'])
def home():
    vehicles = mongo.db.cardetails.find()
    return dumps(vehicles)


#   TO SELECT CARS FOR BOOKING
@app.route('/selectcars/<_id>', methods=['POST'])
def selectcars(_id):
    cars = request.json['cars']
return dumps(cars)


#   TO BOOK SAID CAR
@app.route("/bookcar/<_id>", methods=['POST'])
def bookcar(_id):
    book['first_name'] = request.json['first_name']
    book['last_name'] = request.json['last_name']
    book['drivers_licence'] = request.json['drivers_licence']
    book['carbooked'] = _id
    book['from_date'] = request.json['from_date']
    book['to_date'] = request.json['to_date']
    mongo.db.bookcar.find({book['carbooked'] = _id, })