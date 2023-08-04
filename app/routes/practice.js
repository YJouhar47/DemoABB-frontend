import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class DoctorRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('practice', params.practice_id, {
      include: 'doctors',
    });
  }
}
