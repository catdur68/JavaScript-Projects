function Ride_Function()
{
    var Height, Can_Ride; // the function will use 2 variables to be defined next
    Height = document.getElementById("Height").value;
    //get the value given by input and assign that value to variable Height
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    //conditional question - True --> You are too short, false --> you are tall enough
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
    //the result (the true or false) is inserted in the webpage where it is called for. 
}

function Can_Vote()
{
    var Age, Answer;
    Age = document.getElementById("Age").value;
    Answer = (Age > 18) ? "You can vote, so just do it." : "Sorry, you must be at least 18 years old to vote."
    document.getElementById("elligible").innerHTML = Answer;
}

function Vehicle(Make, Model, Year, Color)
{//creates a template of the Vehicle object
    // THIS IS A CONSTRUCTOR FUNCTION
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}//instantiate 4 vehicle objects 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Catherine = new Vehicle("Lexus", "LC430", 2007, "Champagne")

function myFunction()
{
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year + ".";
}

//
//Class Stock
//{
   // string Name;
    //Boolean Active;
      //  Stock(string name)
        //{
          //  Name = Name;
            //Ticker = Ticker;
            //Index = Index; 
            //IPODate = IPODate;
            //Active = true; 
            //Dividend = Dividend;
        //}
//}
//Stock stock = new Stock("Tesla");

function Stock(Ticker, Index, IPODate, Dividend)
{//this function is an object constructor
    this.Stock_Ticker = Ticker;
    this.Stock_Index = Index;
    this.Stock_IPODate = IPODate;
    this.Stock_Dividend = Dividend;
}
var Tesla = new Stock("TSLA", "NASDAQ", 20100629, 0);
function Stock_Data()
{
    document.getElementById("New_and_This").innerHTML="Tesla: "
    + Tesla.Stock_Ticker + " | " + Tesla.Stock_Index + " | "
    + Tesla.Stock_IPODate + " | " + Tesla.Stock_Dividend + " | ";
}

function compare_Function()//what html is calling for
{//definition of the count_Function
    document.getElementById("Nested_Function").innerHTML = countDown();
    // what will be returned to html is calling for another
    //function the count() function
        function countDown()
            {
            
        //definition of the count() function
        // it has a starting point and a function which returns
        //a value that becomes the new starting point
         
                var current_value = 4;
            //the count() function is now calling for
            //the function Plus_1 which is defined as:
                    function Minus_5()
                    {current_value -= 5;}
                Minus_5();//performs instructions from function defined above
                return (current_value > 0) ? current_value : "We cannot have a negative number for result! Try again with a number greater than 5.";
                // here we look at the results of the function, and
                //depending on the results, we post the result of the
                //operation or post an error message
            }
            
}































