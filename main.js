const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const scoreSpan = document.getElementById("scoreSpan");




function changeEx(){

    numE = Math.ceil(Math.random()*10)
    span1.innerHTML = numE;

    numX = Math.ceil(Math.random()*10)
    span3.innerHTML = numX;
}
changeEx()


function changeAnswer(){
    num1.innerHTML = "";
    num2.innerHTML = "";
    num3.innerHTML = "";

    
    let answer = Math.ceil(Math.random()*3)
    console.log(answer);
    let r1 = Math.ceil(Math.random()*20)
    let r2 = Math.ceil(Math.random()*20)

    if(answer === 3){
        num3.innerHTML = numE + numX;
        num2.innerHTML = r2;
        num1.innerHTML = r1;
    }
    if(answer === 2){
        num2.innerHTML = numE + numX;
        num3.innerHTML = r2;
        num1.innerHTML = r1;
    }
    if(answer === 1){
        num1.innerHTML = numE + numX;
        num3.innerHTML = r2;
        num2.innerHTML = r1;
    }

}
changeAnswer()
let score = 0
let Ans = 0;

function click1(){
    let Ans = numE + numX;
    let n1 = +num1.innerHTML
    if(n1 === +Ans){
        score += 100;
        scoreSpan.innerHTML = score;
        console.log(n1, Ans)


    }else{
        
        console.log(n1, Ans)
        score -= 100;
        scoreSpan.innerHTML = score;

    }

}

function click2(){
    let Ans = numE + numX;
    let n2 = +num2.innerHTML
    if(n2 === +Ans){
        score += 100;
        scoreSpan.innerHTML = score;
        console.log(n2, Ans)




    }else{
        console.log(n2, Ans)
        score -= 100;
        scoreSpan.innerHTML = score;

    }

}


function click3(){
    let Ans = numE + numX;
    let n3 = +num3.innerHTML
    if(n3 === +Ans){
        score += 100;
        scoreSpan.innerHTML = score;
        console.log(n3, Ans)




    }else{
        console.log(n3, Ans)
        score -= 100;
        scoreSpan.innerHTML = score;


    }

}


function next(){
    changeEx();
    changeAnswer();
}


