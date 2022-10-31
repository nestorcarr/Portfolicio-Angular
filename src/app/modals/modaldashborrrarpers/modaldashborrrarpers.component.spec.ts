import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashborrrarpersComponent } from './modaldashborrrarpers.component';

describe('ModaldashborrrarpersComponent', () => {
  let component: ModaldashborrrarpersComponent;
  let fixture: ComponentFixture<ModaldashborrrarpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashborrrarpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashborrrarpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
