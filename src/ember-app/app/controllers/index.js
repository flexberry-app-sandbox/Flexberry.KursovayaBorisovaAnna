import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.создать-визит.caption'),
          title: i18n.t('forms.application.sitemap.создать-визит.title'),
          children: [{
            link: 'i-i-s-kursovaya-borisova-anna-визит-l',
            caption: i18n.t('forms.application.sitemap.создать-визит.i-i-s-kursovaya-borisova-anna-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.создать-визит.i-i-s-kursovaya-borisova-anna-визит-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.справочник-сотрудники.title'),
          children: [{
            link: 'i-i-s-kursovaya-borisova-anna-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-borisova-anna-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-borisova-anna-сотрудник-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-borisova-anna-должности-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-borisova-anna-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-borisova-anna-должности-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.товары.caption'),
          title: i18n.t('forms.application.sitemap.товары.title'),
          children: [{
            link: 'i-i-s-kursovaya-borisova-anna-товар-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-borisova-anna-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-borisova-anna-товар-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-kursovaya-borisova-anna-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-borisova-anna-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-borisova-anna-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-kursovaya-borisova-anna-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-kursovaya-borisova-anna-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-kursovaya-borisova-anna-услуга-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})