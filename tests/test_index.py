def test_titulo():
    with open("index.html", "r", encoding="utf-8") as archivo:
        contenido = archivo.read()

    assert "Bienvenido" in contenido