// ! common function for both case + - button 
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-num');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // ! updated case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}


// handle PHONE increase/decrease events
//! FOR PHONE plus button
document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
//! for phone minus button
document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle CASE increase/decrease events
// ! for case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

//! for case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})