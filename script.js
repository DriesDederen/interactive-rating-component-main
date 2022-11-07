// if press on number, store that value
// then go to other screen (z-index to 2 of .thank-you)
// span .selected-rating should .innerHTML value 

const giveRating = document.querySelector(".give-rating");
const thankYou = document.querySelector(".thank-you");
const buttonSubmit = document.getElementsById("submit");
const selectedRating = document.getElementById("selected-rating");
const rating = documenet.querySelectorAll(".star");

rating.forEach(rate => {
    rate.addEventListener('click', () => {
        selectedRating.innerHTML = rate.value;
    })
})

buttonSubmit.addEventListener('click', () => {
    thankYou.style.zIndex = 2;
    giveRating.style.display = none;
})