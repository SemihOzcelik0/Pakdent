const gallery = document.querySelector("#gal");
const css = document.querySelector("#cssLink");
const hed = document.querySelector("#hed");
const afterNav = document.querySelectorAll('nav ~ *')

var a = `
<section id="projects">
<div class="container">
    <h2>ÇALIŞMALARIMIZ</h2>

    <div class="line__seperator box">
        <div class="line"></div>
        <i class="fa-brands fa-nfc-symbol symbol"></i>
        <div class="line"></div>
    </div>

    <div class="card box">
        <a href="images/1.png" data-lightbox="roadtrip">
            <img src="images/1.png">
        </a>
    </div>

    <div class="card box">
        <a href="images/2.jpg" data-lightbox="roadtrip">
            <img src="images/2.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/3.jpg" data-lightbox="roadtrip">
            <img src="images/3.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/4.jpg" data-lightbox="roadtrip">
            <img src="images/4.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/5.jpg" data-lightbox="roadtrip">
            <img src="images/5.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/4.jpg" data-lightbox="roadtrip">
            <img src="images/4.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/2.jpg" data-lightbox="roadtrip">
            <img src="images/2.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/1.png" data-lightbox="roadtrip">
            <img src="images/1.png">
        </a>
    </div>

    <div class="card box">
        <a href="images/3.jpg" data-lightbox="roadtrip">
            <img src="images/3.jpg">
        </a>
    </div>
    <div class="card box">
        <a href="images/1.png" data-lightbox="roadtrip">
            <img src="images/1.png">
        </a>
    </div>

    <div class="card box">
        <a href="images/2.jpg" data-lightbox="roadtrip">
            <img src="images/2.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/3.jpg" data-lightbox="roadtrip">
            <img src="images/3.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/4.jpg" data-lightbox="roadtrip">
            <img src="images/4.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/5.jpg" data-lightbox="roadtrip">
            <img src="images/5.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/4.jpg" data-lightbox="roadtrip">
            <img src="images/4.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/2.jpg" data-lightbox="roadtrip">
            <img src="images/2.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/1.png" data-lightbox="roadtrip">
            <img src="images/1.png">
        </a>
    </div>

    <div class="card box">
        <a href="images/3.jpg" data-lightbox="roadtrip">
            <img src="images/3.jpg">
        </a>
    </div>
    <div class="card box">
        <a href="images/5.jpg" data-lightbox="roadtrip">
            <img src="images/5.jpg">
        </a>
    </div>

    <div class="card box">
        <a href="images/4.jpg" data-lightbox="roadtrip">
            <img src="images/4.jpg">
        </a>
    </div>
</div>


</section>

`

var b = `<link rel="stylesheet" href="CSS/projects.css">`
gallery.addEventListener("click", function () {
    hed.insertAdjacentHTML("beforeend", b)
    afterNav.innerHTML = "";
    afterNav.insertAdjacentHTML("beforeend", a)
    console.log("cleaned")
})