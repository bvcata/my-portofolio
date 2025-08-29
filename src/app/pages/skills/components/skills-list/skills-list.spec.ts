import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsList } from './skills-list';

describe('SkillsList', () => {
  let component: SkillsList;
  let fixture: ComponentFixture<SkillsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
