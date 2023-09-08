import { Component, OnInit } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show:boolean =  false;
  screensize = window.innerWidth;
  faBars = faBars;
  faXmark = faXmark


  toggleMobileNav():void{
    this.show = !this.show
    console.log(this.show)
  }

} 



