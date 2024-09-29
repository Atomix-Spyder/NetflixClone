const sl6 = document.querySelector(".slide6");

const q1 = document.querySelector(".q1");
const a1 = document.querySelector(".a1");
const tot1 = document.querySelector(".total1");
const plus1 = document.querySelector(".fa-plus-1");

const q2 = document.querySelector(".q2");
const a2 = document.querySelector(".a2");
const tot2 = document.querySelector(".total2");
const plus2 = document.querySelector(".fa-plus-2");

const q3 = document.querySelector(".q3");
const a3 = document.querySelector(".a3");
const tot3 = document.querySelector(".total3");
const plus3 = document.querySelector(".fa-plus-3");

const q4 = document.querySelector(".q4");
const a4 = document.querySelector(".a4");
const tot4 = document.querySelector(".total4");
const plus4 = document.querySelector(".fa-plus-4");

const q5 = document.querySelector(".q5");
const a5 = document.querySelector(".a5");
const tot5 = document.querySelector(".total5");
const plus5 = document.querySelector(".fa-plus-5");

const q6 = document.querySelector(".q6");
const a6 = document.querySelector(".a6");
const tot6 = document.querySelector(".total6");
const plus6 = document.querySelector(".fa-plus-6");

const text = {
    width:"70vw",
    display:"flex",
    fontSize:"1.5rem"
}

var tot1counter=0;
var tot2counter=0;
var tot3counter=0;
var tot4counter=0;
var tot5counter=0;
var tot6counter=0;

var open = 0;

tot1.addEventListener("click",(evt)=>{

    if(tot1counter == 0){
        Object.assign(a1.style,text)
        tot1counter=1;
        plus1.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
    }
    else{
        a1.style.display="none";
        plus1.style.transform="rotate(0deg)";
        tot1counter=0;
        open = open-1;
        console.log(open);
    }
})

tot2.addEventListener("click",(evt)=>{

    if(tot2counter == 0){
        Object.assign(a2.style,text)
        tot2counter=1;
        plus2.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
        sl6.style.height=open*30;
    }
    else{
        a2.style.display="none";
        plus2.style.transform="rotate(0deg)";
        tot2counter=0;
        open = open-1;
        console.log(open);
    }

})

tot3.addEventListener("click",(evt)=>{

    if(tot3counter == 0){
        Object.assign(a3.style,text)
        tot3counter=1;
        plus3.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
    }
    else{
        a3.style.display="none";
        plus3.style.transform="rotate(0deg)";
        tot3counter=0;
        open = open-1;
        console.log(open);
    }

})

tot4.addEventListener("click",(evt)=>{

    if(tot4counter == 0){
        Object.assign(a4.style,text)
        tot4counter=1;
        plus4.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
    }
    else{
        a4.style.display="none";
        plus4.style.transform="rotate(0deg)";
        tot4counter=0;
        open = open-1;
        console.log(open);
    }

})

tot5.addEventListener("click",(evt)=>{

    if(tot5counter == 0){
        Object.assign(a5.style,text)
        tot5counter=1;
        plus3.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
    }
    else{
        a5.style.display="none";
        plus5.style.transform="rotate(0deg)";
        tot5counter=0;
        open = open-1;
        console.log(open);
    }

})

tot6.addEventListener("click",(evt)=>{

    if(tot6counter == 0){
        Object.assign(a6.style,text)
        tot6counter=1;
        plus6.style.transform="rotate(45deg)";
        open = open+1;
        console.log(open);
    }
    else{
        a6.style.display="none";
        plus6.style.transform="rotate(0deg)";
        tot6counter=0;
        open = open-1;
        console.log(open);
    }

})