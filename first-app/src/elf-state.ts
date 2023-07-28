import { Store, createState, withProps } from '@ngneat/elf';

interface SomeProps {
  user: string,
  auth: boolean
};

const {state, config} = createState(withProps<SomeProps>({user: "new user", auth: false}));

const someStore = new Store({state, name: 'some', config});

someStore.subscribe((state) => {
  console.log(state);
});