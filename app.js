// ! common function for both case + - button 
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-num');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // ! updated case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

// ! for case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})

//! for case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})