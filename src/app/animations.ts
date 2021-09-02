import { animate, animation, group, style, transition, trigger, useAnimation } from "@angular/animations";

export let fadeSlideInAnimation = animation([
    style({opacity: 0, transform: 'translateX({{ offset }})'}),
    animate("{{ duration }} ease-out")
],
{
    params: {
        duration: "1s",
        offset: "-200px"
    }
});
export let fadeSlideOutAnimation = animation([
    animate("1s ease-in", style({opacity: 0, transform: 'translateX(-200px)'}))
]);

export let fadeInAnimation = animation([
    style({opacity: 0}),
    animate("1500ms {{ delay }}")
],
{
    params : {
        delay: "0s"
    }
});

export let fadeSlide = trigger('fadeSlide', [
    transition("void => *",[
        useAnimation(fadeSlideInAnimation)
    ]),
    transition("* => void",[
        useAnimation(fadeSlideOutAnimation)
    ])
])

export let fade = trigger('fade',[
    transition("void => *",[
        useAnimation(fadeInAnimation)
    ])
])