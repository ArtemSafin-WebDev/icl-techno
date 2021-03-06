import 'picturefill';
import objectFitImages from 'object-fit-images';
import 'objectFitPolyfill';
import detectIt from 'detect-it';
import smoothscroll from 'smoothscroll-polyfill';
import introSlider from './introSlider';
import fixHeader from './fixHeader';
import tabs from './tabs';
import equipmentSlider from './equipmentSlider';
import search from './search';
import homeNewsSlider from './homeNewsSlider';
import aboutCompanySlider from './aboutCompanySlider';
import realisedProjectsSlider from './realisedProjects';
import submenus from './submenus';
import ourClientsSlider from './ourClientsSlider';
import inlineVideo from './inlineVideo';
import textInsertionSlider from './textInsertionSlider';
import scrollableTables from './scrollableTables';
import gallerySlider from './gallerySlider';
import accordeons from './accordeons';
import ourHistory from './ourHistory';
import serialMasking from './serialInputsMasking';
import documentsSlider from './documentsSlider';
import formValidation from './formValidation';
import configurator from './configurator';
import serial from './serial';
import amountBtns from './amountBtns';
import modals from './modals';
import map from './map';
import customSelects from './customSelects';
import servicesCities from './servicesCities';
import teamModals from './teamModals';
import showAll from './showAll';
import realisedProjectsFilter from './realisedProjectsFilter';
import videoLazyLoading from './videosLazyLoading';
import '@fancyapps/fancybox';
import stickyBanner from './stickyBanner';
import openInModals from './openInModal';
import onlyNumericInput from './onlyNumericInput';

import mediaModals from './mediaModals';
import scrollStandaloneMenu from './scrollStandaloneMenu';



document.addEventListener('DOMContentLoaded', function () {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)

    objectFitImages();

    // Полифилл для метода element.matches();

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }

    // Полифилл метода element.closest();

    (function (ELEMENT) {
        ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
        ELEMENT.closest =
            ELEMENT.closest ||
            function closest(selector) {
                if (!this) return null;
                if (this.matches(selector)) return this;
                if (!this.parentElement) {
                    return null;
                } else return this.parentElement.closest(selector);
            };
    })(Element.prototype);


    // Полифилл функций скроллинга

    smoothscroll.polyfill();

    // Определение тач устройств

    if (detectIt.hasTouch) {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');

        function appendStyle(styles) {
            var css = document.createElement('style');
            css.type = 'text/css';

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName('head')[0].appendChild(css);
        }

        var styles = '* {cursor: pointer; }';

        window.onload = function () {
            appendStyle(styles);
        };
    }

    // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
    (function (arr) {
        arr.forEach(function (item) {
            if (item.hasOwnProperty('append')) {
                return;
            }
            Object.defineProperty(item, 'append', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function append() {
                    var argArr = Array.prototype.slice.call(arguments),
                        docFrag = document.createDocumentFragment();

                    argArr.forEach(function (argItem) {
                        var isNode = argItem instanceof Node;
                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                    });

                    this.appendChild(docFrag);
                },
            });
        });
    })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

    // Ленивая загрузка видео

    videoLazyLoading();

    // Слайдер наверху главной страницы

    introSlider();

    // Фиксируем хедер на скролл

    fixHeader();

    // Табы

    tabs();

    // Слайдер оборудования

    equipmentSlider();

    // Поиск

    search();

    // Слайдер новостей на главной, который появляется только в мобильной версии

    homeNewsSlider();

    // Слайдер о компании на главной, который появляется только начиная с планшетной версии

    aboutCompanySlider();

    // Слайдер реализованных проектов на главной, который появляется только начиная с мобильной версии

    realisedProjectsSlider();

    // Субменю на мобильной ширине

    submenus();

    // Слайдер блока Наши клиенты

    ourClientsSlider();

    // Инлайновые видео

    inlineVideo();

    // Слайдер текстовой вставки

    textInsertionSlider();

    // Таблицы со скроллингом

    scrollableTables();

    // Слайдеры блоков галерей

    gallerySlider();

    // Аккордеоны

    accordeons();

    // Слайдер Наша история

    ourHistory();

    // Маска ввода серийного номера

    serialMasking();

    // Слайдер документов

    documentsSlider();

    // Валидация форм

    formValidation();

    // Скрипты конфигуратора

    configurator();

    // Поиск по серийному номеру

    serial();

    // Увеличить/уменьшить количество товара

    amountBtns();

    // Модальные окна

    modals();

    // Карты в контактах

    map();

    // Кастомные селекты

    customSelects();

    // Города с сервисами

    servicesCities();

    // Модалки команды

    teamModals();

    // Показать все

    showAll();

    // Фильтрация реализованных проектов

    realisedProjectsFilter();

    // Модалки слайдер галереи

    mediaModals();

    // Открытие в модалках по выбору

    openInModals();

    // Только числовой ввод для type="number"

    onlyNumericInput();


    // Скроллинг до активного пункта меню

    scrollStandaloneMenu();
});


window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    stickyBanner();
});


