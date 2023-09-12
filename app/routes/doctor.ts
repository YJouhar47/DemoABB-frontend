import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class DoctorRoute extends Route {
  @service store : any ;

  async model(params: any) {
    return this.store.findRecord('doctor', params.doctor_id, {
      include: 'practice',
    });
  }
}
