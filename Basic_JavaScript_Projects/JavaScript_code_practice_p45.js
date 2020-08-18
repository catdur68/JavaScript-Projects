var student="nancy", Age=28, study_time="2 hours \/ day";//assigning values to several variables on 1 line
var student=student.fontcolor("red"), study_time=study_time.fontcolor("green"); //this fontcolor method does
// not seem to work if the var value is not a string
document.write(student);
document.write(Age);
document.write(study_time);


var hours = 10;//assigning a value to varialbe hours
var rate = 10.5; //assigning a value to variable rate
pay = (hours * rate);//write an expression for pay
document.write(pay)//print output of the varialbe pay


//THIS FUNCTION NEVER WORKED!!!//
function My_First_Function() { //defining and naming the function
    var worked_hours="twenty"; //defining the variable and giving it a string value
    var output = worked_hours.fontcolor("red"); //using the fontcolor METHOD on the string variable
    document.getElementById("Red_Text").innerHTML = output; //putting the value
    //of the output into HTML element with "Red_text" id
}

var lesson2 = " I don\'t know JavaScript very well yet, do you\?"
var lesson3 = (" This is about concatenation" 
    + " of string elements.")
document.write(lesson3, lesson2);

var lesson2_1 = " I\'ll try this way too."
var lesson3_1 = "did it work\?"
document.write("I\'ll try this way too. " + "did it work\?")

document.write(hours * rate); //writing and outputing an expression 
document.write(student, Age, study_time);