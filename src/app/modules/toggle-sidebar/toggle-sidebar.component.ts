import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss']
})
export class ToggleSidebarComponent implements OnInit {

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  sideBarState = 'close';
  constructor(
    private sidebarService: SidebarService,
    public platform: Platform
  ) { }

  ngOnInit() {
    if (!this.platform.ANDROID && !this.platform.IOS){
      setTimeout(() => {
        this.sideBarState = 'open';
        this.sidebarService.toggle();
      }, 700);
    }
   }

  toggleSideNav() {
    this.sidebarService.toggle();
    this.sideBarState = this.sidebarService.sidebarState;
  }
}
