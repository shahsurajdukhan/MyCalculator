let y=document.getElementById('display');
function appendToDisplay(value) {
    y.value += value;
}
function clearDisplay() {
    y.value = '';
}
function calculate() {
    try{
        y.value = eval(y.value);
    } catch (error) {
        y.value = 'Error';
        y.style.color='red'
    }
}
const heading=document.getElementsByClassName("blink");
  let r=Math.floor(Math.random() * 255);
  let g=Math.floor(Math.random() * 255);
  let b=Math.floor(Math.random() * 255);
  heading.style.backgroundcolor = 'rgb(${r},${g},${b}';