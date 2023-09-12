import Component from '@glimmer/component';

interface PracticeFilterArgs {
  practices: Array<{ name: string; city: string; type: string }>;
  query: string;
}

export default class PracticesFilterComponent extends Component<PracticeFilterArgs> {
  get results(): Array<{ name: string; city: string; type: string }> {
    let { practices, query } = this.args;

    if (query) {
      query = query.toLowerCase();

      practices = practices.filter((practice) => {
        const name = practice.name.toLowerCase();
        const city = practice.city.toLowerCase();
        const type = practice.type.toLowerCase();

        return (
          name.includes(query) || city.includes(query) || type.includes(query)
        );
      });
    }

    return practices;
  }
}
