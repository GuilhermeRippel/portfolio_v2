import { Component } from '@angular/core';
import { SideNavigation } from "../../../shared/components/side-navigation/side-navigation";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-session',
  imports: [SideNavigation, RouterOutlet],
  templateUrl: './main-session.html',
  styleUrl: './main-session.css',
})
export class MainSession {

}
