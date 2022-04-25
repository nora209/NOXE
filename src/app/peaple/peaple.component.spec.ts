import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeapleComponent } from './peaple.component';

describe('PeapleComponent', () => {
  let component: PeapleComponent;
  let fixture: ComponentFixture<PeapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeapleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
