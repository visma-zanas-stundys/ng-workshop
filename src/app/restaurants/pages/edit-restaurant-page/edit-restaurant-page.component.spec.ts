import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantPageComponent } from './edit-restaurant-page.component';

describe('EditRestaurantPageComponent', () => {
  let component: EditRestaurantPageComponent;
  let fixture: ComponentFixture<EditRestaurantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestaurantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
