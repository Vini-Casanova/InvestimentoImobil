from flask import Flask, request, render_template
import usuario
from dbService import Service
import os
from dotenv import load_dotenv

load_dotenv()
url = os.getenv("DATABASE_URI")

app = Flask(__name__)
service = Service(url)

@app.post('/api/teste')
def createAccount():
    data = request.get_json()
    email = data["email"]
    senha = data["senha"]
    name = data["nome"]


    # with connection:
    #     with connection.cursor() as cursor:
    #         try:
    #             cursor.execute('''INSERT INTO cliente(email,nome,senha) VALUES(%s,%s,%s)''',(email,name,senha))
    #             connection.commit()
    #             cursor.close()
    #         except Exception as err:
    #             resp = Response(json.dumps(str(err).split("\n")), mimetype='application/json')
    #             resp.status_code = 400
    #             return resp
    # resp = Response(json.dumps(f"Cliente Criado com sucesso"), mimetype='application/json')
    # resp.status_code=201
    # return resp
    return service.insert(email,senha,name)


@app.get('/api/cliente/<email>')
def getClienteDados(email):
    return service.updateUser("sla123","sla123","vinicius@123.com")


    #email = request.args.get('email', type=str)
    # with connection:
    #     with connection.cursor() as cursor:
    #         cursor.execute(f"SELECT * FROM cliente WHERE email='{email}'")
    #         query = cursor.fetchall()
    #         return query



# @app.get('/api/cliente', METHOD=['PATCH'])
# def atualizarDadosCliente():



# @app.get('/api/cliente', METHOD=['DELETE'])
# def excluirCliente():


@app.route('/')
def teste():
    return render_template("teste.html",plot_url=usuario.index())


app.run()
