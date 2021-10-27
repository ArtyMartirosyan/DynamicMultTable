document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    document.getElementById("create").addEventListener("click", generateTable);

    function generateTable () {
        if (count > 0) {  // remove table if it exists
            removeTable();
        };

        count++;

        let div = document.createElement('div');
        div.classList.add('box');
        document.body.appendChild(div);

        var table = document.createElement("table");
        document.body.appendChild(table);

        div.appendChild(table);

        var xBegin = parseInt(document.getElementById("cfrom").value);
        var xEnd = parseInt(document.getElementById("cto").value);
        var yBegin = parseInt(document.getElementById("rfrom").value);
        var yEnd = parseInt(document.getElementById("rto").value);

        generateRows(xBegin, xEnd, yBegin, yEnd);

        function generateRows (xBegin, xEnd, yBegin, yEnd) {
            for (var i = yBegin-1; i < yEnd+1; i++) { // create and go through each <tr> tag
                var r = document.createElement("tr");
                var row = table.appendChild(r);

                for (var j = xBegin-1; j < xEnd+1; j++) { // create and go through each <td> tag
                    var d = document.createElement("td");
                    //added .style for simplicity sake
                    if(i==yBegin-1 && j==xBegin-1) {
                        var cellVal = "";
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.top = "0";
                    }
                    else if(j==xBegin-1) {
                        var cellVal = i;
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.left = "0";
                    }
                    else if(i==yBegin-1) {
                        var cellVal = j;
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.top = "0";
                    }
                    else {
                        var cellVal = i*j;
                        d.textContent = cellVal;
                    }
                    row.appendChild(d);  // create <td>s inside each <tr>
                }
            }
        }
    }

    function removeTable () {
        var parent = document.body;
        var child = document.getElementsByClassName("box")[0];
        parent.removeChild(child);
    }
});

//test cases errors
function errMsg() {
        
    if(isNaN(parseInt(document.getElementById("rfrom").value))) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 1st row element</span>";
    } else if(isNaN(parseInt(document.getElementById("rto").value))) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 2nd row element</span>";
    } else if(isNaN(parseInt(document.getElementById("cfrom").value))) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 1st column element</span>";
    } else if(isNaN(parseInt(document.getElementById("cto").value))) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 2nd column element</span>";
    } else if(parseInt(document.getElementById("rfrom").value) < -100 || document.getElementById("rfrom").value > 100) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 1st row element: out of bounds (has to be between -100 and 100)";
        document.getElementById("rfrom").value = "";
    } else if(parseInt(document.getElementById("rto").value) < -100 || document.getElementById("rto").value > 100) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 2nd row element: out of bounds (has to be between -100 and 100)";
    } else if(parseInt(document.getElementById("cfrom").value) < -100 || document.getElementById("cfrom").value > 100) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 1st column element: out of bounds (has to be between -100 and 100)";
    } else if(parseInt(document.getElementById("cto").value) < -100 || document.getElementById("cto").value > 100) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for 2nd column element: out of bounds (has to be between -100 and 100)";
    } else if(parseInt(document.getElementById("rfrom").value) > parseInt(document.getElementById("rto").value)) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for row: 1st row element must be less than 2nd row element";
    } else if(parseInt(document.getElementById("cfrom").value) > parseInt(document.getElementById("cto").value)) {
        err.innerHTML = "<span style='color: red;'>"+"Please enter a valid number for row: 1st column element must be less than 2nd column element";
    } else {
        err.innerHTML = "";
    }
}