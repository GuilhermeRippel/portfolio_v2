import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSession } from './main-session';

describe('MainSession', () => {
  let component: MainSession;
  let fixture: ComponentFixture<MainSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
