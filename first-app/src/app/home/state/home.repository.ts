import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { select, withProps, createStore, setProp } from '@ngneat/elf';
import { HousingLocation } from 'src/app/housinglocation';
import { selectAllEntities, selectAllEntitiesApply, setEntities, withEntities } from '@ngneat/elf-entities';

export interface HomeProps {
  filter: string;
}

const store = createStore(
  { name: 'home' },
  withProps<HomeProps>({ filter: '' }),
  withEntities<HousingLocation>()
);

@Injectable({ providedIn: 'root' })
export class HomeRepository {

  housingLocationList$ = store.pipe(selectAllEntities());
  filter$ = store.pipe(select(state => state.filter));
  
  filteredLocationList$ = this.filter$.pipe(
    switchMap((filter) => {
      return store.pipe(
        selectAllEntitiesApply({
          filterEntity({ city }) {
            if (!filter) return true;
            console.log(filter + '         ' + city);
            return city.toLowerCase().includes(filter.toLowerCase());
          },
        })
      );
    })
  );

  setHousingLocationList(housingLocationList: HousingLocation[]){
    store.update(setEntities(housingLocationList));
  }

  updateFilter(filter: HomeProps['filter']) {
    store.update(setProp('filter', filter));
  }

}
