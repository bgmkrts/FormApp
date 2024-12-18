import { makeAutoObservable } from 'mobx';

class FormStore {
  tcKimlik: string = '';
  cadde: string = '';
  sokak: string = '';
  il: string = '';
  ilce: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTcKimlik(value: string) {
    this.tcKimlik = value;
  }

  setCadde(value: string) {
    this.cadde = value;
  }

  setSokak(value: string) {
    this.sokak = value;
  }

  setIl(value: string) {
    this.il = value;
  }

  setIlce(value: string) {
    this.ilce = value;
  }

  clearForm() {
    this.tcKimlik = '';
    this.cadde = '';
    this.sokak = '';
    this.il = '';
    this.ilce = '';
  }

  getFormData() {
    return {
      tcKimlik: this.tcKimlik,
      adres: {
        cadde: this.cadde,
        sokak: this.sokak,
        il: this.il,
        ilce: this.ilce,
      },
    };
  }
}

const formStore = new FormStore();
export default formStore;
