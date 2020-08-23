function sentence()
{
    //declare string variables
    var a = "Hello, ";
    var b = "there is so much ";
    var c = "unfairness in ";
    var d = "this world. ";
    //make a new variable for the finished product
    var phrase = a.concat(b,c,d);
    //send new variable to HTML
    //console.log(phrase)
    document.getElementById("assembled").innerHTML = phrase;
}
var phrase = "Hello, there is so much unfairness in this world";
console.log(phrase)
function slice()
{
    var Word = phrase.slice(24,34);
    document.getElementById("oneWord").innerHTML = Word;
}
function to_majuscule()
{
    var Word = "unfairness";
    var WORD = Word.toUpperCase();
    console.log(WORD);
    document.getElementById("convert").innerHTML = WORD;
}
function mySearch()
{
    var a = "the only Arab countries with normal ties with Israel.";
    var mot = a.search(/israel/i);
    //case insensitive search - put / before and after word and i
    // normal search requires " "
    //returns the position where the item was found
    console.log(mot);
    document.getElementById("trouve").innerHTML = mot;
}
function convertNumb()
{
    var x = 100;
    document.getElementById("Numb_to_string").innerHTML = x.toString();
}
function Keep_decimals()
{
    var lpi = 3.14159265359;
    document.getElementById("precisely").innerHTML = lpi.toPrecision(6);
    //this will return 5 decimals after the comma. The comma counts as 1.
}
function mytoFixed()
{
    var lpi = 3.14159265359;
    var short_pi = lpi.toFixed(2);
    document.getElementById("numb_Rd_str").innerHTML = short_pi;
}
function primitive()
{
    var x = "Jackpot";
    var y = x.valueOf(y);
    document.getElementById("val").innerHTML = y;
}

