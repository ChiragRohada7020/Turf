from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from app.UserDashboard.UserTransaction  import UserTransaction


user = Blueprint("user", __name__)

client = MongoClient('mongodb+srv://ChiragRohada:s54icYoW4045LhAW@atlascluster.t7vxr4g.mongodb.net/test')
db = client['Private']
UPLOAD_FOLDER = "Server/app/profile_pictures"  # Folder to store profile pictures
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}  # Allowed file extensions

user.register_blueprint(UserTransaction)

@user.route('/register', methods=["POST"])
def register():
    data = request.form
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    contact_number = data.get("contact_number")
    address = data.get("address")
    # profile_picture = request.files.get("profile_picture")

    # Hash the password
    hashed_password = generate_password_hash(password)


    # Check if the user already exists
    existing_user = db.Users.find_one({"email": email})
    if existing_user:
        return jsonify({"message": "User already exists"}), 409



    # # Save the profile picture
    # if profile_picture and allowed_file(profile_picture.filename):
    #     filename = secure_filename(profile_picture.filename)
    #     profile_picture.save(os.path.join(UPLOAD_FOLDER, filename))
    # else:
    #     filename = None

    # Create a new user document
    new_user = {
        "username": username,
        "email": email,
        "password": hashed_password,
        "first_name": first_name,
        "last_name": last_name,
        "contact_number": contact_number,
        "address": address,
        # "profile_picture": filename
    }
    db.Users.insert_one(new_user)

    return jsonify({"message": "User registered successfully"}), 200

# def allowed_file(filename):
#     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS




@user.route('/login', methods=["POST"])
def login():
    if request.method=="POST":
        
        form_data=request.get_json()
        password=form_data.get("password")
        email=form_data.get("email")

    # Find the user in the database
        user = db.Users.find_one({"email": email})
        if not user or not check_password_hash(user['password'], password):
            return jsonify({"message": "Invalid email or password"}), 401

    # Generate access token
        access_token = create_access_token(identity=email)
        return jsonify({"access_token": access_token}), 200
    return "error"



@user.route('/prot/<id>', methods=['GET'])
@jwt_required()
def protected_route(id):
    current_user = get_jwt_identity()
    print(current_user)
    collection=db['Turf_data']
    result = collection.find({"id": id},{'_id':0})
    print(result)
    mylist=[]
    for i in result:
        print(i)
        mylist.append(i)
    print(mylist)