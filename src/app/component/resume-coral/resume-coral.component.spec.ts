import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCoralComponent } from './resume-coral.component';

describe('ResumeCoralComponent', () => {
  let component: ResumeCoralComponent;
  let fixture: ComponentFixture<ResumeCoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
