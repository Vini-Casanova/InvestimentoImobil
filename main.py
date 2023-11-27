from flask import Flask, request, render_template
import calculations
from user_service import ServiceUser
import os
from dotenv import load_dotenv

load_dotenv()
url = os.getenv("DATABASE_URI")

app = Flask(__name__)
serviceUser = ServiceUser(url)


@app.post('/api/client')
def createClient():
    data = request.get_json()
    email = data["email"]
    senha = data["senha"]
    name = data["nome"]
    return serviceUser.createUser(email, senha, name)


@app.get('/api/cliente/<email>')
def getClienteDados(email):
    return serviceUser.selectUser(email)


@app.patch('/api/cliente')
def atualizarDadosCliente(email):
    data = request.get_json()
    email = data["email"]
    return serviceUser.updateUser("sla123", "sla123", email)


@app.delete('/api/cliente')
def excluirCliente():
    data = request.get_json()
    email = data["email"]
    return serviceUser.deleteUser(email)


app.run()
