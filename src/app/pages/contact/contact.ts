import { Component, inject, signal } from '@angular/core';
import { SideCharacterStore } from '@core/store';
import { SideCharacterComponent } from "@core/components";
import { PresentationBoxComponent } from "@shared/components";

@Component({
  selector: 'app-contact',
  imports: [SideCharacterComponent, PresentationBoxComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public sideCharacter = {
    idlePath: '/images/crossed-arms-idling.png',
    talkingPath: '/images/crossed-arms-talking.gif'
  };

  private readonly _store = inject(SideCharacterStore);

  public isFadeDone = signal<boolean>(false);

  onSlideDone() {
    this._store.startTalking();
  }

  onTalkingDone() {
    this._store.startIdling();
  }

}
