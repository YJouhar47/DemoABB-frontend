import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('contact');
  this.route('about');
  this.route('newdoctor', { path: '/doctor/new' });
  this.route('doctor', { path: '/doctor/:doctor_id' });
  this.route('practice', { path: '/practice/:practice_id' });
  this.route('newpractice', { path: '/practice/new' });
});
