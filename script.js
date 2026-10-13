let amount = document.getElementById("amount");
let percentage = document.getElementById("percent");
let output = document.getElementById("output");
let submit = document.getElementById("subone");


function total () {
    amount = amount.value;
    percentage = percentage.value;
    console.log(percentage);
    let result = amount * (percentage/100);
    output.textContent = result;

}


submit.addEventListener("click", total);

