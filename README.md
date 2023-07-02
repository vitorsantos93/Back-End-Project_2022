<h1 align="center"> FLAG Back-End Project</h1>

1- Technologies used: M.E.R.N:

    1.1- Front-End:
        . React
        . Tailwind

    1.2- Server:
        . Express.js
        . Node.js

    1.3- Database:
        . MongoDB

2- Project Description:

	. Form that collects user data, including radio input, where each will represent each district, municipality and parish existing in Portugal, in order to 	determine where they live.
	. As described above, the objective of this project will be to save data from user, authorized in the form, in the Database (non-relational), including 	user, district, county and parish collections.

3- Usage guide to start the application:

    3.1- Clone project "https://github.com/vitorsantos93/Back-End-Project_2022.git".

    3.2 - Run the command "mongod --config /usr/local/etc/mongod.conf" in the main directory "/Projeto_Back-end_2002" to connect to the Database.

        3.2.1 - If the command "mongod --config /usr/local/etc/mongod.conf" does not perform any action, do the following operations:
            . Enter the command "mongosh"
            . Enter the command "db.shutDownServer()"
            . End "mongosh" with the command "exit"
            . Enter again the command "mongod --config /usr/local/etc/mongod.conf" and the console will display "connected to database".

    3.3- Enter the directory "/Projeto_Back-end_2002/server" && execute the command "npm run start" to start the server.

    3.3- Enter the directory "/Projeto_Back-end_2002/client" && execute the command "npm run start".

4- REST API PATHS

    4.1- Users

        4.1.1- GET http://localhost:5000/users => Displays all users who submited the form.

        4.1.2- GET http://localhost:5000/users/:userId => Displays the user with the ID defined in the route. 

        4.1.3- POST http://localhost:5000/users => Performed through the client side or insert in the body(JSON) on the REST API (INSOMNIA).

        4.1.4- PATCH http://localhost:5000/users/:userId => Updates the user objectg with the ID defined in the route and allows adding or updating the keys (see usersModel.js) of the object, being mandatory to put the user ID in the body of INSOMNIA (JSON). Example:

            {
	            "_id": "value",
	            "key": "value"
            }

        4.1.5- DELETE http://localhost:5000/users/:userId => Deletes the user object from the database with the id inserted in the route.
    
    4.2- Districts

        4.2.1- GET http://localhost:5000/district => Displays all districts in the database.

        4.2.2- GET http://localhost:5000/district/:districtId => Displays the district with the id defined in the route.

        4.2.3- POST http://localhost:5000/district => Insert the following in the body:

            {
		        "districtName": "value"
            }

        4.2.4- PATCH http://localhost:5000/district/:districtId => ates the district object with the id defined in the route and allows adding or updating the keys (see districtsModel.js) of the object, being mandatory to put the district ID in the body (JSON). Example:

            {
	            "_id": "value",
	            "districtName": "value"
            }

        4.2.5- DELETE http://localhost:5000/district/:districtId => Deletes the district object from the database with the id inserted in the route.
    
    4.3- Counties

        4.3.1- GET http://localhost:5000/county => Displays all counties in the database.

        4.3.2- GET http://localhost:5000/county/:districtId => Displays all municipalities belonging to the district with the id inserted in the route.

        4.3.3- GET http://localhost:5000/county/:districtId/:countyId => Displays the county with the id defined in the route. Example:

            url: http://localhost:5000/county/6287ebedaa2a6d91e1b16d59/628b50bce8716e1f3cade3c9

            Object found:

                {
                    "_id": "628b50bce8716e1f3cade3c9",
                    "countyName": "Albergaria-a-Velha",
                    "district": {
                        "id": "6287ebedaa2a6d91e1b16d59",
                        "districtName": "Aveiro"
                    },
                    "__v": 0
                }

        4.3.4- POST http://localhost:5000/county/:districtId => By inserting the district id in the route, the county object will be created, where it will present the district data with the id defined in the route. Example:

            url: http://localhost:5000/county/628a71290ba0f1867bfa22ef 

            Body (JSON):

                {
                    "countyName": "Corvo"
                }           
            
            Object created:

                {
                    "countyName": "Corvo",
                    "district": {
                        "id": "628a71290ba0f1867bfa22ef",
                        "districtName": "Ilha do Corvo"
                    },
                    "_id": "628b7cce164016ff487c4d1e",
                    "__v": 0
                }
        
        4.3.5- PATCH http://localhost:5000/county/:countyId => Updates the county object with the id defined in the route and allows adding or updating the keys(see countyModel.js) of the object, being mandatory to put the county ID in body (JSON). Example:
        
            {
                "_id": "628b7cce164016ff487c4d1e",
                "countyName": "Vila do Corvo"
            }
        
        4.3.6 - DELETE  http://localhost:5000/county/:countyId => Deletes the county object from the database with the id inserted in the route.
    
    4.4- Parishes

        4.4.1- GET  http://localhost:5000/parish => Displays all parishes in the database.

        4.4.2- GET http://localhost:5000/parish/:countyId => Displays all parishes belonging to the municipality with the id inserted in the route.

        4.4.3- GET http://localhost:5000/parish/:countyId/:parishId => Displays the parish with the id defined in the route.

             url: http://localhost:5000/parish/628b6ed87c37fd37a9fecddc/628e9b483905b9255a8744bf

            Object found:

                {
                    "_id": "628e9b483905b9255a8744bf",
                    "parishName": "Gondomar (São Cosme), Valbom e Jovim",
                    "county": {
                        "id": "628b6ed87c37fd37a9fecddc",
                        "countyName": "Gondomar",
                        "district": {
                            "id": "6287ecedc644f131c0df96dd",
                            "districtName": "Porto"
                        }
                    },
                    "__v": 0
	            }

        4.4.4- POST http://localhost:5000/parish/:countyId => By inserting the municipality id in the route, the parish object will be created, where it will present the county data with the id defined in the route. Example:

            url: http://localhost:5000/parish/628b6ed87c37fd37a9fecddc
            
            Body(json):

                {
                    "parishName": "Gondomar (São Cosme), Valbom e Jovim"
                }      
            
            Object created:

                {
                    "_id": "628e9b483905b9255a8744bf",
                    "parishName": "Gondomar (São Cosme), Valbom e Jovim",
                    "county": {
                        "id": "628b6ed87c37fd37a9fecddc",
                        "countyName": "Gondomar",
                        "district": {
                            "id": "6287ecedc644f131c0df96dd",
                            "districtName": "Porto"
                        }
		            },
		            "__v": 0
	            }
        
        4.4.5- PATCH http://localhost:5000/parish/:parishId => Updates the object of the parish with the id defined in the route and allows adding or updating the keys(see parishesModel.js) of the object, being mandatory to put the ID of the parish in the body (JSON). Example:

            {
                "_id": "628f7e46ef3170f1bd7c8035",
                "parishName": "Santa Cruz - Trindade"
            }

        4.4.6- DELETE http://localhost:5000/parish/:parishId => Deletes the parish object from the database with the id inserted in the route.
