import { Component, effect, inject, input, output, signal } from '@angular/core';
import { SideCharacterSprite } from '@core/interfaces';
import { AnimationState, SideCharacterStore } from '@core/store';
import { TypewriterTextComponent } from "@shared/components";

@Component({
  selector: 'app-side-character',
  standalone: true,
  imports: [TypewriterTextComponent],
  templateUrl: './side-character.component.html',
  styleUrl: './side-character.component.scss'
})
export class SideCharacterComponent {
  public sideCharacter = input.required<SideCharacterSprite>();
  public talkText = input<string>();
  public slideDone = output<void>();
  public talkDone = output<void>();

  public isSlideDone = signal<boolean>(false);
  public showingImage = signal<string>('');

  private readonly _store = inject(SideCharacterStore);

  constructor() {
    effect(() => {
      if(this._store.animationState() === AnimationState.TALKING) {
        this.showingImage.set(this.sideCharacter().talkingPath);
      } else {
        this.showingImage.set(this.sideCharacter().idlePath);
      }
    })
  }

  public onSlideDone($event: AnimationEvent) {
    if($event.animationName.includes('slide-in')) {
      this.slideDone.emit();
      this.isSlideDone.set(true);
    }
  }
}
