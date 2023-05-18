import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obj3Component } from './obj3.component';

describe('Obj3Component', () => {
  let component: Obj3Component;
  let fixture: ComponentFixture<Obj3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obj3Component]
    });
    fixture = TestBed.createComponent(Obj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
