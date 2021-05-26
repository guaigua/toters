import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Header2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    Header2Component,
    FooterComponent
  ]
})
export class TemplateModule { }
