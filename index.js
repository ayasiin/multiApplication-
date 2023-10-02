const num1 = Math.ceil(Math.random() * 10 )
const num2 = Math.ceil(Math.random() *10 )
const form = document.getElementById('form')
const inputAnswer = document.getElementById('input')

const scoreEl= document.getElementById('score')

const questionE1 = document.getElementById('question')
 
let score = JSON.parse(localStorage.getItem('score'))
if(!score){
    score = 0
}
scoreEl.innerText= `score:${score}`
questionE1.textContent= `what is ${num1} multiply by ${num2}?`;



// answer form
const correctAns = num1 * num2
form.addEventListener('submit',()=>{
    const userInput = +inputAnswer.value ;
    if(userInput === correctAns){
        score ++
        updateStorage()
    }else{
        score --;
        updateStorage()
    }
    

})
function updateStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}