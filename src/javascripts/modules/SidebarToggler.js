var PurpleMine = PurpleMine || {}

PurpleMine.SidebarToggler = (function () {
  'use strict'

  var instance
  var translations = {
    en: {
      toggler: 'Toggle sidebar'
    },
    pl: {
      toggler: 'Pokaż/ukryj panel boczny'
    },
    ja: {
      toggler: 'サイドバーの切り替え'
    }
  }

  function SidebarToggler () {
    if (instance) {
      return instance
    }

    instance = this

    this.sidebarVisible = true
    this.sidebarHiding = null
    this.$toggler = null
    this.$main = $('#main')
    this.$sidebar = $('#sidebar')
    this.lang = document.documentElement.lang

    if (typeof translations[this.lang] === 'undefined') {
      this.lang = 'en'
    }

    this._ = translations[this.lang]

    // Fix issue with context menu position
    if (this.$main.css('position') === 'relative') {
      $('#context-menu').appendTo('#wrapper3')
    }

    handleSidebar()
  }

  function handleSidebar () {
    if (window.localStorage) {
      instance.sidebarVisible =
        localStorage.getItem('PurpleMine:sidebarHidden') === null
    }

    if (
      instance.$sidebar.length > 0 &&
      instance.$main.hasClass('nosidebar') === false
    ) {
      buildButton()
      bindKeyHandler()

      if (instance.sidebarVisible === false) {
        instance.hideSidebar(true)
      }
    }
  }

  function bindKeyHandler () {
    var body = document.getElementsByTagName('body')[0]

    window.onkeydown = function (event) {
      if (
        body === event.target &&
        event.keyCode === 83 && // "s"
        event.ctrlKey === false &&
        event.altKey === false &&
        event.shiftKey === false
      ) {
        instance.toggleSidebar()
      }
    }
  }

  function buildButton () {
    var togglerClass = 'sidebar-toggler'
    var togglerHtml = '<a href="javascript:;" class="' +
      togglerClass +
      '" title="' +
      instance._.toggler +
      '"></a>'
    instance.$toggler = $(togglerHtml)

    instance.$main.append(instance.$toggler)
    instance.$toggler.on('click', instance.toggleSidebar)
  }

  SidebarToggler.prototype.toggleSidebar = function () {
    if (instance.sidebarVisible) {
      instance.hideSidebar()
    } else {
      instance.showSidebar()
    }
  }

  SidebarToggler.prototype.hideSidebar = function (immediate) {
    if (immediate === true) {
      this.$sidebar.addClass('sidebar-hiding sidebar-hidden')
    } else {
      this.$sidebar.addClass('sidebar-hiding')
      this.sidebarHiding = setTimeout(function sidebarTimeout () {
        instance.$sidebar.addClass('sidebar-hidden')
      }, 500)
    }

    this.$toggler.addClass('sidebar-hidden')
    this.sidebarVisible = false

    if (window.localStorage) {
      localStorage.setItem('PurpleMine:sidebarHidden', 'x')
    }
  }

  SidebarToggler.prototype.showSidebar = function () {
    clearTimeout(this.sidebarHiding)

    instance.$sidebar.removeClass('sidebar-hidden')
    setTimeout(function sidebarTimeout () {
      instance.$sidebar.removeClass('sidebar-hiding')
    }, 50)

    this.$toggler.removeClass('sidebar-hidden')
    this.sidebarVisible = true

    if (window.localStorage) {
      localStorage.removeItem('PurpleMine:sidebarHidden')
    }
  }

  return SidebarToggler
}())
