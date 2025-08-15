function playTheGame() {
    let userConfirmed = confirm("Do you want to play a game?")

    if (!userConfirmed) {
        alert("No problem, Goodbye.")
    } else {
        let number = prompt("Please enter a number between 0 and 10")

        number = Number(number)
        
        if(isNaN((number))) {
            alert("Not a number, Goodbye");
        } else if (number < 0 || number > 10) {
            alert("Sorry not a good number, Goodbye")
        } else {
            let computerNumber = Math.floor(Math.random() * 11)
            compareNumbers(number, computerNumber)
        }
    }
}

function compareNumbers(number, computerNumber) {
        while (true) {
            if (number === computerNumber) {
            alert("WINNER")
            return
        } else if (number > computerNumber) {
            alert("Your number is bigger than the computer's, guess again")
        } else {
            alert("Your number is smaller than the computer's, guess again")
        }

        number = Number(prompt("Enter a number between 0 and 10"))

        if (isNaN(number) || number < 0 || number > 10) {
            alert("invalid number, Goodbye")
            return
        }
    }
}