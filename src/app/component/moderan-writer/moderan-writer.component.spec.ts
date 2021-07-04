import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeranWriterComponent } from './moderan-writer.component';

describe('ModeranWriterComponent', () => {
  let component: ModeranWriterComponent;
  let fixture: ComponentFixture<ModeranWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeranWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeranWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
