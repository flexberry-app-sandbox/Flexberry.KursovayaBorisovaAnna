import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТовара: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.attr('string')
});

export let ValidationRules = {
  кодТовара: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursovaya-borisova-anna-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursovaya-borisova-anna-товар', {
    наименование: attr('Наименование', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    производитель: attr('Производитель', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursovaya-borisova-anna-товар', {
    наименование: attr('Наименование', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    производитель: attr('Производитель', { index: 2 })
  });
};
