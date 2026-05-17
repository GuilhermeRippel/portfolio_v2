import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'side-navigation',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.css',
})
export class SideNavigation {
  faEnvelope = faEnvelope
  faLinkedin = faLinkedin;
  faGithub = faGithub;


  openWhatsapp() {
  window.open(
    'https://wa.me/5993540101?text=Olá%20Guilherme!',
    '_blank'
  );
}
}
