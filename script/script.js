const width = screen.width
const height = screen.height

const connects = document.querySelectorAll(".connect")
const mira1 = document.getElementById("mira1")
const mira2 = document.getElementById("mira2")

if(width < 500){
    mira2.style.display = 'flex';
    connects.forEach(connect => {
        connect.style.display = 'none'
    })
    mira1.style.display = 'none';
}
else{
    mira2.style.display = 'none';
    connect.forEach(connect => {
        connects.style.display = 'flex'
    })
    mira1.style.display = 'flex';
}
console.log(width)