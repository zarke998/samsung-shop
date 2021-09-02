import { animate, animateChild, group, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations';
import { disableEmptyLinks} from '../global';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
  animations: [
    trigger("teamBottomAnimation",[    
      transition("void => *",[
        group([
          query('@advantageAnimation',[
            stagger(500, animateChild())
          ]),
          query("#team-right",[
            useAnimation(fadeInAnimation, {
              params : {
                delay: "2s"
              }
            })
          ])
        ])
      ])
    ]),
    trigger("advantageAnimation",[
      transition(":enter", [
        useAnimation(fadeInAnimation)
      ])
    ])
  ]
})
export class AboutUsPageComponent implements OnInit {

  constructor() {
    disableEmptyLinks();
   }

  ngOnInit(): void {

  }
}
