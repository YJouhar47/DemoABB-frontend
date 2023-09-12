import Component from '@glimmer/component';

interface DoctorsFilterArgs {
  doctors: Array<{ name: string; city: string; lastname: string }>;
  query: string;
}

export default class DoctorsFilterComponent extends Component<DoctorsFilterArgs> {
  get results(): Array<{ name: string; city: string; lastname: string }> {
    let { doctors, query } = this.args;

    if (query) {
      query = query.toLowerCase();

      doctors = doctors.filter((doctor) => {
        const name = doctor.name.toLowerCase();
        const city = doctor.city.toLowerCase();
        const lastname = doctor.lastname.toLowerCase();

        return (
          name.includes(query) ||
          city.includes(query) ||
          lastname.includes(query)
        );
      });
    }

    return doctors;
  }
}
