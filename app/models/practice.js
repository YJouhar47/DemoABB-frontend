import Model, { attr, hasMany } from '@ember-data/model';

export default class PracticeModel extends Model {
  @attr('string') name;
  @attr('string') street;
  @attr('string') housenumber;
  @attr('string') postalcode;
  @attr('string') city;
  @attr('string') type;
  @hasMany('doctor', { async: true, inverse: 'practice' }) doctors;
}
