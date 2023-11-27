from sympy import symbols, Eq, solve, plot
import matplotlib.pyplot as plt
from io import BytesIO
import numpy as np
import base64


def index(valor_compra ,
	valor_entrada,
	tempo,
	valor_aluguel,valorizacao_imovel,
	taxa_financiamento):

    # x = symbols('x')
    a = 3000  # You can adjust the value of 'a' as needed

    # Equation: a * (1 + 0.1)^x
    #y = a * (1 + 0.1) ** x
    valor_pago_mes = [2500]
    total_pago_ano = [(2500*12)]
    tempo = 10

    for i in range(1, tempo+1):
        num = valor_pago_mes[i - 1] * (1 + 0.1)
        valor_pago_mes.append(num)
        total_pago_ano.append(num*12)
    print(valor_pago_mes)
    print(total_pago_ano)

    (valor_compra-valor_entrada * (1 + 0.1) ^ tempo/12 )+valor_entrada #  -> Em quanto tempo minimo é necessário para que o somatório seja maior que o totalcomprafinanceada

    # Generate x values for the plot
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