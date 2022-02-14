function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (parseFloat(principal) * parseFloat(years) * parseFloat(rate)) / 100;
    var year = new Date().getFullYear() + parseInt(years);
	document.getElementById("result").innerHTML	= "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%,\<br\>you will receive an amount of $" + interest + "\<br\>in interest in the year " + year + "\<br\>";
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}