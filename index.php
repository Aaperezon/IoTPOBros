    <!DOCTYPE html>


    <html>
    <head>
        <title>IoTPOBros</title>
        <script src="libs/js/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"> </script>
        <link rel="stylesheet" href="libs/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="libs/js/jQueryRotate.js"> </script>

        <script src="libs/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="libs/css/style.css">
        <script src="libs/js/iotpobros.js"></script>

    </head>
    <body style="background-color:#000000;">
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm" id="column">
                    <label class="PID_Allocation">P:</label>
                    <input id="P_Edit" onclick="EditPID();" type="number" step="0.01" value="0"> <br>
                    <label class="PID_Allocation">I:</label>
                    <input id="I_Edit" onclick="EditPID();" type="number" step="0.01" value="0"> <br>
                    <label class="PID_Allocation">D:</label>
                    <input id="D_Edit" onclick="EditPID();" type="number" step="0.01" value="0">


                </div>
            </div>
        </div>  
        <div class="container">
            <div class="row">
                <div class="col-sm" id="column">
                    <input id="button" onclick="ChangeSwitchValue(true);" type="submit" name="button" value="On"/>
                    <br>
                    <input id="button" onclick="ChangeSwitchValue(false);" type="submit" name="button" value="Off"/>

                </div>
            </div>
        </div>  
        <div class="container">
            <div class="row">
                <div class="col-sm" id="column">
                    <label>Gyro_X</label> <br>
                    <label id="gyroXLabel">test</label> <br>
                    <img class = "GyroImage" id="PitchAxisImage" src="assets/PitchAxis.png" alt="Pitch Axis Image">

                </div>
                <div class="col-sm" id="column">
                    <label>Gyro_Y</label> <br>
                    <label id="gyroYLabel">test</label> <br>
                    <img class = "GyroImage" id="YawAxisImage" src="assets/YawAxis.png" alt="Yaw Axis Image">

                </div>
                <div class="col-sm" id="column">
                    <label>Gyro_Z</label> <br>
                    <label id="gyroZLabel">test</label> <br>
                    <img class = "GyroImage" id="RollAxisImage" src="assets/RollAxis.png" alt="Roll Axis Image">

                </div>
            </div>
        </div>  
        
        


    </body>

    </html>