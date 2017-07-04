export class dashboardController {
    set slide(val) {
        let kb = document.getElementById('keyboard'),
            slider = document.getElementById('slider'),
            position = val === 'up'
                ? '0' : `-${kb.offsetHeight - 6}px`;
        slider.style.bottom = position;
    }
    constructor() {
        this.id = 'dashboard';
        window.addEventListener('load', () => {
            this.slide = 'up';
        });
    }
    slider() {
        let point = document.getElementsByClassName('key-qwerty')[0],
            e = document.getElementById('slider');
        e.style.bottom = `-${point.offsetTop-4}px`;
    }
}