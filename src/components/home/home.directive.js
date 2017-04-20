import homeHTML from './home.html';

let appHome = () => {
  return {
    template: homeHTML,
    controller: 'HomeController as app'
  }
};

export default appHome;
