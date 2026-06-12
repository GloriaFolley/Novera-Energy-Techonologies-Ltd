/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ================= STICKY HEADER ================= */
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0b3d91";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.background = "#0b3d91";
        header.style.boxShadow = "none";
    }
});

/* ================= ACTIVE NAV LINK ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ================= FORM FEEDBACK ================= */
const form = document.querySelector(".contact-form form");

if (form) {
    form.addEventListener("submit", function(e) {
        const name = form.querySelector("input[name='name']").value;
        const phone = form.querySelector("input[name='phone']").value;

        if (!name || !phone) {
            e.preventDefault();
            alert("Please fill in required fields before submitting.");
        } else {
            alert("Request sent successfully! We will contact you soon.");
        }
    });
}

/* ================= BUTTON ANIMATION ================= */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});

/* ================= MOBILE MENU (OPTIONAL READY) ================= */
const nav = document.querySelector("nav");
const menuToggle = document.createElement("div");

menuToggle.innerHTML = "☰";
menuToggle.style.fontSize = "28px";
menuToggle.style.cursor = "pointer";
menuToggle.style.display = "none";
menuToggle.style.color = "white";

nav.appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    const ul = document.querySelector("nav ul");
    ul.classList.toggle("show");
});

/* Show menu icon only on mobile */
function checkWidth() {
    if (window.innerWidth <= 900) {
        menuToggle.style.display = "block";
    } else {
        menuToggle.style.display = "none";
    }
}

window.addEventListener("resize", checkWidth);
checkWidth();
