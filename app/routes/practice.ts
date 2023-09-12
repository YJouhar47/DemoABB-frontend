import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class DoctorRoute extends Route {
  @service store : any;

  async model(params: any) {
    return this.store.findRecord('practice', params.practice_id, {
      include: 'doctors',
    });
  }
}
