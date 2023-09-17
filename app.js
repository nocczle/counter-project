let value = document.querySelector('span');
let allBtns = document.querySelectorAll('button');
let count = 0;


allBtns.forEach((element) =>{
    element.addEventListener('click', (e) =>{
        let currentBtn = e.currentTarget.classList;
        if(currentBtn.contains('decrease')){
            count = count - 1;
        }else if(currentBtn.contains('increase')){
            count = count + 1
        }else if(currentBtn.contains('reset')){
            count = 0;
        }
        if(count == 0){
            value.style.color = "#fefefe";
        }else if(count > 0){
            value.style.color = "#08f014";
        }else if(count < 0){
            value.style.color = "#f00808";
        }
        value.innerText = count;
        console.log(`${currentBtn} clicked,  Value = ${count}`)
    })
})

