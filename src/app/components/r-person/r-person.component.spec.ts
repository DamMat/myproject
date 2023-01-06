import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPersonComponent } from './r-person.component';

describe('RPersonComponent', () => {
  let component: RPersonComponent;
  let fixture: ComponentFixture<RPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
