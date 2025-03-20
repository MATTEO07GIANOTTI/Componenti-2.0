import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtComponentComponent } from './thirt-component.component';

describe('ThirtComponentComponent', () => {
  let component: ThirtComponentComponent;
  let fixture: ComponentFixture<ThirtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirtComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
