const img = document.querySelector('.img');

imgs = [ './Images/img2.webp', './Images/img3.webp', './Images/img4.webp', './Images/img5.jpeg', './Images/img6.jpg', './Images/img7.jpg']

let i = 0

setInterval(() => {
    img.src = imgs[i]
    i++
    if(i == imgs.length){
        i = 0
    }
},3000)