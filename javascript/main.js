const slider = document.querySelector(".car_slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const indicatorParent = document.querySelector(".controls ul");

const toggle = document.getElementsByClassName("toggle-btn")[0];
const navbar = document.getElementsByClassName("nav_elements_bottom")[0];
const body = document.getElementById("scroll");
const frm = document.getElementById("dwnld_form");

var sectionIndex = 0;

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    body.classList.toggle("scroll");
    toggle.classList.toggle("open");
});

function download(event) {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let ph = document.getElementById("num").value;

    let len = ph.length;

    document.getElementById("err_name").style.display = "none";
    document.getElementById("err_email").style.display = "none";
    document.getElementById("err_num").style.display = "none";

    var n = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var p = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;


    if (!n.test(name)) {
        document.getElementById("err_name").style.display = "block";
        event.preventDefault();
    } else if (!em.test(mail)) {
        document.getElementById("err_email").style.display = "block";
        event.preventDefault();
    } else if (!p.test(ph)) {
        document.getElementById("err_num").style.display = "block";
        event.preventDefault();
    } else {
        window.open(
            "https://www.manageengine.com/privileged-session-management/213695/ManageEngine_AMP_64bit.exe",
            "_blank"
        );
        frm.reset();
    }
}

function setIndex() {
    document.querySelector(".controls .selected").classList.remove("selected");
    slider.style.transform = "translate(" + ((sectionIndex * -50) % 150) + "%)";
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add("selected");
    });
});

leftArrow.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParent.children[sectionIndex].classList.add("selected");
});

rightArrow.addEventListener("click", function () {
    sectionIndex = sectionIndex < 1 ? sectionIndex + 1 : 1;
    setIndex();
    indicatorParent.children[sectionIndex].classList.add("selected");
});
