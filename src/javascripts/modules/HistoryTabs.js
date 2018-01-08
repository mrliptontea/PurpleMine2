var PurpleMine = PurpleMine || {}

PurpleMine.HistoryTabs = (function () {
  'use strict'

  var instance
  var translations = {
    en: {
      all: 'All',
      notes: 'Notes',
      details: 'Changes'
    },
    pl: {
      all: 'Wszystko',
      notes: 'Notatki',
      details: 'Zmiany'
    },
    de: {
      all: 'Alles',
      notes: 'Kommentare',
      details: 'Änderungen'
    },
    ja: {
      all: 'すべて',
      notes: '注記',
      details: '変更'
    }
  }

  function HistoryTabs () {
    if (instance) {
      return instance
    }

    instance = this

    this.$tabsContainer = null
    this.$tabs = null
    this.$history = $('#history')
    this.lang = document.documentElement.lang

    if (typeof translations[this.lang] === 'undefined') {
      this.lang = 'en'
    }

    this._ = translations[this.lang]

    if (this.$history.length > 0) {
      buildTabs()
      markFirstOfTypes()
    }
  }

  function buildTabs () {
    var html = ''
    var liStart = '<li><a href="javascript:;" class="'
    var liMid = 'history-tab" data-tab="'
    var liEnd = '</a></li>'

    html += '<div class="tabs"><ul>'
    html += liStart + 'selected ' + liMid + 'all">' + instance._.all + liEnd
    html += liStart + liMid + 'notes">' + instance._.notes + liEnd
    html += liStart + liMid + 'details">' + instance._.details + liEnd
    html += '</ul></div>'

    instance.$tabsContainer = $(html)
    $('#history > h3').after(instance.$tabsContainer)

    instance.$tabs = instance.$tabsContainer.find('.history-tab')
    instance.$tabs.on('click', tabClick)
  }

  function markFirstOfTypes () {
    instance.$history.find('.has-notes:first').addClass('first-of-notes')
    instance.$history.find('.has-details:first').addClass('first-of-details')
  }

  var tabClick = function () {
    var $this = $(this)
    var tab = $this.attr('data-tab')

    instance.$tabs.removeClass('selected')
    $this.addClass('selected')

    instance.$history
        .removeClass('hide-details')
        .removeClass('hide-notes')

    if (tab === 'notes') {
      instance.$history.addClass('hide-details')
    } else if (tab === 'details') {
      instance.$history.addClass('hide-notes')
    }
  }

  return HistoryTabs
}())
