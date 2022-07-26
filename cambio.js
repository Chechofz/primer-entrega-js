function convertir() {
    let valore = parseInt(document.getElementById("valor").value)
    let resultado = 0
    let dolar = 4
    let euro = 5
    if ( document.getElementById("uno").checked){
        resultado = valore / dolar
        alert("El cambio de Peso a Dolares es: $" + resultado)

    }
    else if ( document.getElementById("dos").checked){
        resultado = valore / euro
        alert("El cambio de Peso a Euros es: " + resultado)
    }
    else{
        alert ("tienes que completar todos los datos")
    }
}