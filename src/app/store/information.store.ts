import { createStore, select, withProps } from '@ngneat/elf';

export interface Information {
  firstInfo: string | null;
  secondInfo: string | null;
}

export class InformationRepository {
  private store = createStore(
    { name: 'informationStore' },
    withProps<Information>({ firstInfo: null, secondInfo: null })
  );

  updateInformation(formValue: string[]) {
    this.store.update((state) => ({
      ...state,
      ...formValue,
    }));
    console.log(this.store);
  }

  firstInfo$ = this.store.pipe(select((state) => state.firstInfo));
  secondInfo$ = this.store.pipe(select((state) => state.secondInfo));
}
