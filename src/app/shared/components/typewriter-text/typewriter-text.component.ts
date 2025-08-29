import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-typewriter-text',
  standalone: true,
  imports: [],
  templateUrl: './typewriter-text.component.html',
  styleUrl: './typewriter-text.component.scss',
})
export class TypewriterTextComponent {
  public text = input.required<string>();
  public talkingDone = output<void>();
}
