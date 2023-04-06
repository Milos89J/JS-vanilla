const colors = ["blue", "orange", "yellow", "purple"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
    const randomNumber = randNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function randNumber() {
    return Math.floor(Math.random() * colors.length);
}