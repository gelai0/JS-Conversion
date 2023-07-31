function weightConverter(valNum) {
    document.getElementById("inputKilograms").innerHTML =valNum * 1;
    document.getElementById("outputPounds").innerHTML = valNum * 2.2046;
    document.getElementById("outputOunces").innerHTML = valNum * 35.274;
    document.getElementById("outputGrams").innerHTML = valNum * 1000;

}

