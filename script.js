const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// Navbar 
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "5px";
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.fontSize = "15px";
    }
}