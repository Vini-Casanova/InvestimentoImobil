from sympy import symbols, Eq, solve, plot
import matplotlib.pyplot as plt
from io import BytesIO
import numpy as np
import base64


def valores_pago(valor_pago_mes:[],total_pago_ano:int, tempo:int,taxa):
    for i in range(1, tempo+1):
        num = valor_pago_mes[i - 1] * (1 + taxa/100)
        valor_pago_mes.append(num)
        total_pago_ano+= num*12

    
def index(valor_compra ,
	valor_entrada,
	tempo,
	valor_aluguel,
    valorizacao_imovel,
	taxa_financiamento):

    # x = symbols('x')
    # Equation: a * (1 + 0.1)^x
    #y = a * (1 + 0.1) ** x
    parcela = valor_compra-valor_entrada/tempo
    valor_pago_mes_compra = [parcela]
    total_pago_ano_compra = 0
    valor_pago_mes_aluguel = [valor_aluguel]
    total_pago_ano_aluguel = 0

    valores_pago(valor_pago_mes_compra,total_pago_ano_compra,tempo,taxa_financiamento)
    valores_pago(valor_pago_mes_aluguel,total_pago_ano_aluguel,tempo,valorizacao_imovel)



    (valor_compra-valor_entrada * (1 + 0.1) ^ tempo )+valor_entrada #  -> Em quanto tempo minimo é necessário para que o somatório seja maior que o totalcomprafinanceada
    number = 0
    minNum = 1
    while number > 0:
        number=(valor_compra-valor_entrada * (1 + 0.1) ^ tempo )+valor_entrada
        
        
    # x_values = np.linspace(1, 10, 100)
    # y_values = [y.evalf(subs={x: val}) for val in x_values]
    #
    # # Generate plot
    # plt.plot(x_values, y_values, label=f'{a} * (1 + 0.1)^x', color='blue')
    #
    # # Save plot to BytesIO
    # img = BytesIO()
    # plt.legend()
    # plt.xlabel('x')
    # plt.ylabel('y')
    # plt.title(f'Plot of {a} * (1 + 0.1)^x')
    # plt.grid(True)
    # plt.savefig(img, format='png')
    # img.seek(0)
    #
    # # Encode plot image to base64
    # plot_url = base64.b64encode(img.getvalue()).decode()
    #
    # return plot_url

index()