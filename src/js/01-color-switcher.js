function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    onStartBtn: document.querySelector('button[data-start]'),
    onStopBtn: document.querySelector('button[data-stop]')
}

let bgColor = null;
let isActiv = null;

refs.onStartBtn.addEventListener('click', () => {
    if(isActiv){
        return;
    }
    isActiv = true;
    bgColor = setInterval(() => {
    refs.onStartBtn.parentElement.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000)
})

refs.onStopBtn.addEventListener('click', () => {
    clearInterval(bgColor);
    isActiv = false;
})


// const randomColor = {
//     bgColor: null,
//     isActiv: false,

//     start(){
//         if(this.isActiv){
//             return;
//         }
//         this.isActiv = true;
//         this.bgColor = setInterval(() => {
//             refs.onStartBtn.parentElement.style.backgroundColor = `${getRandomHexColor()}`;
//         }, 1000)
//     },
//     stop(){
//         clearInterval(this.bgColor);
//         this.isActiv = false;
//     },
// }

// refs.onStartBtn.addEventListener('click', () => {randomColor.start()});
// refs.onStopBtn.addEventListener('click', () => {randomColor.stop()});