import Model, { attr, belongsTo } from '@ember-data/model';

export default class DoctorModel extends Model {
  @attr('string') name;
  @attr('string') lastname;
  @attr('string') street;
  @attr('string') housenumber;
  @attr('string') postalcode;
  @attr('string') city;
  
  // Correct belongsTo relationship definition
  @belongsTo('practice', { async: true, inverse: 'doctors' }) practice;
}
