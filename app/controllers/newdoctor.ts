import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';
import Practice from '../models/practice';

export default class DoctorsController extends Controller {
  @tracked newName: string = '';
  @tracked newLastname: string = '';
  @tracked newStreet: string = '';
  @tracked newHousenumber: string = '';
  @tracked newPostalcode: string = '';
  @tracked newCity: string = '';
  @tracked practices?: Practice;
  @tracked newPractice?: Practice;

  @service store !: any;
  @service router!: RouterService;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();

    try {
      this.practices = await this.store.findAll('practice');
    } catch (error) {
      console.log('Error fetching practices : ', error);
    }
  }

  @action
  async selectPractice(event: any) {
    const selectedPracticeId = event.target.value;
    this.existingPractice = await this.store.findRecord(
      'practice',
      selectedPracticeId
    );
  }

  @action
  async createDoctor(event: any) {
    event.preventDefault();

    const doctor = this.store.createRecord('doctor', {
      name: this.newName,
      lastname: this.newLastname,
      street: this.newStreet,
      housenumber: this.newHousenumber,
      postalcode: this.newPostalcode,
      city: this.newCity,
    });
    await doctor.save();
    doctor.practice = this.existingPractice;
    await doctor.save();
    this.router.transitionTo('/');
    this.clearForm();
  }
  async clearForm() {
    this.newName = '';
    this.newLastname = '';
    this.newStreet = '';
    this.newHousenumber = '';
    this.newPostalcode = '';
    this.newCity = '';
  }
}
