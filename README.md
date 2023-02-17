## USER
let number = document.getElementById('num')
let entries = document.getElementById('preent')
let count = 0
let previousCounts = []; // declare an array to keep track of previous counts
let initialCount = 0;

function increment() {
  count += 1
  number.innerText = count
}

function decrement() {
  count -= 1
  if (count<0){
    count = 0
  }
  number.innerText = count
}

function reset() {
  count = 0
  number.innerText = count
}

function save() {
  // If count is still 0, show an error message
  if (count === 0) {
    let errorMessage = document.getElementById('error-message');
    errorMessage.innerText = "Error: Please click on INCREMENT or DECREMENT before saving!";
    setTimeout(() => {
      errorMessage.innerText = "";
    }, 1000);
    return;
  }

  // If the count has not changed, show an error message
  if (count === initialCount) {
    let errorMessage = document.getElementById('error-message');
    errorMessage.innerText = "Error: Already saved!";
    setTimeout(() => {
      errorMessage.innerText = "";
    }, 1000);
    return;
  }

  // If the count has changed, update the list of previous counts
  let countStr = count + " - ";
  if (countStr.endsWith("- ")) {
    countStr = countStr.slice(0, -2);
  }

  if (entries.innerText === "No entries yet.") {
    entries.innerText = countStr;
  } else {
    entries.innerText += " - " + countStr;
  }

  if (entries.innerText !== "No entries yet." && entries.innerText.length > 0) {
    document.getElementById('no-entries').style.display = "none";
  }

  initialCount = count;
}

function cleartext() {
  entries.innerText = "Previous Entries:"
}

write a github read me

## ASSISTANT
Sure! Here's an example of a README file you could write for this code:

# Counter App

This is a simple web app that allows you to count up or down, and save your counts for later.

## Installation

There is no installation required to use this app. Simply open the `index.html` file in a web browser.

## Usage

To use the app, simply click the "INCREMENT" or "DECREMENT" button to increase or decrease the count. You can also click the "RESET" button to reset the count to zero.

To save your count, click the "SAVE" button. If you haven't incremented or decremented the count at least once, you will see an error message. If you have already saved the current count, you will also see an error message.

To view your previous counts, click the "PREVIOUS ENTRIES" button. This will display a list of all the counts you have saved. You can clear this list by clicking the "CLEAR ENTRIES" button.

## Contributing

This app was created as a learning exercise, but feel free to fork the repository and make any improvements you'd like. If you do make improvements, please consider submitting a pull request so that others can benefit from your changes.

## License

This app is released under the MIT License. See the LICENSE file for more information.