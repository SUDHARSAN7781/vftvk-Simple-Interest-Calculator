function compute Interest()
{
    var principal= document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var Interest= principal * years * rate /100;
    var year= new date().getfullyear()+parseInt(years);
}
  
function updateRate()  
{    
    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function onchange()
{
   document.getElementById("result"). innerHTML="if you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>you will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
