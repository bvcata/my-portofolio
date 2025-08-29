import { Component, signal } from '@angular/core';
import skillList from './skills.json';

interface Skill {
  imagePath: string;
  title: string;
  level: string;
}

@Component({
  selector: 'app-skills-list',
  imports: [],
  templateUrl: './skills-list.html',
  styleUrl: './skills-list.scss'
})
export class SkillsList {
  public skills = signal<Skill[]>(skillList);
}
