var enterValue=parseInt(prompt("Enter a amount"));

var amount=document.getElementById("amount");

 amount.value=enterValue;

// console.log(item_total);

var gst=3*enterValue/100;
// console.log(gst);

var gst_amount=document.getElementById("gst");

gst_amount.value=gst;
console.log(gst);

var total=document.getElementById("total");

console.log(typeof(item_total));
console.log(typeof(gst));

total.value=enterValue+gst;