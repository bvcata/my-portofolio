import { Component, inject, signal } from '@angular/core';
import { SideCharacterComponent } from '@core/components';
import { PresentationBoxComponent } from "@shared/components";
import { SkillsList } from "./components/skills-list/skills-list";
import { SideCharacterStore } from '@core/store';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SideCharacterComponent, PresentationBoxComponent, SkillsList],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public isFadeDone = signal<boolean>(false);
  public sideCharacter = {
    idlePath: '/images/pocket-hand-idling.gif',
    talkingPath: '/images/pocket-hand-talking.gif'
  };

  private readonly _store = inject(SideCharacterStore);

  onSlideDone() {
    this._store.startTalking();
  }

  onTalkingDone() {
    this._store.startIdling();
  }
}
