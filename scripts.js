let left_arrow = document.getElementById("left")
let slider = document.getElementById("slider")
let frame = document.getElementById("frame")
let right_arrow = document.getElementById("right")
let image = document.getElementsByClassName("image")


let news = document.getElementById("news")
let news_click = document.getElementById("news_click")
let highlights_news = document.getElementById("highlights_news")

let Mobile = document.getElementById("Mobile")
let highlights_mobile = document.getElementById("highlights_mobile")

let Tv = document.getElementById("Tv")
let highlights_Tv = document.getElementById("highlights_tv")

let Appliances = document.getElementById("Appliances")
let highlights_Appliances = document.getElementById("highlights_appliances")

let galaxy = document.getElementById("galaxy")
let highlights_galaxy = document.getElementById("highlights_galaxy")

let live = document.getElementById("live")
let highlights_live = document.getElementById("highlights_live")


let s24 = document.getElementById("s24")
let s24_plus = document.getElementById("s24_plus")
let flip = document.getElementById("flip")
let book4 = document.getElementById("book4")
let watch = document.getElementById("watch")

let mobile_heading = document.getElementById("mobile_heading")

let img1 = document.getElementById("img1") 
let img2 = document.getElementById("img2") 
let img3 = document.getElementById("img3") 
let img4 = document.getElementById("img4") 
let img5 = document.getElementById("img5") 


let sliderValue = 1

right_arrow.onclick = () => {
    if (sliderValue < image.length) {
        slider.style.transform = `translateX(-${sliderValue * 94.09}vw)`
        sliderValue++;
    } else {
        slider.style.transform = `translateX(0vw)`
        sliderValue = 1;
    }
}

// left_arrow.onclick = () => {
//     slider.style.transform = `translateX(-${(sliderValue.length) * 95 - 95}vw)`
//     sliderValue--;
// }


//---------------------------------------------------------------------------------------------------

news.onclick = () => {
    highlights_news.classList.add("active_news")
    highlights_mobile.classList.remove("active_mobile")
    highlights_Tv.classList.remove("active_tv")
    highlights_Appliances.classList.remove("active_appliances")
    highlights_galaxy.classList.remove("active_galaxy")
    highlights_live.classList.remove("active_live")
}

Mobile.onclick = () => {
    highlights_mobile.classList.add("active_mobile")
    highlights_news.classList.remove("active_news")
    highlights_Tv.classList.remove("active_tv")
    highlights_Appliances.classList.remove("active_appliances")
    highlights_galaxy.classList.remove("active_galaxy")
    highlights_live.classList.remove("active_live")
}

Tv.onclick = () => {
    highlights_Tv.classList.add("active_tv")
    highlights_news.classList.remove("active_news")
    highlights_mobile.classList.remove("active_mobile")
    highlights_Appliances.classList.remove("active_appliances")
    highlights_galaxy.classList.remove("active_galaxy")
    highlights_live.classList.remove("active_live")
}

Appliances.onclick = () => {
    highlights_Appliances.classList.add("active_appliances")
    highlights_news.classList.remove("active_news")
    highlights_mobile.classList.remove("active_mobile")
    highlights_Tv.classList.remove("active_tv")
    highlights_galaxy.classList.remove("active_galaxy")
    highlights_live.classList.remove("active_live")
}

galaxy.onclick = () => {
    highlights_galaxy.classList.add("active_galaxy")
    highlights_news.classList.remove("active_news")
    highlights_mobile.classList.remove("active_mobile")
    highlights_Tv.classList.remove("active_tv")
    highlights_live.classList.remove("active_live")
}

live.onclick = () => {
    highlights_live.classList.add("active_live")
    highlights_news.classList.remove("active_news")
    highlights_mobile.classList.remove("active_mobile")
    highlights_Tv.classList.remove("active_tv")
}

//------------------------------------------------------------------------------------------------------------



s24.onclick = () => {
    img1.style.marginLeft = '0%'
}

s24_plus.onclick = () => {
    img1.style.marginLeft = '-100%'
}

flip.onclick = () => {
    img1.style.marginLeft = '-199%'
}

book4.onclick = () => {
    img1.style.marginLeft = '-299%'
}

watch.onclick = () => {
    img1.style.marginLeft = '-400%'
}