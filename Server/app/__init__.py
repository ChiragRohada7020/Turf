from flask import Flask,request
from flask import jsonify
from flask_cors import CORS

from app.login.auth  import auth


from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

from pymongo import MongoClient 

app=Flask(__name__)

CORS(app)
app.config['JWT_SECRET_KEY'] = '12345'  # Set your own secret key

jwt = JWTManager(app) 


app.register_blueprint(auth)


@app.route('/login',methods=["post","get"])
def login():
    if request.method=="POST":
        # name=request.form.get("name")
        # print(name )
        form_data=request.get_json()
        name=form_data.get("name")
        email=form_data.get("email")
        access_token = create_access_token(identity=email)
        
        return jsonify({'access_token': access_token}), 200
    return "hello"

    
# Inside your protected route
@app.route('/prot', methods=['GET'])
@jwt_required()
def protected_route():
    current_user = get_jwt_identity()
    print(current_user)
    
    return jsonify({'message': f'Protected route accessed by user {current_user} '})


from app import views