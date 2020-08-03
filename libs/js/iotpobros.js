setInterval(function() {
    CheckDB();
    Upload();
}, 1)

//GLOBAL VARIABLES
var id, time, gyroX, gyroY, gyroZ, P_Data, I_Data, D_Data;
var anyChange = false
var switchValue = 0,
    P_Edit = 0.0,
    I_Edit = 0.0,
    D_Edit = 0.0

function CheckDB() {
    $.ajax({
        type: "GET",
        url: "../iotpobros/services/ReadRPI_Client.php",
        datatype: "json",
        async: false,
        success: function(responseFunction) {
            responseFunction = JSON.parse(responseFunction);
            responseFunction = String(responseFunction);
            var splitData = responseFunction.split(',');
            SaveResponse(splitData);
        }

    });
    $.ajax({
        type: "GET",
        url: "../iotpobros/services/ReadClient_RPI.php",
        datatype: "json",
        async: false,
        success: function(responseFunction) {
            responseFunction = JSON.parse(responseFunction);
            responseFunction = String(responseFunction);
            var splitData = responseFunction.split(',');
            if (splitData == "") {
                anyChange = true;
                Upload()
            }
        }

    });


}

function SaveResponse(splitData) {
    var j = 0;
    var base = 10;
    id = parseInt(splitData[j++], base);
    time = splitData[j++];
    gyroX = parseFloat(splitData[j++]);
    gyroY = parseFloat(splitData[j++]);
    gyroZ = parseFloat(splitData[j++]);
    P_Data = parseFloat(splitData[j++]);
    I_Data = parseFloat(splitData[j++]);
    D_Data = parseFloat(splitData[j++]);
    Show(gyroX, gyroY, gyroZ);
    PIDConfiguration(P_Data, I_Data, D_Data)
}

var changePID = false
var firstAssignmentPID = true;

function PIDConfiguration(P_Data, I_Data, D_Data) {
    if (changePID == true) {
        P_Edit = document.getElementById("P_Edit").value;
        I_Edit = document.getElementById("I_Edit").value;
        D_Edit = document.getElementById("D_Edit").value;
        anyChange = true;
        changePID = false;
        console.log(P_Edit + " -> " + P_Data)
    } else if (firstAssignmentPID == true) {

        document.getElementById("P_Edit").value = P_Data;
        document.getElementById("I_Edit").value = I_Data;
        document.getElementById("D_Edit").value = D_Data;
        P_Edit = document.getElementById("P_Edit").value;
        I_Edit = document.getElementById("I_Edit").value;
        D_Edit = document.getElementById("D_Edit").value;
        firstAssignmentPID = false;
    }

    //P_Edit.type = "text"; //changes the input type from 'button' to 'text'.
    //P_Edit.value = "I'm a changed button";
}

function EditPID() {
    changePID = true;
    console.log("click")
}

function Show(gyroX, gyroY, gyroZ) {

    document.getElementById('gyroXLabel').innerHTML = gyroX;
    document.getElementById('gyroYLabel').innerHTML = gyroY;
    document.getElementById('gyroZLabel').innerHTML = gyroZ;

    $(document).ready(function() {
        $("#PitchAxisImage").rotate(gyroX)
    });
    $(document).ready(function() {
        $("#YawAxisImage").rotate(gyroY)
    });
    $(document).ready(function() {
        $("#RollAxisImage").rotate(gyroZ)
    });

}



function ChangeSwitchValue(state) {
    if (state == true) {
        switchValue = 1
        anyChange = true;
    } else {
        switchValue = 0
        anyChange = true;
    }
}

function Upload() {
    if (anyChange == true) {
        var theUrl = 'http://localhost/IoTPOBros/services/CreateClient_RPI.php/?switchValue=' + String(switchValue) + '&P_Data=' + String(P_Edit) + '&I_Data=' + String(I_Edit) + '&D_Data=' + String(D_Edit);
        console.log(theUrl)
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        anyChange = false;

    }

}