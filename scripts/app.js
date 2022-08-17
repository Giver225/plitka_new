
const scrollToPrice=()=>{
      const element = document.getElementById("sevenBlock");
      const step = 150;
      if(element.offsetTop < window.pageYOffset + step){  
         document
                 .documentElement
                 .scrollTo(0,element.offsetTop );
      }else{
         document
                 .documentElement
                 .scrollTo(0,window.pageYOffset+step);
      }
      if(element.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToPrice)     
}

const scrollToContacts=()=>{
    const element = document.getElementById("big_orange");
    const step = 150;
    if(element.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(element.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToContacts)     
}

const scrollToPlitka=()=>{
    const element = document.getElementById("plitka_block");
    const step = 10;
    if(element.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(element.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToPlitka)     
}
const scrollToKovka=()=>{
    const element = document.getElementById("kovka_block");
    const step = 150;
    if(element.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(element.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToKovka)     
}


const main_button = document.getElementById("btn1");
main_button.addEventListener("click",scrollToPrice)

const head_btn1 = document.getElementById("head_btn1");
head_btn1.addEventListener("click",scrollToPlitka)

const head_btn5 = document.getElementById("head_btn5");
head_btn5.addEventListener("click",scrollToKovka)

const head_btn2 = document.getElementById("head_btn2");
head_btn2.addEventListener("click",scrollToPrice)

const head_btn3 = document.getElementById("head_btn3");
head_btn3.addEventListener("click",scrollToPrice)

const head_btn4 = document.getElementById("head_btn4");
head_btn4.addEventListener("click",scrollToPrice)

const head_btn6 = document.getElementById("head_btn6");
head_btn6.addEventListener("click",scrollToPrice)

const head_btn7 = document.getElementById("head_btn7");
head_btn7.addEventListener("click",scrollToPrice)

const head_btn8 = document.getElementById("head_btn8");
head_btn8.addEventListener("click",scrollToPrice)

const adress = document.getElementById("adress");
adress.addEventListener("click",scrollToContacts)

const list_btn1 = document.getElementById("list_btn");
list_btn1.addEventListener("click",scrollToPrice)

const list_btn2 = document.getElementById("list_btn1");
list_btn2.addEventListener("click",scrollToPrice)

const vorota_btn = document.getElementById("vorota_btn");
vorota_btn.addEventListener("click",scrollToContacts)

const kalitki_btn = document.getElementById("kalitki_btn");
kalitki_btn.addEventListener("click",scrollToContacts)

const plitka_btn = document.getElementById("plitka_btn");
plitka_btn.addEventListener("click",scrollToContacts)