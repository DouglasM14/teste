
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#nav') 

    header.classList.toggle('rolagem', window.scrollY > 0)
})