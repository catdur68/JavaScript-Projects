//function calculate()
//{
  //  window.alert("hello")
    //var a = 10;
    //document.write(a);
    //document.getElementById("compute").innerHTML = "the result of 10 - 4 = " + a;
//}
//testing link
//var a = 2
//document.write(a)
function calculate_add()
{
    var a = 10 - (2 + 5);
    document.getElementById("Compute1").innerHTML= "the result of 10 - (5+2) = "  + a;
}
function calculate_multiply()
{   var x = 120 * 3.5;
    document.getElementById("Compute2").innerHTML = "the result of 120 x 3.5 = " + x;

}
function calculate_divide()
{   var x = 420 / 120;
    document.getElementById("Compute3").innerHTML = "the result of 420 / 120 = " + x;

}
function more_math()
{
    var math_order = (1 + 2) * 10 / 2 - 5;
    // it will calculate as follow:
        // 1+2, then x10, then /2, then -5
    document.getElementById("Compute4").innerHTML = "(1+2) * 10 / 2 - 5 is " + math_order;
}
function modulus()
{
    var remainder = 36.5 % 5;
    document.getElementById("Compute5").innerHTML = " " + remainder;
}
function negation_operator()
{
    var unary = 36.5 % 5;
    document.getElementById("ReturnNegative").innerHTML = " " + - unary;
}

function increment()
{
    var unary = 36.5 % 5;
    unary++;
    document.getElementById("increment+").innerHTML = " " + - unary;
}
function basic_increment()
{
    var a = 36;
    a--;
    document.getElementById("increment-").innerHTML = " " + a;
}

window.alert(Math.random() * 100)

function math_round()
{
    var remainder = 36.5 % 5;
    document.getElementById("Compute6").innerHTML = "rounding the remainder of 36.5 % 5 gives us:  " + Math.round(remainder);
}

console.log(Math.round(0.9) + "  ");
// expected output: 1

console.log(Math.round(5.95) + " ", Math.round(5.5) + " ", Math.round(5.05) + " ");
// expected output: 6 6 5

document.write(Math.round(-5.05) + " ", Math.round(-5.5) + "spacing", Math.round(-5.95) + " ");
// expected output: -5 -5 -6
function calculate_substract()
{
    var a = 32 - 14;
    document.getElementById("Compute7").innerHTML= " "  + a;
}