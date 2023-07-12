from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity



UserTransaction = Blueprint("UserTransaction", __name__)


client = MongoClient('mongodb+srv://ChiragRohada:s54icYoW4045LhAW@atlascluster.t7vxr4g.mongodb.net/test')


db = client['Private']





@UserTransaction.route('/api/transactions', methods=['GET'])
@jwt_required()
def get_user_transactions():
    user_id = get_jwt_identity()

    transactions = db.bookings.find({"userId": user_id})
    transaction_list = []
    for transaction in transactions:
        transaction["_id"] = str(transaction["_id"])
        transaction_list.append(transaction)

    return jsonify(transaction_list)


@UserTransaction.route('/api/bookings', methods=['GET'])
@jwt_required()
def get_user_bookings():
    user_id = get_jwt_identity()

    bookings = db.bookings.find({"userId": user_id})
    booking_list = []
    for booking in bookings:
        booking["_id"] = str(booking["_id"])
        booking_list.append(booking)

    return jsonify(booking_list)