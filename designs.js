// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    //To prevent loading the page
    event.preventDefault();
    //Define the variables
    var tableHight = document.getElementById("inputHeight").value;
    var tableWidth = document.getElementById("inputWidth").value;
    var tableCanaves = document.getElementById("pixelCanvas");
    //clearing the table
    tableCanaves.innerHTML = "";

    //creating rows and cells
    for (var n = 0; n < tableHight; n++) {
        var row = document.createElement("tr");
        for (var m = 0; m < tableWidth; m++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tableCanaves.appendChild(row);
    }


}

function fillCell(event) {
    //if the user click on td element the background value will be the picked cokor
    if (event.target.nodeName == "TD") {
        var pickedColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = pickedColor;
    }
}
