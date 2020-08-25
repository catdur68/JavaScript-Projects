function call_loop () {
    var next_count = "";
    var X = 0;//starting value
    while (X <= 15 ) {
        next_count += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = next_count;
}

a = "pineapple";
document.write(a.length);
// should return 9

var instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet", "Flute"];
//document.write(instruments.length)
var content = ""; //like an empty bucket
var Y;
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {

        // sets the initial value for Y to 0
        // counts the number of items in the list (length)
        //for any Y less than length, execute:
        content += instruments[Y] + "<br>";
        //that is take the value of this index, and assign
        //it to the new variable
        } //then re-iterate (Y++) if condition is still true
    document.getElementById("List_of_instruments").innerHTML = content;
} 
function array_function() {
    var vehicles = []; //empty array of cat pictures
    vehicles[0] = "car";
    vehicles[1] = "boat"; //we are putting values in the array 
    vehicles[2] = "motorcycle"; //at some precise location
    vehicles[3] = "bus";
    document.getElementById("array").innerHTML = "I commute by  " + 
        vehicles[0] + ".";
}

function constant_function() {
    const patient = ["Gender: Male", "Age:74", "Weight: 180", "Height: 5.11", "Diagnosis: Healthy"];
    patient.Age = 75;
    patient.Weight = 175;
    patient.Diagnosis = "sick"
    patient.condition = "stable"
    document.getElementById("constant0").innerHTML = "Here we have a patient, " + patient[0] + ".";
    document.getElementById("constant1").innerHTML = "A " + patient.Age +
    " year-old, " + patient.Weight + " lbs is now " + patient.Diagnosis
     + ". He is in " + patient.condition + " condition."
   
}
//this function only runs kinda well with document.write
//but it also erase anything on the web page ! why? the document.getElementById does 
//not want to work
var X = 1125;
function let_var_be () {
    var Y = 0.10;
    (X * Y); //returns 112.5
    {
        let Y = 0.15;
        var Z = (X * Y);
        document.getElementById("letItBe").innerHTML = Z;
        //document.write("with a rate increase, X would increase by " + Z);
    }

}
//this function gives the correct result in the console, but does not work
//with html 
var c = add_2(3,15); //calls the function
    function add_2 (a,b) {//definition of the function
    return a + b; //what will be return and assigned to variable
}
console.log(c)
document.getElementById("function_return").innerHTML = c;

let driver = {
    gender: "male",
    age:  24,
    name: "Henry",
    is_:"driving",
    speed: 60,
    speed_up : accelerate() {
        return 80;}
    document.getElementById("new_speed").innerHTML = this.speed_up;
}

