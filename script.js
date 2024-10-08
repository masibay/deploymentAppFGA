function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide (a,b) {
    if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
}

//pembelajaran RegEXP / REGEX
function isNameValid(name) {
    return /^[a-zA-Z]+$/.test(name);
}

//Check Rest API
function getAPI(url, callback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }