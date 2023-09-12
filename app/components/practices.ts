import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PracticesComponent extends Component {
  @service store;
  @tracked practice;
  @action
  async removePractice(practice, event) {
    const response = confirm(`Are you sure to delete - ${practice.name} ?`);
    if (response) {
      event.preventDefault();
      practice.destroyRecord();
    } else {
      alert('Canceled');
    }
  }
}
