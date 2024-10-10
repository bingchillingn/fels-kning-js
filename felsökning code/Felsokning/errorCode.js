var uno = "bloodytxt";
var does = "mossyParagraph";
var tres = "seashanty_song";

var Bla = '#3333FF';      
var Red = '#FF3333';       
var Green = '#33FF33';     

function setColors(id, number, farg) {
    let newNumber;
    if (number === 99) {
        newNumber = 99;
    } else if (number > 86) {
        newNumber = 29;
    } else {
        newNumber = number / 2;
    }

    if (document.getElementById('wild').value !== "Empty") {
        switch (newNumber) {
            case 33:
                document.getElementById('bloodytxt').style.color = '#FF3333';
                console.log('where am I?');
                break;
            case 42:
                document.getElementById('mossyParagraph').style.color = '#33FF33';
                break;
            case 12:
                document.getElementById('seashanty_song').style.color = '#3333FF';
                break;
            case 99:
                let x = document.getElementsByClassName("textthing");
                for (let i = 0; i < x.length; i++) {
                    x[i].style.color = farg;
                }
                break;
            default:
                let y = document.getElementsByClassName("textthing");
                for (let i = 0; i < y.length; i++) {
                    y[i].style.color = getRandomColor(); // Use the random color function
                }
        }
    } else {
        console.log('Won`t anyone please think of the children!?');
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`; // Ensures it has 6 digits
}
