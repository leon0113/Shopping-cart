document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-num');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    console.log(caseNumber);
})