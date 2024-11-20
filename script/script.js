const width = screen.width
const height = screen.height
const connect = document.getElementById("connect")
const mira1 = document.getElementsById("mira1")
const mira2 = document.getElementsById("mira2")
if(width < 500){
    connect.style.display = 'none';
    mira1.style.display = 'none';
    mira2.style.display = 'flex';
}