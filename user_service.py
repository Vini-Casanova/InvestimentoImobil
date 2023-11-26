from flask import Response, json
from database import Database


class ServiceUser(Database):
    def __init__(self, url):
        Database.__init__(self,url)

    def createUser(self, *args):
        try:
            INSERT = ('''INSERT INTO cliente(email,nome,senha) VALUES(%s,%s,%s)''')
            self.execute(INSERT, args)
            self.commit()
            return "Cliente criado com sucesso", 201
        except Exception as e:
            resp = Response(json.dumps(str(e).split("\n")), mimetype='application/json')
            resp.status_code = 400
            return resp

    def selecAll(self):
        try:
            SELECT = ("""SELECT * FROM cliente""")
            self.execute(SELECT)
            return self.fetchall()
        except Exception as e:
            resp = Response(json.dumps(str(e).split("\n")), mimetype='application/json')
            resp.status_code = 404
            return resp


    def selectUser(self,email):
        try:
            SELECT = (f"SELECT * FROM cliente WHERE email = '{email}' ")
            self.execute(SELECT)
            return self.fetchall()
        except Exception as e:
            resp = Response(json.dumps(str(e).split("\n")), mimetype='application/json')
            resp.status_code = 404
            return resp


    def deleteUser(self,email):
        try:
            SELECT = (f"DELETE FROM cliente WHERE email = '{email}' ")
            self.execute(SELECT)
            self.commit()
            return "Usuário deletado com sucesso",200
        except Exception as e:
            resp = Response(json.dumps(str(e).split("\n")), mimetype='application/json')
            resp.status_code = 404
            return resp

    def updateUser(self,*args):
        try:
            SELECT = (f"UPDATE cliente SET email=(%s) nome=(%s) WHERE email = (%s)")
            self.execute(SELECT,args)
            self.commit()
            return "Usuário atualizado com sucesso",200
        except Exception as e:
            resp = Response(json.dumps(str(e).split("\n")), mimetype='application/json')
            resp.status_code = 404
            return resp