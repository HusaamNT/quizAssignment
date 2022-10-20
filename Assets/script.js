const questionHeader =$("#questionHeader")
const startButtonEl =$("#startButton")
const questionOneEl  = $("#option1")
const questionTwoEl  = $("#option2")
const questionThreeEl  = $("#option3")
const questionFourEl  = $("#option4")
const questionAllButtonsEl = $(".optionButton")
const timeElement = $(".time")

let secondsLeft = 30
$(questionAllButtonsEl).hide();

const startGame = startButtonEl.on("click", function(){
    $(questionAllButtonsEl).show();
    $(startButtonEl).hide();
    questionHeader.text("Which one is not a data type?")
    questionOneEl.text("1. Boolean")
    questionTwoEl.text("2. Surd")
    questionThreeEl.text("3. Integer")
    questionFourEl.text("4. Undefined")
    if (questionTwoEl){

    }
})
let secondsLeft = 30
function setTime() {
    var gameTimer = setInterval(function(){
        secondsLeft--;
        timeElement.text = secondsLeft + "s left!"
        if(secondsLeft === 0 ){
            clearInterval(gameTimer);

        }
    })
}

function endGameScreen(){

}