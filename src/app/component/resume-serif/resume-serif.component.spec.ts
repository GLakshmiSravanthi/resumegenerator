import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSerifComponent } from './resume-serif.component';

describe('ResumeSerifComponent', () => {
  let component: ResumeSerifComponent;
  let fixture: ComponentFixture<ResumeSerifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSerifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
