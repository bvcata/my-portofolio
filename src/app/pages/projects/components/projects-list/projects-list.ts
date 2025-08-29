import { Component } from '@angular/core';
import projects from './projects.json';

interface Project {
  imagePath: string;
  name: string;
  role: string;
  duration: string;
  technologies: string;
  description: string;
}

@Component({
  selector: 'app-projects-list',
  imports: [],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
})
export class ProjectsList {
  public projects: Project[] = projects;
}
