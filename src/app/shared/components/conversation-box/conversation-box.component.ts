import { Component, computed, input, output } from '@angular/core';
import { TypewriterTextComponent } from "../typewriter-text/typewriter-text.component";
import { Question } from '../../interfaces/conversation.interface';

@Component({
  selector: 'app-conversation-box',
  standalone: true,
  imports: [TypewriterTextComponent],
  templateUrl: './conversation-box.component.html',
  styleUrl: './conversation-box.component.scss',
})
export class ConversationBoxComponent {
  public characterName = input<string>('Cata');
  public talkingText = input.required<string>();
  public questions = input.required<Question[]>();
  public talkingDone = output<void>();

  public texts = computed(() => {
    this.isTalkingDone = false;
    return [this.talkingText()];
  })

  public isSlideDone = false;
  public isTalkingDone = false;

  public onTalkingDone() {
    this.talkingDone.emit();
    this.isTalkingDone = true;
  }
}
