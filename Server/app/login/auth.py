from flask import Blueprint,request
from flask import jsonify
from pymongo import MongoClient 

# from flask_jwt_extended import (
#     JWTManager, jwt_required, create_access_token,
#     get_jwt_identity, get_jwt_claims
# )



auth = Blueprint("auth",__name__)



client = MongoClient('mongodb+srv://ChiragRohada:s54icYoW4045LhAW@atlascluster.t7vxr4g.mongodb.net/test')

db = client['Private']


# @auth.route('/login',methods=["post","get"])
# def login():
#     if request.method=="POST":
#         name=request.form.get("name")
#         print(name )
#         access_token = create_access_token(identity=name)
#         return "jsonify({'access_token': access_token}), 200"
#     return "hello"

    



# @auth.route('/protected', methods=['GET'])
# @jwt_required()
# def protected_route():
#     current_user = get_jwt_identity()
#     # current_user_role = get_jwt_claims().get('role')
#     return jsonify({'message': f'Protected route accessed by user {current_user} with role {current_user_role}'}), 200




@auth.route('/city/<city>')
def City(city):
    collection=db['Turf_data']
    result = collection.find({"Location": city},{'_id':0})
    cit=[]
    for i in result:
        cit.append(i)
    print(cit)
    
    return jsonify(cit)


@auth.route('/turf/<turf>')
def Turf(turf):
    collection=db['Turf_data']
    result = collection.find({"id": turf},{'_id':0})
    mylist=[]
    for i in result:
        mylist.append(i)

    print(mylist)

    
    
    
    return mylist