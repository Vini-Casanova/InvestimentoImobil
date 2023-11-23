import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask, request, render_template

import usuario

CREATE_TESTE = (
    """CREATE TABLE IF NOT EXISTS teste (id SERIAL PRIMARY KEY, name VARCHAR(256))"""
)


load_dotenv()


app = Flask(__name__)
url = os.getenv("DATABASE_URI")
connection = psycopg2.connect(url)



@app.post('/api/teste')
def createAccount():
    data = request.get_json()
    name = data["name"]
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(CREATE_TESTE)
            ##cursor.fetchall()
    return "SUCESSO"



@app.route('/')
def teste():
    return render_template("teste.html",plot_url=usuario.index())


app.run()
