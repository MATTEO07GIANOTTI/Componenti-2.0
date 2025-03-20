import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtComponentComponent } from './fourt-component.component';

describe('FourtComponentComponent', () => {
  let component: FourtComponentComponent;
  let fixture: ComponentFixture<FourtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourtComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
