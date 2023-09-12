import Model, { attr, belongsTo } from '@ember-data/model';
import type Practice from './practice';

export default class DoctorModel extends Model {
  @attr('string') declare name?: string;
  @attr('string') declare lastname: string;
  @attr('string') declare street: string;
  @attr('string') declare housenumber: string;
  @attr('string') declare postalcode: string;
  @attr('string') declare city: string;

  @belongsTo('practice', { async: true, inverse: 'doctors' }) declare practice: Practice;
}
