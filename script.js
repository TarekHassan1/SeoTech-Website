//  Nav
const toggle=document.querySelector(".toggle");
const s1=document.querySelector(".s1");
const s2=document.querySelector(".s2");
const s3=document.querySelector(".s3");
const ulSecond=document.querySelector(".links.second");
toggle.addEventListener("click",()=>{
    s2.classList.toggle("hide");
    s1.classList.toggle("transform-1");
    s3.classList.toggle("transform-2");
    ulSecond.classList.toggle("open");
})
// Home
const container=document.querySelector(".Home .container");
const slider = document.querySelector(".Home .slider");
const item=document.querySelector(".item");
const Next=document.querySelector(".Home .controls button:nth-of-type(2)");
const prev=document.querySelector(".Home .controls button:nth-of-type(1)");
window.addEventListener("resize",()=>{
    container.style.width=`${item.offsetWidth}px`;

})
window.addEventListener("DOMContentLoaded",()=>{
    container.style.width=`${item.offsetWidth}px`;

})
let counter=0;
function moveSlider(count,container){
 container.style.transform=`translateX(-${count * 100}%)`;
}
Next.addEventListener("click",()=>{
    if(counter == 2){
        counter=0;
    }
else{
    ++counter;
}
moveSlider(counter,container);
})
prev.addEventListener("click",()=>{
    if(counter == 0){
        counter= 2;
    }
else{
    --counter;

}
moveSlider(counter,container);

})
setInterval(() => {
    Next.click();
}, 4000);

// 
// testmonials
let testCounter=0;
const testContainer=document.querySelector(".testmonials .slider .test-container");
const testNext=document.querySelector("body > section.testmonials > div.controls > button:nth-child(2)")
const testPrev=document.querySelector(".testmonials .controls button:nth-of-type(1)");
testNext.addEventListener("click",()=>{
    if(testCounter == 2){
        testCounter=0;
    }
else{
    ++testCounter;
}
moveSlider(testCounter,testContainer);
})
testPrev.addEventListener("click",()=>{
    if(testCounter == 0){
        testCounter= 2;
    }
else{
    --testCounter;

}
moveSlider(testCounter,testContainer);

})