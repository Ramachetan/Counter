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
