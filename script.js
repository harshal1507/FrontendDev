gsap.to(".imagecontainer",{
    width:"100%",
    ease: Expo.easeInOut,
    stagger: 2,
    repeat: -2
})

gsap.to(".text h1",{
     ease: Expo.easeInOut,
     stagger: 2,
     top: 0,
     repeat: -2
})

gsap.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
    repeat: -2
})
