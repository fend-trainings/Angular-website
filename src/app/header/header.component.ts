import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show:boolean =  false;
  screensize = window.innerWidth;
  faBars = faBars;
  

  showMobile():void{
    if(this.screensize < 480) this.show = true;
  }
}


