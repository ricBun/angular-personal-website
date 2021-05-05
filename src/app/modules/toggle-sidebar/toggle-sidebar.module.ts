import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSidebarComponent } from './toggle-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ToggleSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ToggleSidebarComponent,
  ]
})
export class ToggleSidebarModule { }
