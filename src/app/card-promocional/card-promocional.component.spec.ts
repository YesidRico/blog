import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromocionalComponent } from './card-promocional.component';

describe('CardPromocionalComponent', () => {
  let component: CardPromocionalComponent;
  let fixture: ComponentFixture<CardPromocionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPromocionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPromocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
