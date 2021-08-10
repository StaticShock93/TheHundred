// get the values from the Page
// starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    // we need to validate our input
    // parse into Integers and only accept #'s from 0-100
    startValue = Math.min(Math.max(parseInt(startValue), 0), 100);
    endValue = Math.min(Math.max(parseInt(endValue), 0), 100);


    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        // we call displayNumbers
        displayNumbers(numbers);


    } else {
        alert("You must enter integers only");
    }


    if (startValue < 0 || startValue > 100) {
        this.value = 0;
        alert("You must enter a number from 0-100");
    }

    if (endValue < 0 || endValue > 100) {
        this.value = Math.floor(Math.random() * 100);
        alert("You must enter a number from 0-100");
    }



}


// generate numbers from startValue to the endValue 0-100
// logic function 1
function generateNumbers(sValue, eValue) {

    let numbers = [];


    // we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {

        // this will execute in a loop until index = eValue
        numbers.push(index);

    }

    return numbers;
}

// we want to only allow for input values from 0-100
// logic function 2
function displayAlert() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    if (startValue < 0 || startValue > 100) {
        this.value = 0;
        alert("You must enter a number from 0-100");
    }

    if (endValue < 0 || endValue > 100) {
        this.value = 100;
        alert("You must enter a number from 0-100");
    }
}

// display the numbers and mark even numbers bold
// display or view function
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;

}