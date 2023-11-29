from sympy import symbols, Eq, solve, plot
import matplotlib.pyplot as plt
from io import BytesIO
import numpy as np
import base64


def valores_pago(valor_pago_mes: [], tempo: int, taxa):
    total = 0
    for i in range(1, tempo):
        num = valor_pago_mes[i - 1] * (1 + taxa / 100)
        valor_pago_mes.append(num)
        total += num * 12
    return total


def comparando_tempo(aluguel, valor_compra, entrada, taxa_financiamento, taxa_aluguel, tempo):
    total_pago_compra = ((valor_compra - entrada) * (1 + (taxa_financiamento / 100)) ** (tempo)) + entrada
    print(total_pago_compra)
    total_pago_aluguel = 0
    anos = 1
    while total_pago_compra > total_pago_aluguel:
        num = aluguel * (1 + taxa_aluguel / 100)
        total_pago_aluguel += num * 12
        anos += 1
    return {total_pago_aluguel, total_pago_compra, anos}


# calcular(600000,150000,10,2000,8.5,11)

def calcular(valor_compra,
             valor_entrada,
             tempo,
             valor_aluguel,
             valorizacao_imovel,
             taxa_financiamento):
    # x = symbols('x')
    # Equation: a * (1 + 0.1)^x
    # y = a * (1 + 0.1) ** x
    total_pago_ano_compra = ((valor_compra - valor_entrada) * (1 + (taxa_financiamento / 100)) ** (tempo)) + valor_entrada
    print(total_pago_ano_compra)
    valor_pago_mes_compra = total_pago_ano_compra / (tempo * 12)
    print(valor_pago_mes_compra)

    valor_pago_mes_aluguel = [valor_aluguel]
    total_pago_ano_aluguel = valores_pago(valor_pago_mes_aluguel, tempo, valorizacao_imovel)

    print(valor_pago_mes_aluguel)
    print(total_pago_ano_aluguel)

    print(comparando_tempo(2000, 600000, 150000, 11, 8.5, 10))

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


calcular(600000, 150000, 10, 2000, 8.5, 11)
