 //Made a function called Total()
function Total() {
//The  parseFloat() function converts a string representation of a number or a numerical expression into a floating-point number (a number with decimal points).
    let femalePrice = parseFloat(document.querySelector('.femaleJacketPrice').textContent.substring(1));
    let malePrice = parseFloat(document.querySelector('.maleJacketPrice').textContent.substring(1));

//The .value returns the value/s that are entered or selected by the users
    let quantityFemale = document.querySelector('.quantity-f').value;
    let quantityMale = document.querySelector('.quantity-m').value;

// document.getElementById() gets the element by the Id that you placed within the parenthesis
    document.getElementById('femalePrice').textContent = 'R' + (femalePrice * quantityFemale).toFixed(2);
//.toFixed() returns the decimal places
    document.getElementById('malePrice').textContent = 'R' + (malePrice * quantityMale).toFixed(2);
  }
// Made a fuction called total()
  function OrderTotal() {
    
//The  parseFloat() function converts a string representation of a number or a numerical expression into a floating-point number (a number with decimal points).
    let femaleTotal = parseFloat(document.getElementById('femalePrice').textContent.substring(1));
    let maleTotal = parseFloat(document.getElementById('malePrice').textContent.substring(1));

    let totalPrice = femaleTotal + maleTotal;
    document.getElementById('TotalPrice').textContent = 'R' + totalPrice.toFixed(2);
  }