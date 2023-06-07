let all_1 = gsap.timeline();

all_1
    .from("#nav" , {
        opacity:0,
        y:30,
        duration:2
    })

    .from(["#left","#right_ele" , "#hand" , "#imgs"] , {
        opacity:0,
        x:60,
        scale:1.6,
        duration:1
    })


    .from("#center" , {
        opacity:-1,
        y:20,
        scale:1.3,
        duration:3
    })

    .from("button" , {
        y:20,
        scale:1,
        duration:1,
        repeat:"-1",
        yoyo:"true"
    })

    .from("#imgs" , {
        y:20,
        duration:1,
        repeat:"-1",
        yoyo:"true"
    })

   
