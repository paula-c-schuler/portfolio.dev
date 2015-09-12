// function () {
//     "use strict";

// EXERCISE 4.7.3

    var buttons = document.getElementsByClassName("buttons");     

    var spot1Holder = "";
    var spot2Holder = "";
    var operand = "";
    var fieldLeft = document.getElementById("fieldLeft");
    var fieldRight = document.getElementById("fieldRight");
    var result = "";

    //THIS ITERATION ADDS A LISTENER TO EVERY BUTTON 
    for (var i = 0; i < buttons.length; i++)
    { 
        buttons[i].addEventListener("click", buttonInputsPopulated, false);
    }

    function buttonInputsPopulated (event)
    {
        var value = this.value; 
        if (this.value === "c")
        {
            clearFields();
        }
        else if (this.value === "=")
        {
            evaluateFields();
            clearFieldOperand();
        }
        else if (isNaN(this.value))
        {
            operand = this.value;
            document.getElementById("operand").value = operand;
        }
        else if (operand != "")
        {
            fieldRight.value += this.value;
        } else 
        {
            fieldLeft.value += this.value;
        }
    }

    var clearFieldOperand = function ()
    {
        document.getElementById("operand").value = "";
    } 

    var clearFields = function ()
    {
        location.reload(true); 
    }

    var evaluateFields = function()
    {
        operand = document.getElementById("operand");
        if (operand.value == "+")
        {
            fieldLeft.value = parseInt(fieldLeft.value) + parseInt(fieldRight.value);
            fieldRight.value = "";
        } else if (operand.value == "-")
        {
            fieldLeft.value = parseInt(fieldLeft.value) - parseInt(fieldRight.value);
            fieldRight.value = "";
        } else if (operand.value == "*")
        {
            fieldLeft.value = parseInt(fieldLeft.value) * parseInt(fieldRight.value);
            fieldRight.value = "";
        } else if (operand.value == "/")
        {
            fieldLeft.value = parseInt(fieldLeft.value) / parseInt(fieldRight.value);
            fieldRight.value = "";
        }
    }
// }


