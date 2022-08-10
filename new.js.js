let colorSrodg = localStorage.getItem("color_option");

let colorli = document.querySelectorAll(".colorList li");

let backGroOP = true;

let backGroInt;

if (colorSrodg !== null){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    colorli.forEach(element => {
            
        element.classList.remove("active")
        

    if (element.dataset.color === colorSrodg) {

        element.classList.add("active")
}})
;
}
////////////////////////////////////////////////////////////////////
let myBtn = document.getElementById("ico");

myBtn.onclick = function() {
    this.classList.toggle("fa-spin");

}
myBox = document.getElementById("boxop");
myBox.onclick = function() {
    myBox.classList.toggle("openBox")
}
////////////////////////////////////////////////////////

let myNav = document.querySelector(".icoanv");
let myLINK = document.querySelector(".links");

myNav.onclick = function (e) {
    myLINK.classList.toggle("openNav");
}

let bod = innerHeight 


addEventListener('click' , (e) => {
    
if( e.target !== myNav && e.target !== myLINK)

if(myLINK.classList.contains('openNav'))

myLINK.classList.toggle("openNav");


})

// let colorli = document.querySelectorAll(".colorList li");

colorli.forEach(li => {
    li.addEventListener("click" , (e) => {
        console.log(e.target.dataset.color);

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

        localStorage.setItem("color_option", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            
            element.classList.remove("active")
        });
    e.target.classList.add("active")
        });
    });
////////////////////////////////////////////////////////////////////
let landPage = document.getElementById("land");
let imgArry = [ "../new/img/OIP (1).jpg" ,
"../new/img/OIP (2).jpg" ,
"../new/img/OIP.jpg" ,
"../new/img/R (1).jpg" ,
"../new/img/R (2).jpg" ,
"../new/img/R.jpg" ,
"../new/img/R.png"];


// let backGroOP = true;

// let backGroInt;

function randomiZImg (){

if (backGroOP === true) {

backGroInt =  setInterval(() => {

    let randomNumper = Math.floor(Math.random() * imgArry.length);

    landPage.style.backgroundImage = `url(${imgArry[randomNumper]})`
},1000)
}
}


////////////////////////////////////////////////////////////////////
let backGroImg = document.querySelectorAll(".boxoption span");

backGroImg.forEach(span => {
    span.addEventListener("click" , (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            
            element.classList.remove("active")
    });
    e.target.classList.add("active")

    if (e.target.dataset.background === 'yes'){
        
        backGroOP = true;
        
        randomiZImg();

    } else {
        
        backGroOP = false;
        
        clearInterval(backGroInt);

    }
    });

});
let OurSkiles = document.querySelector(".skils");


window.onscroll = function () {
    
    let SkilOffSetTop = OurSkiles.offsetTop;



    let SkilOffSetHeigh = OurSkiles.offsetHeight; 


    let windowHeigh = this.innerHeight;


let ScrolHeigh = this.scrollY;


    if (ScrolHeigh > (SkilOffSetTop + SkilOffSetHeigh - windowHeigh - 100)) {  

        let allskil = document.querySelectorAll(".skilBox .skilsProg span")

        allskil.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });
    };
        
    };
////////////////////////////////////////////////////////////////////
let OUrGalery = document.querySelectorAll(".galery img");
console.log(OUrGalery)

OUrGalery.forEach(img => {


    img.addEventListener("click" , (e) => {

    let OverLayImg = document.createElement("div");

    OverLayImg.className = 'POPupImg';

    document.body.appendChild(OverLayImg);
    let PopBox = document.createElement("div");

    PopBox.className = 'Pop-box';
    if (img.alt !== null) {

        let AltText = document.createElement("h3");

        AltText.className = 'StyAltText';
        
        let TextAltText = document.createTextNode(img.alt);

        AltText.appendChild(TextAltText);

        PopBox.appendChild(AltText)
    }

    let ImgOVERlay = document.createElement ("img");

    ImgOVERlay.src = img.src;

    PopBox.appendChild(ImgOVERlay);
    document.body.appendChild(PopBox);

    let closeBut = document.createElement('span');

    closeBut.className = 'STYspan';

    let texSpan = document.createTextNode('X')

    closeBut.appendChild(texSpan)

    PopBox.appendChild(closeBut)


    });
});

document.addEventListener('click' , function (e) {
    
    if (e.target.className == 'STYspan') {

        e.target.parentElement.remove('ImgOVERlay')
        
        document.querySelector('.POPupImg').remove();
    }
})
///////////////////////////////////////////////////////////////////////

document.querySelector(".resetBut").onclick = function(){
    relodPGE('resetBut')
};


////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////functionHistory///////////


/////////////////change active class auto///////////////////////////////

// function simplyActive(e) {
//     // remove active class from all childerin
//     e.target.parentElement.querySelectorAll(".active").forEach(element => {
            
//         element.classList.remove("active")

// });
// //add active class to the on ele

// e.target.classList.add("active")
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////scrol the pade to section/////////////////////
// function scrolTO(element) {

//     element.forEach(ele  => {

//         ele.addEventListener('click' , (e) => {
    
//             e.preventDefsilt();

//     document.querySelector(e.target.dataset).scrollIntoView({
//         behavior: 'smooth'
//     })
//         })
//     })
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////relodPAGE FUNCTION//////////////////////////////
function relodPGE(element){
    localStorage.clear();
    
    window.location.reload();
}
////////////////////////////////////////////////////////////////////////////////////////////////////