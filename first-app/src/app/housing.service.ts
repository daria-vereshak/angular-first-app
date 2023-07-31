import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HomeRepository } from './home/state/home.repository';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
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
  // getHousingLocationById(id: number) {
  //   return this.http
  //     .get<HousingLocation>(
  //       `${this.url}/${id}`
  //     )
  //     .pipe(
  //       tap((housingLocation))
  //     )
  // }

  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
