import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service'; 

export default class PracticeController extends Controller {
  @tracked newName: string = '';
  @tracked newStreet: string = '';
  @tracked newHousenumber: string = '';
  @tracked newPostalcode: string = '';
  @tracked newCity: string = '';
  @tracked newType: string = '';

  @service store!: any; 
  @service router!: RouterService; 

  @action
  createPractice(event: Event) {
    event.preventDefault();

    const practice = this.store.createRecord('practice', {
      name: this.newName,
      street: this.newStreet,
      housenumber: this.newHousenumber,
      postalcode: this.newPostalcode,
      city: this.newCity,
      type: this.newType,
    });
    practice.save();
    this.router.transitionTo('/');
    this.clearForm();
  }

  clearForm() {
    this.newName = '';
    this.newStreet = '';
    this.newHousenumber = '';
    this.newPostalcode = '';
    this.newCity = '';
    this.newType = '';
  }
}
