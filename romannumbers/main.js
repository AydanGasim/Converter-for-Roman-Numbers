const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
function convert() {
    const inputNum = document.getElementById("romannum").value.toUpperCase();
    const finalResult = document.getElementById("result");

    let result = 0;
    let prevValue = 0;

    for (let i = inputNum.length - 1; i >= 0; i--) {
        const currentValue = romanNumbers[inputNum[i]];
        
    
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
        
    finalResult.textContent = `${result}`
}
}