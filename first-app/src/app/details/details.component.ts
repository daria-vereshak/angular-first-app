import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingServiceForOne as HousingService} from '../housing.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsRepository } from './state/details.repository';

@Component({
  selector: 'app-details',
  template: `
    <article *ngIf="repo.housingLocation$ | async as housingLocation">
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading" i18n>About this housing location</h2>
        <ul>
          <li i18n>Units available: {{housingLocation?.availableUnits}}</li>
          <li i18n>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li i18n>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading" i18n>Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name" i18n>First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name" i18n>Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary" i18n>Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(
    private housingService: HousingService,
    public repo: DetailsRepository
  ) {}
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.housingService.getHousingLocationById(Number(this.route.snapshot.params['id'])).subscribe()
;  }
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
