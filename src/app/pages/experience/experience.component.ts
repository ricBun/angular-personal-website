import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
   fadeAnimation
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
