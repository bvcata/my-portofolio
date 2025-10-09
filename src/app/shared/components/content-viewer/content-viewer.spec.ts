import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewer } from './content-viewer';

describe('ContentViewer', () => {
  let component: ContentViewer;
  let fixture: ComponentFixture<ContentViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
