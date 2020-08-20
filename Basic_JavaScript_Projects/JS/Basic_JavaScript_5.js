document.write(typeof "Variable string");

document.write(1010 == "10" + 10);
document.write(20 == "ten" +  10);
document.write("1010" === "10"+"10");
document.write(101 === "100");
document.write("1010" === 1010);
document.write(100 === 200);

document.write(176 > 175 && 176 <= 177);
document.write(176 === "176" && "176" < "200");

document.write("red" === "red" || "red" === "blue");
document.write("red" === "blue" || "blue" === "green");

function not_Function()
{
    document.getElementById("NOT-not").innerHTML = ! (20 > 30);
    document.getElementById("NOT").innerHTML = ! (20 > 10);
}
/////////////////////////////////////////////////////////////////



function question1()
{
    document.getElementById("Boolean1").innerHTML= isNaN("100ABC");
}
function question2()
{
    document.getElementById("Boolean2").innerHTML= isNaN("100");
}

function question3()
{
    var a = 1.2 * 10E1000;
    document.getElementById("undefined").innerHTML = a;
}
function question3_1()
{
    var a = -1.2 * 10E1000;
    document.getElementById("undefined3").innerHTML=  a;
}

function question4()
{
    var a = 0 / 0;
    document.getElementById("undefined1").innerHTML= a;
}
document.write(-2.1E310);

document.write(100 >= 99);
document.write(23.5*33 < 500);

console.log(120*120);

document.write("10" + 5);

console.log(("10" + 10) < 1000);




























