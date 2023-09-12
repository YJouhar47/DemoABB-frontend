// app/components/doctor-component.ts
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import StoreService from '@ember-data/store';
import RouterService from '@ember/routing/router-service';
import type Practice from '../../models/practice';
import type Doctor from '../../models/practice';

export default class DoctorComponent extends Component {
  @service('store') store!: StoreService;
  @service('router') router!: RouterService;

  @tracked practices!: Practice[];
  @tracked existingPractice!: Practice | null; // Adjust the type accordingly

  constructor() {
    super(...arguments);
    this.fetchData();
  }

  async fetchData() {
    try {
      this.practices = await this.store.findAll('practice');
    } catch (error) {
      console.log('Error fetching practices:', error);
    }
  }

  @action
  async selectPractice(event: Event) {
    const selectedPracticeId = (event.target as HTMLSelectElement).value;
    this.existingPractice = await this.store.findRecord(
      'practice',
      selectedPracticeId
    );
  }

  @action
  async editDoctor(doctor: Doctor, event: Event) {
    event.preventDefault();
    await doctor.save();
    if (this.existingPractice) {
      doctor.practice = this.existingPractice;
      await doctor.save();
    }

    this.router.transitionTo('/');
  }
}
