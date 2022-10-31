import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashborrarproyComponent } from './modaldashborrarproy.component';

describe('ModaldashborrarproyComponent', () => {
  let component: ModaldashborrarproyComponent;
  let fixture: ComponentFixture<ModaldashborrarproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashborrarproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashborrarproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
