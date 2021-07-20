const Main = {
  init: function () {
    this.cacheSelectors()
    this.bindEvents()
  },

  cacheSelectors: function () {
    // Usar o this para ela ficar disponivel para tosos os elementos
    this.checkButtons = document.querySelectorAll('.check')
  },

  bindEvents: function () {
    const self = this

    this.checkButtons.forEach(function (button) {
      button.onclick = self.Events.checkButton_click
    })
  },

  Events: {
    checkButton_click: function () {
      alert('ok')
    }
  }
}

Main.init()
