
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#nav') 
    let texto = this.document.querySelector('#part2-1') 
    header.classList.toggle('rolagem', window.scrollY > 0)
    texto.classList.toggle('animacao', window.scrollY > 0)
})