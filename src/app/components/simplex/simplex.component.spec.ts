import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplexComponent } from './simplex.component';

describe('SimplexComponent', () => {
  let component: SimplexComponent;
  let fixture: ComponentFixture<SimplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
