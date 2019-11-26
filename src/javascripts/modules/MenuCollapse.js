var PurpleMine = PurpleMine || {} // eslint-disable-line no-use-before-define

PurpleMine.MenuCollapse = (function () {
  'use strict'

  var instance
  var translations = {
    en: {
      topMenuToggler: 'Expand/collapse top menu'
    },
    ro: {
      topMenuToggler: 'Deschide/închide meniul de sus'
    },
    fr: {
      topMenuToggler: 'Développer/réduire le menu principal'
    },
    pl: {
      topMenuToggler: 'Zwiń/rozwiń górne menu'
    },
    de: {
      topMenuToggler: 'Ein-/Ausklappen Hauptmenu'
    },
    ja: {
      topMenuToggler: 'トップメニューの展開/折りたたみ'
    }
  }

  function MenuCollapse () {
    if (instance) {
      return instance
    }

    instance = this

    this.lang = document.documentElement.lang

    if (typeof translations[this.lang] === 'undefined') {
      this.lang = 'en'
    }

    this._ = translations[this.lang]

    this.menus = {
      top: {
        $el: $('#top-menu')
      }
    }

    for (var menu in this.menus) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.menus.hasOwnProperty(menu) && this.menus[menu].$el.length > 0) {
        handleMenu(menu)
      }
    }
  }

  function handleMenu (menu) {
    if (instance.menus[menu].$el.css('maxHeight') === 'none') {
      return false
    }

    instance.menus[menu].collapsed = true

    if (window.localStorage) {
      instance.menus[menu].collapsed =
        localStorage.getItem(getMenuStorageKey(menu)) === null
    }

    buildToggleButton(menu)

    if (instance.isCollapsed(menu) === false) {
      instance.expandMenu(menu)
    }
  }

  function getMenuStorageKey (menu) {
    return 'PurpleMine:' + menu + 'MenuExpanded'
  }

  function buildToggleButton (menu) {
    var togglerClass = menu + '-menu-toggler'
    var togglerLabel = instance._[menu + 'MenuToggler']
    var togglerHtml = '<a href="javascript:;" class="' +
      togglerClass +
      '" title="' +
      togglerLabel +
      '"></a>'
    instance.menus[menu].$toggler = $(togglerHtml)

    instance.menus[menu].$el.prepend(instance.menus[menu].$toggler)
    instance.menus[menu].$toggler.on('click', { menu: menu }, instance.toggleMenu)
  }

  MenuCollapse.prototype.toggleMenu = function (event) {
    var menu = event.data.menu || ''

    if (instance.isCollapsed(menu)) {
      instance.expandMenu(menu)
    } else {
      instance.collapseMenu(menu)
    }
  }

  MenuCollapse.prototype.isCollapsed = function (menu) {
    return this.menus[menu].collapsed
  }

  MenuCollapse.prototype.expandMenu = function (menu) {
    this.menus[menu].$el.addClass('expanded')
    this.menus[menu].$toggler.addClass('expanded')
    this.menus[menu].collapsed = false

    if (window.localStorage) {
      localStorage.setItem(getMenuStorageKey(menu), 'x')
    }
  }

  MenuCollapse.prototype.collapseMenu = function (menu) {
    this.menus[menu].$el.removeClass('expanded')
    this.menus[menu].$toggler.removeClass('expanded')
    this.menus[menu].collapsed = true

    if (window.localStorage) {
      localStorage.removeItem(getMenuStorageKey(menu))
    }
  }

  return MenuCollapse
}())
