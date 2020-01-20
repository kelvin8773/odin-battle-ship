import Ship from './assets/js/ship';
import './assets/stylesheet/style.sass';

const Controller = (() => {
  const init = () => {
    const myShip = Ship(3);
    const otherShip = Ship(4);
    return true;
  };

  return {
    init,
  };
})();

Controller.init();

export default Controller;
