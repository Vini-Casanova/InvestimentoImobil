import os
import psycopg2

class Database:
    def __init__(self,url):
        try:
            self.conn = psycopg2.connect(url)
            self.cur = self.conn.cursor()
        except Exception as e:
            print("Erro na conexão da base", e)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.commit()
        self.connection.close()

    @property
    def connection(self):
        return self.conn

    @property
    def cursor(self):
        return self.cur

    def commit(self):
        self.connection.commit()

    def fetchall(self):
        return self.cursor.fetchall()

    def execute(self, sql, parametros=None):
        self.cursor.execute(sql, parametros or ())

    def query(self, sql, parametros=None):
        self.cursor.execute(sql, parametros or ())
