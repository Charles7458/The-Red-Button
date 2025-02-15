


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
        "Why? Click the Green one, it even has a counter, right?" : "",
        "You really want to click this?": `You have clicked this button ${count} times.`,
        "Ok then continue clicking, I won't stop you.": ""
    }

    

    let uContent = Object.keys(dialogue);
    let dContent = Object.values(dialogue);
    

    up.textContent = uContent[count];
    down.textContent = dContent[count];

    if (count == 9 ) {
        redBtn.style.width="30px";
    }
    if (count > 10) {
        redBtn.style.width="100px";
    }

    if (count > 11) {
        up.textContent = uContent[10];
    }
}

