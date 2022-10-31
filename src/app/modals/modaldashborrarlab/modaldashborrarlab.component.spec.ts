import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashborrarlabComponent } from './modaldashborrarlab.component';

describe('ModaldashborrarlabComponent', () => {
  let component: ModaldashborrarlabComponent;
  let fixture: ComponentFixture<ModaldashborrarlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashborrarlabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashborrarlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
