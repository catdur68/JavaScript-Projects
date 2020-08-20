function stock_watch()
{
    var Stock = {
        name: "Tesla",
        ticker: "TSLA",
        index: "NASDAQ",
        sector: "Auto-Manuf",
        dividend: "No",
        Price_Earning: 971.07,
        EPS: 1.94,
        rating: "C"
    };
    //document.getElementById("Dictionary").innerHTML = Stock.Price_Earning;
    delete Stock.Price_Earning;
    document.getElementById("Dictionary").innerHTML = Stock.Price_Earning;
   
}



