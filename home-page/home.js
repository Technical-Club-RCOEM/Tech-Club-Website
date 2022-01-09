window.onload = () => {

    document.getElementsByClassName("pulse")[0].onclick = () => {
        window.location = './clubs.html'
    }
    let cards = document.getElementsByClassName("card")

    let gifs = document.getElementsByClassName("lottie-player")

    let homeImg = document.getElementsByClassName("home-img")[0]

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseenter", () => {
            gifs[i].style.visibility = "visible"
            homeImg.style.visibility = "hidden"
        })

        cards[i].addEventListener("mouseleave", () => {
            gifs[i].style.visibility = "hidden"
            homeImg.style.visibility = "visible"
        })
    }
}
