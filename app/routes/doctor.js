import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class DoctorRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('doctor', params.doctor_id, {
      include: 'practice',
    });
  }
}
