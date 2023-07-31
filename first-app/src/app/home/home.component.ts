import { Component } from '@angular/core';
import { HousingServiceForAll } from '../housing.service';
import { HomeRepository } from './state/home.repository';

@Component({
  selector: 'app-home',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" i18n-placeholder #filter>
        <button class="primary" type="button" (click)="repo.updateFilter(filter.value)" i18n>Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of repo.filteredLocationList$ | async"
        [housingLocation]="housingLocation">
      </app-housing-location>

    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
  constructor(
    private housingService: HousingServiceForAll,
    public repo: HomeRepository
  ) {}

  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe()
;  }
}
