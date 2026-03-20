import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faReact,
  faNodeJs,
  faDocker,
  faJenkins,
  faTypescript,
  faTailwindCss,
  faPostgresql
} from '@fortawesome/free-brands-svg-icons';
import { NgxTypedWriterComponent } from 'ngx-typed-writer';

@Component({
  selector: 'app-welcome-session',
  imports: [FontAwesomeModule, CommonModule, NgxTypedWriterComponent],
  templateUrl: './welcome-session.html',
  styleUrl: './welcome-session.css',
})
export class WelcomeSession {

  showTyped = false;

  ngOnInit() {
    setTimeout(() => {
      this.showTyped = true;
    });
  }

techStack = [
  // Front-end
  { name: 'Angular', icon: faAngular },
  { name: 'React', icon: faReact },
  { name: 'TypeScript', icon: faTypescript },
  { name: 'Tailwind CSS', icon: faTailwindCss },
  // Back-end
  { name: 'Node.js', icon: faNodeJs },

  // Databases
  { name: 'PostgreSQL', icon: faPostgresql },

  // DevOps
  { name: 'Docker', icon: faDocker },
  { name: 'Jenkins', icon: faJenkins },

  // 🔁 DUPLICAÇÃO PARA LOOP
  { name: 'Angular', icon: faAngular },
  { name: 'React', icon: faReact },
  { name: 'TypeScript', icon: faTypescript },
  { name: 'Tailwind CSS', icon: faTailwindCss },
  { name: 'Node.js', icon: faNodeJs },

  { name: 'PostgreSQL', icon: faPostgresql },

  { name: 'Docker', icon: faDocker },
  { name: 'Jenkins', icon: faJenkins },
];


}
