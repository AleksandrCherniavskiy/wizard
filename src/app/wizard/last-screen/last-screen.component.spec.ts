import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastScreenComponent } from './last-screen.component';

describe('LastScreenComponent', () => {
  let component: LastScreenComponent;
  let fixture: ComponentFixture<LastScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
