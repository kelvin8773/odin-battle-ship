import Ship from './assets/js/ship';
import './assets/stylesheet/style.sass';

const Controller = (() => {
  const init = () => {
    const myShip = Ship;
    const otherShip = Ship;
    myShip.init(5);
    otherShip.init(5);
  };

  return {
    init,
  };
})();

Controller.init();

export const start = () => 'Hello';
