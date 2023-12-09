import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-borisova-anna-визит-l');
  this.route('i-i-s-kursovaya-borisova-anna-визит-e',
  { path: 'i-i-s-kursovaya-borisova-anna-визит-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-визит-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-визит-e/new' });
  this.route('i-i-s-kursovaya-borisova-anna-должности-l');
  this.route('i-i-s-kursovaya-borisova-anna-должности-e',
  { path: 'i-i-s-kursovaya-borisova-anna-должности-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-должности-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-должности-e/new' });
  this.route('i-i-s-kursovaya-borisova-anna-клиент-l');
  this.route('i-i-s-kursovaya-borisova-anna-клиент-e',
  { path: 'i-i-s-kursovaya-borisova-anna-клиент-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-клиент-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-клиент-e/new' });
  this.route('i-i-s-kursovaya-borisova-anna-сотрудник-l');
  this.route('i-i-s-kursovaya-borisova-anna-сотрудник-e',
  { path: 'i-i-s-kursovaya-borisova-anna-сотрудник-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-сотрудник-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-сотрудник-e/new' });
  this.route('i-i-s-kursovaya-borisova-anna-товар-l');
  this.route('i-i-s-kursovaya-borisova-anna-товар-e',
  { path: 'i-i-s-kursovaya-borisova-anna-товар-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-товар-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-товар-e/new' });
  this.route('i-i-s-kursovaya-borisova-anna-услуга-l');
  this.route('i-i-s-kursovaya-borisova-anna-услуга-e',
  { path: 'i-i-s-kursovaya-borisova-anna-услуга-e/:id' });
  this.route('i-i-s-kursovaya-borisova-anna-услуга-e.new',
  { path: 'i-i-s-kursovaya-borisova-anna-услуга-e/new' });
});

export default Router;
