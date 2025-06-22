// Custom Cursor Function

function customCursor() {
    var main = document.querySelector("#main");
    var cursor = document.querySelector("#cursor");
    var imageDiv = document.querySelector("#content")


    // Make the custom cursor unclickable
    cursor.style.pointerEvents = "none";

    main.addEventListener("mousemove", function (dets) {
        // Center the cursor
        gsap.to(cursor, {
            x: dets.x - cursor.offsetWidth / 2,
            y: dets.y - cursor.offsetHeight / 2,
            duration: 1,
            ease: "back.out(2)",
        });
    });

    // Change the cursor image on hover over the about content div
    imageDiv.addEventListener("mouseenter", function () {
        cursor.innerHTML = '<img src="assets/images/cafeAmbiance.webp">'
        gsap.to(cursor, {
            scale: 5,
            duration: 1,
            backgroundColor: "#ffffff00",
        })
    })

    imageDiv.addEventListener("mouseleave", function () {
        cursor.innerHTML = '<img src="assets/images/Coffee.png">'
        gsap.to(cursor, {
            scale: 1,
            duration: 1,
            backgroundColor: "#ffffff00",
        })
    })
}

customCursor() // Function Call





// TimeLine Function

function timeLine() {
    var menu = document.querySelector("#nav-prt2 i")
    var cross = document.querySelector("#hidden-nav i")
    var hiddenNav = document.querySelector("#hidden-nav")
    var tl = gsap.timeline()

    tl.to(hiddenNav, {
        right: 0,
        duration: 0.6
    })

    tl.from("#hidden-nav h4", {
        x: 100,
        duration: 0.5,
        stagger: 0.1,
        opacity: 0
    })

    tl.from("#hidden-nav i", {
        opacity: 0,
    })

    tl.pause()

    menu.addEventListener("click", function () {
        tl.play()
    })

    cross.addEventListener("click", function () {
        tl.reverse()
    })

    document.addEventListener("click", function (event) {
        if (!hiddenNav.contains(event.target) && !menu.contains(event.target)) {
            tl.reverse()
        }
    })
}

timeLine() // Function Call






function marqueAnimation() {
    function handleScroll(dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marque", {
                transform: 'translateX(-200%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".marque img", {
                rotate: 180
            });

        } else {
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".marque img", {
                rotate: 0
            });
        }
    }

    window.addEventListener("wheel", handleScroll);

    window.addEventListener("touchmove", function (e) {
        var touch = e.touches[0];
        var deltaY = touch.clientY - (this.lastTouchY || touch.clientY);
        this.lastTouchY = touch.clientY;
        handleScroll({ deltaY: -deltaY });
    });
}

marqueAnimation(); // Function Call





// Swiper Slider Function

function swiperSlider() {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursur: true,
        spaceBetween: 100,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1025: {
                slidesPerView: 3
            }
        }
    });
}

swiperSlider() //Function Call
