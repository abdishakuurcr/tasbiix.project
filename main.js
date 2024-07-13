let tasbiix = document.querySelector("#tasbiix")
let increment  = document.querySelector("#incrementBtn")
let Reset = document.querySelector("#ResetBtn")

let initialvalue = 0
increment.addEventListener("click", function () {
initialvalue++
tasbiix.innerHTML = initialvalue
if(initialvalue ==4){
document.body.style.backgroundColor = "red"
}
else if(initialvalue ==5){
document.body.style.backgroundColor = "blue"
}

else if(initialvalue ==6){
document.body.style.backgroundColor = "green"
}
else if(initialvalue ==7){
document.body.style.backgroundColor = "orange"
}
else if(initialvalue ==8){
document.body.style.backgroundColor = "yellow"
}
else{

document.body.style.backgroundColor = "white"
}

}
)



Reset.addEventListener("click", function () {
initialvalue = 0
tasbiix.innerHTML = initialvalue
})