let arr = [
    "./assets/mainimage.webp",
    "./assets/mainimage2.webp",
    "./assets/mainimage3.webp"
]

let index = 0;
let slider = document.getElementById("slider")

slider.src = arr[index]

function left() {
    if (index === 0){
        index = arr.length -1; 
    }else{
        index--;
    }
    slider.src = arr[index];
}

function right() {
    if (index < arr.length -1){
        index++;
    }else{
        index = 0;
    }
    slider.src = arr[index];
}

console.log(index)