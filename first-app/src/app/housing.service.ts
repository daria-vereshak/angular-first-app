import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HomeRepository } from './home/state/home.repository';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { DetailsRepository } from './details/state/details.repository';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceForAll {
  constructor(private http: HttpClient, private repo: HomeRepository) { }

  url = 'http://localhost:3000/locations';

  getAllHousingLocations() {
    return this.http
      .get<HousingLocation[]>(
        this.url
      )
      .pipe(
        tap((housingLocations) => {
          this.repo.setHousingLocationList(housingLocations || []);
        })
      );
  }
}
@Injectable({
  providedIn: 'root'
})
export class HousingServiceForOne {
  constructor(private http: HttpClient, private repo: DetailsRepository) { }

  url = 'http://localhost:3000/locations';

  getHousingLocationById(id: number) {
    return this.http
      .get<HousingLocation>(
        `${this.url}/${id}`
      )
      .pipe(
        tap((housingLocation) => {
          this.repo.setHousingLocation(housingLocation || null);
        })
      )
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}