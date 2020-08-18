document.write("Hello World!");

var lesson1 = " This is how to assign a string value to a variable in JavaScript."
document.write(lesson1);

window.alert("the abc of JavaScript")

var lesson2 = " I don\'t know JavaScript very well yet, do you\?"
document.write(lesson2);

var lesson3 = (" This is about concatenation" 
    + " of string elements.")
document.write(lesson3);

document.write(" This is another" + " way to concatenate" + " string values.");

var student="nancy", Age=28, study_time="2 hours \/ day";


document.write(student);
document.write(Age);
document.write(study_time);

//chalenge page 60
function usercopy (){ //defining the function and giving it a name
    var new_text="This is what happens to copied text";//define the variable
    var result = new_text.fontcolor("red");//using method to change the font color of the output text
    document.getElementById("text_copied").innerHTML = result;
}
