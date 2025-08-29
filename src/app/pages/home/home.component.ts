import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SideCharacterComponent } from '@core/components';
import { SideCharacterStore } from '@core/store';
import { ConversationBoxComponent } from '@shared/components';
import { firstGreetingDoneSessionKey } from '@shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideCharacterComponent, ConversationBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public questions = [
    {
      text: 'I would like to know more about you',
      action: () => {
        this.talkingText = `I am a Senior Frontend Developer with 6 years of experience, focused on crafting modern, scalable, and maintainable web applications using Angular.\nI bring vision and purpose to every project—designing systems from the ground up, leading frontend architecture, and delivering clean, reusable code that supports long-term growth. I care deeply about UX, product direction, and building consistent design systems that create a high-quality experience.\nMy skills include:\nFrontend\n- Angular, TypeScript\n- Angular Material, SCSS, HTML\n- Responsive design, pixel-perfect UI\n- RxJS, NgRx\n- Unit & E2E Testing (Karma, Jasmine, jest)\n\nArchitecture & Collaboration\n- Component-based architecture\n- Scalable, reusable design systems\n- Agile/Scrum workflows\n- Product-focused thinking & stakeholder collaboration`;
        this._store.startTalking();
        this.questions = this.questions.slice(1);
      },
    },
    {
      text: 'Can you show me your skills?',
      action: () => this.navigateTo('skills'),
    },
    {
      text: 'I would like to see your previous projects',
      action: () => this.navigateTo('projects'),
    },
    {
      text: 'How can I contact you?',
      action: () => this.navigateTo('contact'),
    }
  ];
  public talkingText = '';
  public sideCharacter = {
    idlePath: '/images/one-hand-idling.png',
    talkingPath: '/images/one-hand-talking.gif',
  };

  private readonly _firstGreetingText = "Hi, I'm Cata\nHow can I help?";
  private readonly _ongoingGreetingText = 'Anything else I can help you with?';

  private readonly _router = inject(Router);
  private readonly _store = inject(SideCharacterStore);

  constructor() {
    const isFirstGreetDone = sessionStorage.getItem(firstGreetingDoneSessionKey);
    if (isFirstGreetDone) {
      this.talkingText = this._ongoingGreetingText;
    } else {
      this.talkingText = this._firstGreetingText;
      sessionStorage.setItem(firstGreetingDoneSessionKey, 'true');
    }
  }

  public onSlideDone() {
    this._store.startTalking();
  }

  public onTalkingDone() {
    this._store.startIdling();
  }

  private navigateTo(route: string) {
    this._router.navigate([route]);
  }
}
