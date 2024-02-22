import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index');
  this.route('register', {path: '/register'});
  this.route('login', {path: '/login'});

  this.route('restaurant', {path: '/restaurants'}, function() {
    this.route('restaurant', {path: '/'})
    this.route('list-restaurant', {path: '/index'});
    this.route('edit', {path: '/edit/:id'});
    this.route('destroy');
  });
});

export default Router;
