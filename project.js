AFRAME.registerComponent('game-play', {
    init: function () {
      var el = this.el;
  
      el.addEventListener('collide', function (event) {
        if (event.detail.body.el.id === 'fish' && event.detail.target.el.id === 'coin') {
          event.detail.target.el.parentNode.removeChild(event.detail.target.el);
          console.log('Coin collected!');
        }
      });
    }
  });
  