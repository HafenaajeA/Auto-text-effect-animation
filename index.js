const containerEl = document.querySelector(".container")

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careersIndex = 0;

// let randomNumber = Math.floor(Math.random()* 5)
let characterIndex = 0;

updateText()


//creating  function and increasing the nummber of character also slice the 


function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
<h1>I am ${careers[careersIndex].slice(0,1)=== "I" ? "an" : "a"} ${careers[careersIndex].slice(0,
    characterIndex)}</h1>
`;

if(characterIndex === careers[careersIndex].length){
    careersIndex++
    characterIndex = 0
}
if(careersIndex === careers.length){
    careersIndex = 0;
}
setTimeout(updateText, 200);
}

