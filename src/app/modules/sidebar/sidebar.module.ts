import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
