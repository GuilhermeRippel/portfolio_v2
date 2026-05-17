import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import { ProjectInterface } from '../../../shared/interfaces/ProjectInteface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects-session',
  imports: [ProjectCard, CommonModule],
  templateUrl: './projects-session.html',
  styleUrl: './projects-session.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsSession {
  projetcs: ProjectInterface[] = [
    {
      title: `Site Hamburgueria (Versão 2)`,
      description: `Landing page moderna para uma hamburgueria fictícia, desenvolvida com Angular 20 e TailwindCSS. O projeto é uma releitura de uma versão antiga criada em React, agora com foco em componentização, animações suaves, responsividade e uma experiência visual mais refinada.`,
      tecnologies: [`Angular20`, `TailwindCSS`],
      gitHubUrl: `https://github.com/GuilhermeRippel/hamburgueria_v2`,
      demoUrl: `https://hamburgueria-v2-green.vercel.app`,
      imageUrl: `assets/projeto_hamburgueria_v2.png`,
    },
    {
      title: `Site Hamburgueria`,
      description: `Aplicação frontend desenvolvida em React para uma hamburgueria fictícia, utilizando TailwindCSS para estilização. O projeto conta com navegação entre páginas, layout responsivo e uma interface focada em apresentar produtos de forma moderna e intuitiva.`,
      tecnologies: [`React`, `TailwindCSS`],
      gitHubUrl: `https://github.com/GuilhermeRippel/deploy_site_hamburgueria`,
      demoUrl: `https://hamburguerianoponto.netlify.app`,
      imageUrl: `assets/projeto_hamburgueria.png`,
    },
  ];
}
