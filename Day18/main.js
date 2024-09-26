let space = document.querySelectorAll("td");
let msg = document.querySelector("p");
let reset = document.querySelector("button");
let played = "O";

space.forEach(house => {
    house.addEventListener("click", event => {
        if(house.innerHTML == '')
        {
            house.innerText = played;
            //change play
            played = played == "X" ? "O" : "X";
            //updating the turn message
            msg.innerText = `Next player: ${played}`
            checkWin();
        }
    })
})

reset.addEventListener('click', event => {
    space.forEach(house => {
        house.innerText = "";
        msg.innerText = `Next player: ${played}`
    })
})

function checkWin(){
    let tie = true;

    if(
        (space[0].innerText != "" && space[0].innerText == space[1].innerText && space[0].innerText == space[2].innerText) ||
        (space[3].innerText != "" && space[3].innerText == space[4].innerText && space[3].innerText == space[5].innerText) ||
        (space[6].innerText != "" && space[6].innerText == space[7].innerText && space[6].innerText == space[8].innerText) ||
        (space[0].innerText != "" && space[0].innerText == space[3].innerText && space[0].innerText == space[6].innerText) ||
        (space[1].innerText != "" && space[1].innerText == space[4].innerText && space[1].innerText == space[7].innerText) ||
        (space[2].innerText != "" && space[2].innerText == space[5].innerText && space[2].innerText == space[8].innerText) ||
        (space[0].innerText != "" && space[0].innerText == space[4].innerText && space[0].innerText == space[8].innerText) ||
        (space[2].innerText != "" && space[2].innerText == space[4].innerText && space[2].innerText == space[6].innerText) 
    )
        {
        msg.innerHTML = "<h1>Win!</h1";
        tie = false;
        }

    if(tie)
        {
            let allFilled = true;
            for(let i = 0; i < space.length; i++)
            {
                if(space[i].innerText == '')
                {
                    allFilled = false;
                    break;
                }
            }
            if(allFilled)
            {
                msg.innerHTML = "<h1>It is a tie!</h1>";
            }
        }
}