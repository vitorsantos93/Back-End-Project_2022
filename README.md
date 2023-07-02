# Projeto_Back-end_2022

1- Tecnologias utilizadas: M.E.R.N:

    1.1- Front-End:
        . React
        . Tailwind

    1.2- Servidor:
        . Express.js
        . Node.js

    1.3- Base de dados:
        . MongoDB

2- Descrição Projeto:

    . Formulário que recolhe dados do utilizador, incluíndo input radio, em que cada uma 
        representará cada distritos, concelhos e freguesias existentes em Portugal, de forma a apurar 
        onde os mesmos habitam. 
    . Conforme a descrição anterior, o objetivo deste projeto será guardar os dados de 
        utilizador, submetidos no formulário, na Base de Dados (não relacional), 
        incluindo as collections utilizador, distrito, concelho e freguesia.

3- Guia de utilização para iniciar aplicação:

    3.1- Clonar projeto "https://github.com/VitorBMSantos/Projeto_Back-end_2022.git".

    3.2 - Executar o comando "mongod --config /usr/local/etc/mongod.conf" no diretório principal "/Projeto_Back-end_2002" para connectar à Base de dados.

        3.2.1 - Caso o comando "mongod --config /usr/local/etc/mongod.conf" não execute nenhuma ação, realizar as seguintes operações:
            . Inserir o comando "mongosh"
            . Inserir o comando "db.shutDownServer()"
            . Terminar sessão "mongosh" com o comando "exit"
            . Inserir novamente o comando "mongod --config /usr/local/etc/mongod.conf" e a consola irá apresentar "connected to database".

    3.3- Entrar no diretório "/Projeto_Back-end_2002/server" && executar comando "npm run start" para iniciar servidor.

    3.3- Entrar no diretório "/Projeto_Back-end_2002/client" && executar comando "npm run start".

4- REST API PATHS

    4.1- Utilizadores

        4.1.1- GET http://localhost:5000/users => Exibe todos os utilizadores que submeteram o formulário.

        4.1.2- GET http://localhost:5000/users/:userId => Exibe o utilizador com o id definido na rota. 

        4.1.3- POST http://localhost:5000/users => Realizado através do lado do cliente ou inserir objecto no body (json) da rest API.

        4.1.4- PATCH http://localhost:5000/users/:userId => Atualiza o objecto do utilizador com o id definido na rota e permite adicionar ou atualizar as keys(consultar usersModel.js) do objecto, sendo obrigatório colocar o id do utilizador no body(json) e depois as restantes keys. Exemplo:

            {
	            "_id": "value",
	            "key": "value"
            }

        4.1.5- DELETE http://localhost:5000/users/:userId => Elimina o objecto do utilizador da base de dados com o id inserido na rota.
    
    4.2- Distritos

        4.2.1- GET http://localhost:5000/district => Exibe todos os distritos da base de dados.

        4.2.2- GET http://localhost:5000/district/:districtId => Exibe o distrito com o id definido na rota.

        4.2.3- POST http://localhost:5000/district => Inserir no body o seguinte:

            {
		        "districtName": "value"
            }

        4.2.4- PATCH http://localhost:5000/district/:districtId => Atualiza o objecto do districto com o id definido na rota e permite adicionar ou atualizar as keys(consultar districtsModel.js) do objecto, sendo obrigatório colocar o id do distrito no body(json) e depois as restantes keys. Exemplo:

            {
	            "_id": "value",
	            "districtName": "value"
            }

        4.2.5- DELETE http://localhost:5000/district/:districtId => Elimina o objecto do distrito da base de dados com o id inserido na rota.
    
    4.3- Concelhos

        4.3.1- GET http://localhost:5000/county => Exibe todos os concelhos da base de dados.

        4.3.2- GET http://localhost:5000/county/:districtId => Exibe todos os concelhos pertencentes ao distrito com o id inserido na rota.

        4.3.3- GET http://localhost:5000/county/:districtId/:countyId => Exibe o concelho com o id definido na rota. Exemplo:

            url: http://localhost:5000/county/6287ebedaa2a6d91e1b16d59/628b50bce8716e1f3cade3c9

            Objecto encontrado:

                {
                    "_id": "628b50bce8716e1f3cade3c9",
                    "countyName": "Albergaria-a-Velha",
                    "district": {
                        "id": "6287ebedaa2a6d91e1b16d59",
                        "districtName": "Aveiro"
                    },
                    "__v": 0
                }

        4.3.4- POST http://localhost:5000/county/:districtId => Ao inserir o id do distrito na rota, irá ser criado o objecto do concelho, onde irá apresentar os dados do distrito com o id definido na rota. Exemplo:

            url: http://localhost:5000/county/628a71290ba0f1867bfa22ef 

            Body(json):

                {
                    "countyName": "Corvo"
                }           
            
            Objecto criado:

                {
                    "countyName": "Corvo",
                    "district": {
                        "id": "628a71290ba0f1867bfa22ef",
                        "districtName": "Ilha do Corvo"
                    },
                    "_id": "628b7cce164016ff487c4d1e",
                    "__v": 0
                }
        
        4.3.5- PATCH http://localhost:5000/county/:countyId => Atualiza o objecto do concelho com o id definido na rota e permite adicionar ou atualizar as keys(consultar countyModel.js) do objecto, sendo obrigatório colocar o id do concelho no body(json) e depois as restantes keys. Exemplo:
        
            {
                "_id": "628b7cce164016ff487c4d1e",
                "countyName": "Vila do Corvo"
            }
        
        4.3.6 - DELETE  http://localhost:5000/county/:countyId => Elimina o objecto do concelho da base de dados com o id inserido na rota.
    
    4.4- Freguesias

        4.4.1- GET  http://localhost:5000/parish => Exibe todos as freguesias da base de dados.

        4.4.2- GET http://localhost:5000/parish/:countyId => Exibe todos as freguesias pertencentes ao concelho com o id inserido na rota.

        4.4.3- GET http://localhost:5000/parish/:countyId/:parishId => Exibe a freguesia com o id definido na rota.

             url: http://localhost:5000/parish/628b6ed87c37fd37a9fecddc/628e9b483905b9255a8744bf

            Objecto encontrado:

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

        4.4.4- POST http://localhost:5000/parish/:countyId => Ao inserir o id do concelho na rota, irá ser criado o objecto do parish, onde irá apresentar os dados do concelho com o id definido na rota. Exemplo:

            url: http://localhost:5000/parish/628b6ed87c37fd37a9fecddc
            
            Body(json):

                {
                    "parishName": "Gondomar (São Cosme), Valbom e Jovim"
                }      
            
            Objecto criado:

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
        
        4.4.5- PATCH http://localhost:5000/parish/:parishId => Atualiza o objecto da freguesia com o id definido na rota e permite adicionar ou atualizar as keys(consultar parishesModel.js) do objecto, sendo obrigatório colocar o id da freguesia no body(json) e depois as restantes keys. Exemplo:

            {
                "_id": "628f7e46ef3170f1bd7c8035",
                "parishName": "Santa Cruz - Trindade"
            }

        4.4.6- DELETE http://localhost:5000/parish/:parishId => Elimina o objecto da freguesia da base de dados com o id inserido na rota.
