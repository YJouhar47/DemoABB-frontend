import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PracticeComponent extends Component {
  @service store;
  @service router;

  @action
  editPractice(practice, event) {
    event.preventDefault();
    practice.save();
    this.router.transitionTo('/');
  }
}