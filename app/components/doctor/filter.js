import Component from '@glimmer/component';

export default class DoctorsFilterComponent extends Component {
  get results() {
    let { doctors, query } = this.args;

    if (query) {
      query = query.toLowerCase();

      doctors = doctors.filter((doctor) => {
        const name = (doctor.name).toLowerCase();
        const city = (doctor.city).toLowerCase();
        const lastname = (doctor.lastname).toLowerCase();

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
