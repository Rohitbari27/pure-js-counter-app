let counter = 9999;//initiliaze the counter

const DISPLAY = document.getElementById('display');

//Display error messages
const ALERT_EL = document.getElementById('alert');
const ERR_MSG_OUT_OF_MEMORY = 'Out of Memory';
const ERR_MSG_INVALID_RANGE = 'Zero is the low limit';

//console.log(DISPLAY)
function updateDisplay() {
    const spanElements = DISPLAY.children;
    let numberToString = addPaddingAtStart(counter.toString(),4,'0')
    for (let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}
function reset() {
    counter = 0;

    // Remove additional spans beyond the default number of boxes
    const currentBoxCount = DISPLAY.children.length;
    const initialBoxCount = 4; // Set the initial/default number of boxes

    for (let i = currentBoxCount - 1; i >= initialBoxCount; i--) {
        removeBox();
        
    }

    // Update the display
    updateDisplay();
}


//Function for adding new box
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = '0'
    DISPLAY.append(SPAN);
}


//function for incrementing counter and updating display
function increment() {
    const BOX_COUNT = DISPLAY.children.length;
    counter++;
    
    //Condition of increment the counter and add the new box if required
    if (counter.toString().length === 5 && BOX_COUNT === 4) {
        addBox();
    }
    else if (counter.toString().length === 6 && BOX_COUNT === 5) {
        addBox();
    }
    else if (counter.toString().length > 6) {
        alert('Counter cannot exceed 999999')
        return;
    }
    
    // Clear any previous error messages and update the display
    ALERT_EL.innerText = '';
    updateDisplay();
}



//Function for removing box
function removeBox() {
    const boxCount = DISPLAY.children.length;
    const lastBox = DISPLAY.lastElementChild;
    lastBox.parentNode.removeChild(lastBox);
}
//function for decrementing counter and updating display
function decrement() 
{
    const boxCount = DISPLAY.children.length; // Define boxCount here
    if (counter === 0) {
        alert('Error : Can not drecrement than 0')
        return
    };
    counter--;
    if (counter.toString().length === 5 && boxCount === 6) {
        removeBox();
    } else if (counter.toString().length === 4 && boxCount === 5) {
        removeBox();
    } else if (counter.toString().length > 6) {
        ALERT_EL.innerText = ERR_MSG_INVALID_RANGE;
        return;
    }
    ALERT_EL.innerText = '';
    updateDisplay();
}


//Function for add the padding at the start of the string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter)
{
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if (remainingSpace > 0) 
    {
        let newString = originalString;
        for (let i = 0; i < remainingSpace; i++) 
        {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();