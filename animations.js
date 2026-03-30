gsap.registerPlugin(ScrollTrigger);


// NAVBAR
gsap.from(".logo",{

y:-100,
opacity:0,
rotation:360,
duration:2

});

gsap.from("body",{
opacity:0,
duration:2
});

gsap.from("#MenuItems li",{

y:-60,
opacity:0,
duration:1,
stagger:0.2,
delay:0.3

});


// HEADER TEXT
gsap.from(".header-text p",{

x:-100,
y:100,
opacity:0,
duration:1.5,
delay:0.6

});


gsap.from(".header-text h1",{

x:100,
opacity:0,
duration:1,
delay:0.9

});


// ABOUT SECTION
gsap.from(".about-col-1",{

scrollTrigger:".about-col-1",
x:-100,
opacity:0,
duration:1.2

});


gsap.from(".about-col-2",{

scrollTrigger:".about-col-2",
x:100,
opacity:0,
duration:1.2

});


// SERVICES
gsap.from(".services-list div",{

scrollTrigger:".services-list",

y:120,

opacity:0,

duration:1,

stagger:0.3

});


// PROJECTS
gsap.from(".portfolio-list div",{

scrollTrigger:".portfolio-list",

scale:0.7,

opacity:0,

duration:1,

stagger:0.3

});


// CONTACT
gsap.from(".contact-left",{

scrollTrigger:".contact-left",

x:-100,

opacity:0,

duration:1

});

gsap.from(".contact-right",{

scrollTrigger:".contact-right",

x:100,

opacity:0,

duration:1

});
gsap.from(".btn",{

scrollTrigger:".btn",

y:50,

duration:1,

stagger:0.2

});
gsap.from(".tab-contents li",{

scrollTrigger:".tab-contents",

x:-50,

opacity:0,

stagger:0.2

});