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
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsSession {
  projetcs: ProjectInterface[] = [
    {
      title: `Site Hamburgueria`,
      description: `Este projeto consiste em um frontend destinado à uma hamburgueria fictícia, 
      basicamente conta com tecnologias como Swiper para carrosel de imagens, e hookes e bibliotecas do React para um design interativo e responsivo.`,
      tecnologies: [`React`, `TailwindCSS`],
    },
    {
      title: `Site Hamburgueria`,
      description: `Este projeto consiste em um frontend destinado à uma hamburgueria fictícia, 
      basicamente conta com tecnologias como Swiper para carrosel de imagens, e hookes e bibliotecas do React para um design interativo e responsivo.`,
      tecnologies: [`React`, `TailwindCSS`],
    },
    {
      title: `Site Hamburgueria`,
      description: `Este projeto consiste em um frontend destinado à uma hamburgueria fictícia, 
      basicamente conta com tecnologias como Swiper para carrosel de imagens, e hookes e bibliotecas do React para um design interativo e responsivo.`,
      tecnologies: [`React`, `TailwindCSS`],
    },
    {
      title: `Site Hamburgueria`,
      description: `Este projeto consiste em um frontend destinado à uma hamburgueria fictícia, 
      basicamente conta com tecnologias como Swiper para carrosel de imagens, e hookes e bibliotecas do React para um design interativo e responsivo.`,
      tecnologies: [`React`, `TailwindCSS`],
    },
  ];
}
