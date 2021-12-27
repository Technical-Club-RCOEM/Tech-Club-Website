window.onload = () => {
    let cards = document.getElementsByClassName("card")

    let gifs = document.getElementsByClassName("lottie-player")

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseenter", () => {
            gifs[i].style.visibility = "visible"
        })

        cards[i].addEventListener("mouseleave", () => {
            gifs[i].style.visibility = "hidden"
        })
    }
}
