import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCharacterComponent } from './side-character.component';

describe('SideCharacterComponent', () => {
  let component: SideCharacterComponent;
  let fixture: ComponentFixture<SideCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
