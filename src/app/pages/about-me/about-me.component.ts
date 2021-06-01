import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AboutMeComponent implements OnInit {


  constructor(private router: RouterOutlet) { }

  getPageTransition(){
    if (this.router.isActivated){
      const {path} = this.router.activatedRoute.routeConfig;
      console.log(path);
      return path;
    }
  }

  ngOnInit(): void {
  }

}

