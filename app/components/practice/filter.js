import Component from '@glimmer/component';

export default class PracticesFilterComponent extends Component {
  get results() {
    let { practices, query } = this.args;

    if (query) {
      query = query.toLowerCase(); 

      practices = practices.filter((practice) => {
        const name = practice.name.toLowerCase();
        const postalcode = practice.postalcode.toLowerCase();
        const city = practice.city.toLowerCase();
        const type = practice.type.toLowerCase();

        return (
          name.includes(query) ||
          postalcode.includes(query) ||
          city.includes(query) ||
          type.includes(query)
        );
      });
    }

    return practices;
  }
}
