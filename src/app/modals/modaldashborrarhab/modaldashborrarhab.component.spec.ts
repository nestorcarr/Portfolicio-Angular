import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashborrarhabComponent } from './modaldashborrarhab.component';

describe('ModaldashborrarhabComponent', () => {
  let component: ModaldashborrarhabComponent;
  let fixture: ComponentFixture<ModaldashborrarhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashborrarhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashborrarhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
