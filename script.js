function compute()
{
	//Obtain the values and perform calculation
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (parseFloat(principal) * parseFloat(years) * parseFloat(rate)) / 100;
    var year = new Date().getFullYear() + parseInt(years);
	//Present the values along with the calculated interest over the given # of years
	document.getElementById("result").innerHTML	= "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%,\<br\>you will receive an amount of $" + interest + "\<br\>in interest in the year " + year + "\<br\>";
}
//When the slider bar is changed, update the rate value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function validateAmount()
{
	var principal = document.getElementById("principal").value;
	if(principal <= 0){
		alert("Enter a positive number.");
		document.getElementById("principal").focus();
	}
}