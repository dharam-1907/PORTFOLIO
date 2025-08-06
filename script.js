var tl=gsap.timeline()


tl.from("#nav",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tl.from("#nav-part-2 h3",{
    y:-50,
    opacity:0,
    duration:0.8,
    stagger:0.2,
})
tl.from("#middle h1",{
    x:-500,
    opacity:0,
    duration:0.9,
    stagger:0.5
})
tl.from(" #img1",{
    y:-500,
    opacity:0,
    duration:1.5,
    rotate:30,

})
tl.from(" #img2",{
    x:-500,
    opacity:0,
    duration:1.5,
    rotate:50,

})
tl.from(" #img3",{
    x:700,
    rotate:50,
    opacity:0,
    duration:1.5,
})
gsap.from("#footer h1",{
  x:1000,
  duration:1,
  opacity:0,

})
gsap.from("#footer h2",{
  x:-1000,
  duration:1.2,
  opacity:0,

})
