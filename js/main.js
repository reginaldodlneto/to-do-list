const Main = {
  init: function () {
    this.cacheSelectors()
    this.bindEvents()
  },

  cacheSelectors: function () {
    // Usar o this para ela ficar disponivel para tosos os elementos
    this.$checkButtons = document.querySelectorAll('.check')
    this.$inputTask = document.querySelector('#inputTask')
    this.$list = document.querySelector('#list')
  },

  bindEvents: function () {
    const self = this

    this.$checkButtons.forEach(function (button) {
      button.onclick = self.Events.checkButton_click
    })

    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
  },

  Events: {
    checkButton_click: function (e) {
      const li = e.target.parentElement
      const isDone = li.classList.contains('done')

      if (!isDone) {
        return li.classList.add('done')
      }

      li.classList.remove('done')
    },

    inputTask_keypress: function (e) {
      // Dentro de uma função de evento, o this sempre vai ser o proprio elemento que adicionamos o evento
      const key = e.key
      const value = e.target.value

      if (key === 'Enter') {
        this.$list.innerHTML += `
          <li>
              <div class="check"></div>
                <label class="task"> ${value} </label>
              <button class="remove"></button>
          </li>
        `

        e.target.value = ''
      }
    }
  }
}

Main.init()
