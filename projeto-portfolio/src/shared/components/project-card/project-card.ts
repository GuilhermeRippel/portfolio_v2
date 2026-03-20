import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../../interfaces/ProjectInteface';

@Component({
  standalone: true,
  selector: 'project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  @Input() configurationProject!: ProjectInterface
  // @Input() title: string = ''
  // @Input() description: string = ''
  // @Input() tecnologies: string[] = []
 }
