import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpearmintComponent } from './spearmint.component';

describe('SpearmintComponent', () => {
  let component: SpearmintComponent;
  let fixture: ComponentFixture<SpearmintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpearmintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpearmintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
