// Write your JavaScript code here!

// Step 1: Set up coin values (use cents to make math easier)
const coins = {
    dollar: 100,/* put value in cents */
    quarter: 25,/* put value in cents */
    dime: 10,/* put value in cents */
    nickel: 5,/* put value in cents */
    penny: 1/* put value in cents */
};

// Step 2: Function to calculate change
function calculateChange(salePrice, amountReceived) {

    let change = Math.round((amountReceived - salePrice) * 100)// Convert dollars to cents to avoid decimal problems

    let result = {};

    let moreMoney = salePrice
    if (amountReceived < moreMoney) {
        let amount = moreMoney - amountReceived
        amount = amount.toFixed(2)
        result.moreMoney = "MISSING AMOUNT: $" + amount;
    }

    let hundredDollarBill = Math.floor(change / 10000);
    if (hundredDollarBill > 0) {
        result.hundredDollarBill = hundredDollarBill;
    }
    change = change % 10000;

    let fiftyDollarBill = Math.floor(change / 5000);
    if (fiftyDollarBill > 0) {
        result.fiftyDollarBill = fiftyDollarBill;
    }
    change = change % 5000;

    let twentyDollarBill = Math.floor(change / 2000);
    if (twentyDollarBill > 0) {
        result.twentyDollarBill = twentyDollarBill;
    }
    change = change % 2000;

    let tenDollarBill = Math.floor(change / 1000);
    if (tenDollarBill > 0) {
        result.tenDollarBill = tenDollarBill;
    }
    change = change % 1000;

    let fiveDollarBill = Math.floor(change / 500);
    if (fiveDollarBill > 0) {
        result.fiveDollarBill = fiveDollarBill;
    }
    change = change % 500;

    let twoDollarBill = Math.floor(change / 200);
    if (twoDollarBill > 0) {
        result.twoDollarBill = twoDollarBill;
    }
    change = change % 200;

    let Dollars = Math.floor(change / 100);
    if (Dollars > 0) {
        result.Dollars = Dollars;
    }
    change = change % 100;

    let quarters = Math.floor(change / 25);
    if (quarters > 0) {
        result.quarters = quarters
    }
    change = change % 25;

    let dimes = Math.floor(change / 10);
    if (dimes > 0) {
        result.dimes = dimes
    }
    change = change % 10;

    let nickels = Math.floor(change / 5);
    if (nickels > 0) {
        result.nickels = nickels
    }
    change = change % 5

    let pennies = Math.floor(change / 1)
    if (pennies > 0) {
        result.pennies = pennies
    }
    return result
}

// Step 3: Function to handle button click
function handleClickEvent() {
    let amountOwed = document.getElementById("amount-due").value
    amountOwed = Number(amountOwed);// 1. Grab sale price from input field (remember to convert to number)
    let amountReceived = document.getElementById("amount-received").value
    amountReceived = Number(amountReceived);// 2. Grab amount received from input field (remember to convert to number)
    let result = calculateChange(amountOwed, amountReceived)// 3. Call calculateChange() with these values
    let outputMoreMoney = document.getElementById("more-money")
    outputMoreMoney.textContent = result.moreMoney;
    let outputHundred = document.getElementById("hundreds-output")
    outputHundred.textContent = result.hundredDollarBill || 0;
    let outputfifty = document.getElementById("fifties-output")
    outputfifty.textContent = result.fiftyDollarBill || 0;
    let outputTwenty = document.getElementById("twenties-output")
    outputTwenty.textContent = result.twentyDollarBill || 0;
    let outputTen = document.getElementById("tens-output")
    outputTen.textContent = result.tenDollarBill || 0;
    let outputFive = document.getElementById("fives-output")
    outputFive.textContent = result.fiveDollarBill || 0;
    let outputTwo = document.getElementById("twos-output")
    outputTwo.textContent = result.twoDollarBill || 0;
    let outputDollars = document.getElementById("dollars-output")// 4. Grab output elements from HTML
    outputDollars.textContent = result.Dollars || 0;// 5. Display the number of dollars, quarters, dimes, nickels, and pennies in the HTML
    let outputQ = document.getElementById("quarters-output")// 4. Grab output elements from HTML
    outputQ.textContent = result.quarters || 0;
    let outputDimes = document.getElementById("dimes-output")// 4. Grab output elements from HTML
    outputDimes.textContent = result.dimes || 0;
    let outputN = document.getElementById("nickels-output")// 4. Grab output elements from HTML
    outputN.textContent = result.nickels || 0;
    let outputP = document.getElementById("pennies-output")// 4. Grab output elements from HTML
    outputP.textContent = result.pennies || 0;
}

// Step 4: Set button click event
document.getElementById("calculate-change").onclick = handleClickEvent;
button.onclick = handleClickEvent
