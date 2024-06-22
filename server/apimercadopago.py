import mercadopago

def gerar_link_pagamento():
    sdk = mercadopago.SDK("APP_USR-6958796978210276-062121-702605b47b42d9288d02f102b70cde2b-720551381")

    payment_data = {
        "items": [
            {"id": "1", "title": "Camisa", "quantity": 1, "currency_id": "BRL", "unit_price": 0.10}
        ],
        "back_urls": {
            "success": "http://127.0.0.1:5000/compracerta",
            "failure": "http://127.0.0.1:5000/compraerrada",
            "pending": "http://127.0.0.1:5000/compraerrada",
        },
        "auto_return": "all"
    }
    result = sdk.preference().create(payment_data)
    payment = result["response"]
    link_iniciar_pagamento = payment["init_point"]
    return link_iniciar_pagamento
