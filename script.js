function hitungLuas() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;
        document.getElementById("result").innerHTML = "Luas Segitiga: " + area;
    } else {
        document.getElementById("result").innerHTML = "Masukkan nilai yang valid.";
    }
}

function resetForm() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}
