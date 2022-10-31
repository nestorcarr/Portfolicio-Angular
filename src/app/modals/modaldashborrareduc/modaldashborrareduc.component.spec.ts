import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashborrareducComponent } from './modaldashborrareduc.component';

describe('ModaldashborrareducComponent', () => {
  let component: ModaldashborrareducComponent;
  let fixture: ComponentFixture<ModaldashborrareducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashborrareducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashborrareducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
