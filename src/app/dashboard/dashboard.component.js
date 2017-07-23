import { swipeDetect } from '../../components/util';

export class dashboardController {
    set slide(val) {
        let kb = document.getElementById('keyboard'),
            slider = document.getElementById('slider'),
            position = val === 'up'
                ? '0' : `-${kb.offsetHeight - 3}px`;
        slider.style.bottom = position;
    }
    constructor() {
        this.id = 'dashboard';
        window.addEventListener('load', () => {
            this.slide = 'down';
            let el = document.getElementById('slider');
            swipeDetect(el, (swipeDirection) => {
                if (swipeDirection === 'up')
                    this.slide = 'up';
                else if (swipeDirection === 'down')
                    this.slide = 'down';
            });
        });
    }
}