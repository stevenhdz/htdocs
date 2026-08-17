function mult_y_muestra() {
    let n1 = document.getElementById("NumeroDeComputadores").value
    let n2 = document.getElementById("ValorUnidad").value

    let mult = parseInt(n1) * parseInt(n2)
    document.getElementById("TotalAPagar").value = mult

    $("#bot").hide();
    $("#bot2").show();
}