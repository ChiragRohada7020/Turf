from flask import Flask,request
from flask import jsonify
from flask_cors import CORS
from bson import ObjectId
import datetime


from app.login.auth  import auth

from app.UserDashboard  import user

from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

from pymongo import MongoClient 

app=Flask(__name__)

client = MongoClient('mongodb+srv://ChiragRohada:s54icYoW4045LhAW@atlascluster.t7vxr4g.mongodb.net/test')

db = client['Private']
CORS(app)
app.config['JWT_SECRET_KEY'] = '12345'  # Set your own secret key

jwt = JWTManager(app) 


app.register_blueprint(auth)
app.register_blueprint(user)


# @app.route('/login',methods=["post","get"])
# def login():
#     if request.method=="POST":
#         # name=request.form.get("name")
#         # print(name )
#         form_data=request.get_json()
#         password=form_data.get("passowrd")
#         email=form_data.get("email")
#         access_token = create_access_token(identity=email)
        
#         return jsonify({'access_token': access_token}), 200
#     return "hello"

    
# Inside your protected route
# @app.route('/prot/<id>', methods=['GET'])
# @jwt_required()
# def protected_route(id):
#     current_user = get_jwt_identity()
#     print(current_user)
#     collection=db['Turf_data']
#     result = collection.find({"id": id},{'_id':0})
#     print(result)
#     mylist=[]
#     for i in result:
#         print(i)
#         mylist.append(i)
#     print(mylist)

    

    
    # return jsonify({'message': mylist[0]})




@app.route('/api/turfs', methods=['GET'])
def get_turfs():
    turfs = db.Mumbai.find()
    turf_list = []
    for turf in turfs:
        turf["_id"] = str(turf["_id"])
        turf_list.append(turf)
    return jsonify(turf_list)

@app.route('/api/book', methods=['POST'])
# @jwt_required()
def book_turf():
    data = request.json
    turf_id = data.get("turfId")
    slots = data.get("slots")
    # current_user = get_jwt_identity()
    

    for slot_id in slots:
        db.Mumbai.update_one(
            {"_id": ObjectId(turf_id), "slots.slotId": slot_id},
            {"$set": {"slots.$.booked": True}}
        )

    # Create a booking document in the Bookings collection
    booking_data = {
        # "userId": user_id,
        "turfId": turf_id,
        "slots": slots,
        "bookingDateTime": datetime.datetime.now()
    }
    booking_id = db.bookings.insert_one(booking_data).inserted_id

    return jsonify({"message": "Turf booked successfully", "bookingId": str(booking_id)})


from app import views