// A class that handles the burger responsible for the appearance and closing of navigation
class Burger {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('nav');
        this.bars = document.querySelector('.fa-bars');
        this.times = document.querySelector('.fa-times');
        this.burger.addEventListener('click', this.showBurger.bind(this));
    }

    showBurger() {
        this.nav.classList.toggle('on');
        this.bars.classList.toggle('on');
        this.times.classList.toggle('on');
        this.burger.classList.toggle('on');
    }
}
