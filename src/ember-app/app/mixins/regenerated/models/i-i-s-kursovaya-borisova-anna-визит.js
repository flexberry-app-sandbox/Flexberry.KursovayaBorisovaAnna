import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВизита: DS.attr('date'),
  кодВизита: DS.attr('number'),
  конецСеанса: DS.attr('string'),
  началоСеанса: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-kursovaya-borisova-anna-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-kursovaya-borisova-anna-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  датаВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.датаВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.кодВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  конецСеанса: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.конецСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоСеанса: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.началоСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-kursovaya-borisova-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya-borisova-anna-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-kursovaya-borisova-anna-запись-визита', 'Табличная часть запись визита', {
      стоимость: attr('Стоимость', { index: 0 }),
      комментарий: attr('Комментарий', { index: 1 }),
      сотрудник: belongsTo('i-i-s-kursovaya-borisova-anna-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' }),
      услуга: belongsTo('i-i-s-kursovaya-borisova-anna-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-kursovaya-borisova-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya-borisova-anna-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
