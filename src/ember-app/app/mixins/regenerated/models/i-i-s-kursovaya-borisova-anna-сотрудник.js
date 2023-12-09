import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  кодСотрудника: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  пол: DS.attr('i-i-s-kursovaya-borisova-anna-пол'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-kursovaya-borisova-anna-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('сотрудникE', 'i-i-s-kursovaya-borisova-anna-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    кодСотрудника: attr('Код сотрудника', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    должности: belongsTo('i-i-s-kursovaya-borisova-anna-должности', 'Должности', {
      должность: attr('Должность', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('сотрудникL', 'i-i-s-kursovaya-borisova-anna-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    кодСотрудника: attr('Код сотрудника', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    должности: belongsTo('i-i-s-kursovaya-borisova-anna-должности', 'Должность', {
      должность: attr('Должность', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
