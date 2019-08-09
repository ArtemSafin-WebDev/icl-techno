// import "core-js/stable";
// import "regenerator-runtime/runtime";

import objectFitImages from 'object-fit-images';
import detectIt from 'detect-it';
import introSlider from './introSlider';
import fixHeader from './fixHeader';
import tabs from './tabs';
import equipmentSlider from './equipmentSlider';
import search from './search';

document.addEventListener('DOMContentLoaded', function() {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)
    objectFitImages();

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

        window.onload = function() {
            appendStyle(styles);
        };
    }

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


});