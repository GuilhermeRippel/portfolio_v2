import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about-session',
  imports: [RouterLink],
  templateUrl: './about-session.html',
  styleUrl: './about-session.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSession { }
