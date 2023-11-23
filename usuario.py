from sympy import symbols, Eq, solve, plot
import matplotlib.pyplot as plt
from io import BytesIO
import base64

def index():
        x = symbols('x')
        equation = Eq(x**2 - 4, 0)
        solution = solve(equation, x)

        # Generate plot
        plt.plot([-2, 2], [0, 0], color='red')  # x-axis
        plt.plot([solution[0], solution[0]], [-5, 5], color='blue')  # root

        issoai = plot(3*x**2 + 8*x + 1)
        # Save plot to BytesIO
        img = BytesIO()
        issoai.save(img)
       ##plt.savefig(img, format='png')
        img.seek(0)

        # Encode plot image to base64
        plot_url = base64.b64encode(img.getvalue()).decode()

        return plot_url
