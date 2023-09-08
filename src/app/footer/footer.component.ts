import { Component } from '@angular/core';
import { faLinkedin,faSquareTwitter,faSquareInstagram,faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
socialICons = [faLinkedin,faSquareFacebook,faSquareTwitter,faSquareInstagram]
}
