import { Component, inject } from '@angular/core';
import { SideCharacterComponent } from "@core/components";
import { PresentationBoxComponent } from "@shared/components";
import { ProjectsList } from "./components/projects-list/projects-list";
import { SideCharacterStore } from '@core/store';

@Component({
  selector: 'app-projects',
  imports: [SideCharacterComponent, PresentationBoxComponent, ProjectsList],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public isFadeDone = false;
  public sideCharacter = {
    idlePath: '/images/one-hand-idling.png',
    talkingPath: '/images/one-hand-talking.gif'
  };

  private readonly _store = inject(SideCharacterStore);

  onSlideDone() {
    this._store.startTalking();
  }

  onTalkingDone() {
    this._store.startIdling();
  }
}
