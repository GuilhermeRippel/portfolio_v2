import { Routes } from '@angular/router';
import { MainSession } from './pages/main-session/main-session';
import { WelcomeSession } from './pages/welcome-session/welcome-session';
import { AboutSession } from './pages/about-session/about-session';
import { ExperienceSession } from './pages/experience-session/experience-session';
import { ProjectsSession } from './pages/projects-session/projects-session';

export const routes: Routes = [
  {
    path: ``,
    component: MainSession,
    children: [
      {
        path: ``,
        component: WelcomeSession,
      },
      {
        path: `about`,
        component: AboutSession,
      },
      {
        path: `experience`,
        component: ExperienceSession,
      },
      {
        path: `projects`,
        component: ProjectsSession,
      },
    ],
  },
  // {path: `**`}
];
