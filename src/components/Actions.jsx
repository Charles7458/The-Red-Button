


export default function Actions(count) {

    const up = document.querySelector("#up");
    const down = document.querySelector("#down");
    const redBtn = document.querySelector("#red-button")

    const dialogue = {
        "DO NOT PRESS!!!" : "Yes, Don't press the button  :)",
        "!" : "What happened??",
        "You pressed the button!" : "Didn't you",
        "DO NOT PRESS! THIS RED BUTTON" : "",
        "???" : "HEY! Can't you read?",
        "Please Stop." : "",
        "Stop it, when I'm asking you kindly." : "😈",
        "Did you know? That each time you press this button." : "An old lady you don't know will die!!!",
        "You will still press the button?": "?You don't care about the old lady?",
        "Fine!" : "Since you're so persistent on clicking it..",
        "Why? Click the Green one, it even has a counter, right?" : ""
    }

    

    let uContent = Object.keys(dialogue);
    let dContent = Object.values(dialogue);
    

    up.textContent = uContent[count];
    down.textContent = dContent[count];

    if (count == 9 || count == 10) {
        redBtn.style.width="30px"
    }

}

