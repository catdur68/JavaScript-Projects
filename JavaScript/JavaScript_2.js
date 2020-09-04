function testing() {
    return (2+3);

    document.getElementById("test").innerHTML = (2+3);
};


function validateForm() {
    var emptFN = document.forms["Contact"]["FN"].value;
        if (emptFN == "") {
        //document.forms["Contact"]["FN"].style.backrground = "yellow";
        alert("This field cannot be empty. Please enter the requested information");
        return false;
       }
       var emptLN = document.forms["Contact"]["LN"].value;
       if (emptLN == "") {
       //document.forms["Contact"]["LN"].style.backrground = "yellow";
       alert("This field cannot be empty. Please enter the requested information");
       return false;
      }
      var emptP = document.forms["Contact"]["P"].value;
       if (emptP == "" | emptP != "[0-9]{3}-[0-9]{3}-[0-9}{4}" ) {
       //document.forms["Contact"]["P"].style.backrground = "yellow";
       alert("Please enter your phone number in the format requested (123-456-7890).");
       return false;
       }
        //else {
        //alert('Thank you for completing the form.');
        //return true; 
        //}
}