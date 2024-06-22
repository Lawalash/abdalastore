from flask import Flask, render_template
import apimercadopago

app = Flask(__name__)

@app.route("/")
def homepage():
    link_pagamento = apimercadopago.gerar_link_pagamento()
    return render_template("homepage.html", link_pagamento=link_pagamento)

@app.route("/compracerta")
def compra_certa():
    return render_template("compracerta.html")

@app.route("/compraerrada")
def compra_errada():
    return render_template("compraerrada.html")

if __name__ == "__main__":
    app.run()
