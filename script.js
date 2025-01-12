// Append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display'); 
    display.value += value;
}

// Clear display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Delete last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => display.value = '', 1500); // Clear error after 1.5 seconds
    }
}

// Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const display = document.getElementById('display');
    
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        appendToDisplay(key);
    }
    
    if (key === 'Backspace') {
        deleteLast();
    }
    
    if (key === 'Enter') {
        calculateResult();
    }
    
    if (key === 'Escape') {
        clearDisplay();
    }
});