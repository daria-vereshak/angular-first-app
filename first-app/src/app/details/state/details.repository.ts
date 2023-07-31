import { Injectable, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { createStore, select, setProp, withProps } from "@ngneat/elf";
import { HousingLocation } from "src/app/housinglocation";

export interface DetailsProps {
  id: number;
  housingLocation: HousingLocation | null;
}

const store = createStore(
  { name: 'details' },
  withProps<DetailsProps>({ id: 0, housingLocation: null })
);

@Injectable({providedIn: 'root'})
export class DetailsRepository {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation$ = store.pipe(
    select(state => state.housingLocation)
  );

  setHousingLocation(housingLocation: HousingLocation){
    store.update(setProp('housingLocation', housingLocation));
  }

}