




const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.imgcontainer');

window.addEventListener('DOMContentLoaded' , () =>{
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover' , () => {
        console.log(image.src);
        imgContainer.querySelector('img').src = image.src
    })
})
