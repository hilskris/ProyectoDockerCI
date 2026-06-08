function evaluarTemperatura(valor) {
    if (valor >= 40) {
        return "Crítico";
    }

    if (valor >= 30) {
        return "Alerta";
    }

    return "Normal";
}

module.exports = evaluarTemperatura;