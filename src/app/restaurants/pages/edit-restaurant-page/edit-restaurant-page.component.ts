import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantApiService } from '../../restaurant-api.service';

const integerValidator: ValidatorFn = (control) => {
  const value = control.value;

  if (typeof value !== 'number') {
    return null; // No errors
  }

  if (value % 1 === 0) {
    return null; // No errors
  }

  return {
    integer: true, // Report an integer error
  };
};

@Component({
  selector: 'app-edit-restaurant-page',
  templateUrl: './edit-restaurant-page.component.html',
  styleUrls: ['./edit-restaurant-page.component.css'],
})
export class EditRestaurantPageComponent implements OnInit {
  form: FormGroup = this.makeForm();

  isLoading = false;

  discountOptions = [
    { value: undefined, label: 'No discount' },
    { value: '-10%', label: '-10%' },
    { value: '-20%', label: '-20%' },
    { value: 'Free shipping', label: 'Free shipping' },
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: RestaurantApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ restaurant }) => {
      if (restaurant) {
        this.form.patchValue(restaurant);
        this.form.markAllAsTouched();
      }
    });
  }

  onSubmit() {
    this.isLoading = true;

    const isEditing = this.form.value.id !== undefined;
    const request$ = isEditing
      ? this.apiService.update(this.form.value)
      : this.apiService.create(this.form.value);

    request$.subscribe({
      next: (response) => {
        this.router.navigate(['/restaurants', response.id]);
      },
      error: () => {
        this.isLoading = false;
        alert('Something went wrong');
      },
    });
  }

  private makeForm() {
    return this.fb.group({
      id: [undefined],
      imageUrl: 'https://source.unsplash.com/collection/345703/900x900?v=1',
      name: [undefined, Validators.required],
      description: [undefined],
      address: [undefined, Validators.required],
      distanceInKm: [0, Validators.required],
      rating: [
        0,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
          integerValidator,
        ],
      ],
      discount: [undefined],
    });
  }
}
