import Model, { attr, hasMany } from '@ember-data/model';
import type Doctor from './doctor'
export default class PracticeModel extends Model {
  @attr('string') declare name : string;
  @attr('string') declare street : string;
  @attr('string') declare housenumber : string;
  @attr('string') declare postalcode : string;
  @attr('string') declare city : string;
  @attr('string') declare type : string;
  @hasMany('doctor', { async: true, inverse: 'practice' }) declare doctors: Doctor[];

}
