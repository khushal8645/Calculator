function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    var displayValue = document.getElementById("display").value;
    try {
        var result = eval(displayValue);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

function deleteLast() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}