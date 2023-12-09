import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya_Borisova_annaВизитLForm from './forms/i-i-s-kursovaya-borisova-anna-визит-l';
import IISKursovaya_Borisova_annaДолжностиLForm from './forms/i-i-s-kursovaya-borisova-anna-должности-l';
import IISKursovaya_Borisova_annaКлиентLForm from './forms/i-i-s-kursovaya-borisova-anna-клиент-l';
import IISKursovaya_Borisova_annaсотрудникLForm from './forms/i-i-s-kursovaya-borisova-anna-сотрудник-l';
import IISKursovaya_Borisova_annaТоварLForm from './forms/i-i-s-kursovaya-borisova-anna-товар-l';
import IISKursovaya_Borisova_annaУслугаLForm from './forms/i-i-s-kursovaya-borisova-anna-услуга-l';
import IISKursovaya_Borisova_annaВизитEForm from './forms/i-i-s-kursovaya-borisova-anna-визит-e';
import IISKursovaya_Borisova_annaДолжностиEForm from './forms/i-i-s-kursovaya-borisova-anna-должности-e';
import IISKursovaya_Borisova_annaКлиентEForm from './forms/i-i-s-kursovaya-borisova-anna-клиент-e';
import IISKursovaya_Borisova_annaсотрудникEForm from './forms/i-i-s-kursovaya-borisova-anna-сотрудник-e';
import IISKursovaya_Borisova_annaТоварEForm from './forms/i-i-s-kursovaya-borisova-anna-товар-e';
import IISKursovaya_Borisova_annaУслугаEForm from './forms/i-i-s-kursovaya-borisova-anna-услуга-e';
import IISKursovaya_Borisova_annaВизитModel from './models/i-i-s-kursovaya-borisova-anna-визит';
import IISKursovaya_Borisova_annaДолжностиModel from './models/i-i-s-kursovaya-borisova-anna-должности';
import IISKursovaya_Borisova_annaЗаписьВизитаModel from './models/i-i-s-kursovaya-borisova-anna-запись-визита';
import IISKursovaya_Borisova_annaКлиентModel from './models/i-i-s-kursovaya-borisova-anna-клиент';
import IISKursovaya_Borisova_annaСоставУслугиModel from './models/i-i-s-kursovaya-borisova-anna-состав-услуги';
import IISKursovaya_Borisova_annaсотрудникModel from './models/i-i-s-kursovaya-borisova-anna-сотрудник';
import IISKursovaya_Borisova_annaТоварModel from './models/i-i-s-kursovaya-borisova-anna-товар';
import IISKursovaya_Borisova_annaУслугаModel from './models/i-i-s-kursovaya-borisova-anna-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-borisova-anna-визит': IISKursovaya_Borisova_annaВизитModel,
    'i-i-s-kursovaya-borisova-anna-должности': IISKursovaya_Borisova_annaДолжностиModel,
    'i-i-s-kursovaya-borisova-anna-запись-визита': IISKursovaya_Borisova_annaЗаписьВизитаModel,
    'i-i-s-kursovaya-borisova-anna-клиент': IISKursovaya_Borisova_annaКлиентModel,
    'i-i-s-kursovaya-borisova-anna-состав-услуги': IISKursovaya_Borisova_annaСоставУслугиModel,
    'i-i-s-kursovaya-borisova-anna-сотрудник': IISKursovaya_Borisova_annaсотрудникModel,
    'i-i-s-kursovaya-borisova-anna-товар': IISKursovaya_Borisova_annaТоварModel,
    'i-i-s-kursovaya-borisova-anna-услуга': IISKursovaya_Borisova_annaУслугаModel
  },

  'application-name': 'Kursovaya_ borisova_anna',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ borisova_anna',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ borisova_anna',
          title: 'Kursovaya_ borisova_anna'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'создать-визит': {
          caption: 'Создать визит',
          title: 'Создать визит',
          'i-i-s-kursovaya-borisova-anna-визит-l': {
            caption: 'Создать визит',
            title: 'Визит'
          }
        },
        'справочник-сотрудники': {
          caption: 'Справочник сотрудники',
          title: 'Справочник сотрудники',
          'i-i-s-kursovaya-borisova-anna-сотрудник-l': {
            caption: 'сотрудники',
            title: 'Сотрудник'
          },
          'i-i-s-kursovaya-borisova-anna-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        товары: {
          caption: 'Товары',
          title: 'Товары',
          'i-i-s-kursovaya-borisova-anna-товар-l': {
            caption: 'Товары',
            title: 'Товар'
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-kursovaya-borisova-anna-клиент-l': {
            caption: 'Клиенты',
            title: 'Клиент'
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-kursovaya-borisova-anna-услуга-l': {
            caption: 'Услуги',
            title: 'Услуга'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-borisova-anna-визит-l': IISKursovaya_Borisova_annaВизитLForm,
    'i-i-s-kursovaya-borisova-anna-должности-l': IISKursovaya_Borisova_annaДолжностиLForm,
    'i-i-s-kursovaya-borisova-anna-клиент-l': IISKursovaya_Borisova_annaКлиентLForm,
    'i-i-s-kursovaya-borisova-anna-сотрудник-l': IISKursovaya_Borisova_annaсотрудникLForm,
    'i-i-s-kursovaya-borisova-anna-товар-l': IISKursovaya_Borisova_annaТоварLForm,
    'i-i-s-kursovaya-borisova-anna-услуга-l': IISKursovaya_Borisova_annaУслугаLForm,
    'i-i-s-kursovaya-borisova-anna-визит-e': IISKursovaya_Borisova_annaВизитEForm,
    'i-i-s-kursovaya-borisova-anna-должности-e': IISKursovaya_Borisova_annaДолжностиEForm,
    'i-i-s-kursovaya-borisova-anna-клиент-e': IISKursovaya_Borisova_annaКлиентEForm,
    'i-i-s-kursovaya-borisova-anna-сотрудник-e': IISKursovaya_Borisova_annaсотрудникEForm,
    'i-i-s-kursovaya-borisova-anna-товар-e': IISKursovaya_Borisova_annaТоварEForm,
    'i-i-s-kursovaya-borisova-anna-услуга-e': IISKursovaya_Borisova_annaУслугаEForm
  },

});

export default translations;
