import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import projects from './projects.json';
import { ModalStore } from '@core/store';
import { ScrollFade } from '@shared/directives';
import { Content, ContentViewer } from '@shared/components';

interface Project {
  imagePath: string;
  name: string;
  role: string;
  duration: string;
  technologies: string;
  description: string;
  modalData: Content[];
}

@Component({
  selector: 'app-projects-list',
  imports: [ScrollFade, ContentViewer],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
})
export class ProjectsList {
  public projectDetailsTemplateRef = viewChild.required<TemplateRef<unknown>>('projectDetailsModal');
  public projects: Project[] = projects;
  public modalData: Content[] = [];

  private readonly _store = inject(ModalStore);

  public openModal(project: Project) {
    this.modalData = project.modalData;
    this._store.openModal(this.projectDetailsTemplateRef());
  }
}
