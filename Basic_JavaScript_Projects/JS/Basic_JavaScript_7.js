function local_variable()
{
    x = 1000
    document.getElementById("LOCAL_VARIABLE").innerHTML = "Result: " + (x * 2.5);
}
var Y = 250;
//Y is a global variable
function calculate()
{
    //document.write(Y * 3.5)
    var b = Y *3.5;
    document.getElementById("test").innerHTML = b;
}

function cacl_err()
{
    var c = b/10
    console.log(c)
}
function fix_err()
{
    var b = Y * 3.5;
    var c = b / 10;
    console.log(c);
    document.write = c;
    document.getElementById("err_fixed").innerHTML = c;

}
function current_date()
{
    var today = new Date;
    var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    document.getElementById("day").innerHTML = date;
}
function greetings()
{
    var today = new Date();
    var time = today.getHours();
    if (time > 18) document.getElementById("msg").innerHTML = "Good Evening! ";
    if (time < 12) document.getElementById("msg").innerHTML = "Good Morning! ";
    if (12 > time < 18) document.getElementById("msg").innerHTML = "Good afternoon! ";
}
function greeting_else()
{
    var today = new Date();
    var time = today.getHours();
    var hour = parseInt(document.getElementById("clock").value);
    
    console.log(time);
     if (hour == time) {
        var greet = "Hi! ";}
        //else if (time != 12) {
            //gretting = "Good Morning! ";}
    else {
            greet = "This is not the right hour! ";}
    console.log(greet);     
    document.getElementById("customMsg").innerHTML = greet;
}
function elseif()
{
    var time = new Date().getHours();
    var time_now; 
    
    //console.log(time);
     if (time < 12 == time > 0) {
        time_now = "It is morning time. ";}
    else if (time > 12 == time < 18) {
        time_now = "It is the afternoon. ";}
    else {
        time_now = "It us evening time. ";}
    //console.log(time_now);    
    document.getElementById("formalHello").innerHTML = time_now;
}






























