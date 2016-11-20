var PurpleMine = PurpleMine || {};

PurpleMine.MenuCollapse = (function()
{
  "use strict";

  var self;
  var translations = {
    en: {
      topMenuToggler : "Expand/collapse top menu"
    },
    pl: {
      topMenuToggler : "Zwiń/rozwiń górne menu"
    }
  };

  function MenuCollapse()
  {
    if (self)
    {
      return self;
    }

    self = this;

    this.lang = document.documentElement.lang;

    if (typeof translations[this.lang] === "undefined")
    {
      this.lang = "en";
    }

    this._ = translations[this.lang];

    this.menus = {
      top: {
        $el: $("#top-menu")
      }
    };

    for (var menu in this.menus)
    {
      if (this.menus.hasOwnProperty(menu) &&
        this.menus[menu].$el.length > 0)
      {
        handleMenu(menu);
      }
    }
  }

  function handleMenu(menu)
  {
    if ("none" === self.menus[menu].$el.css("maxHeight"))
    {
      return false;
    }

    self.menus[menu].collapsed = true;

    if (window.localStorage)
    {
      self.menus[menu].collapsed =
        null === localStorage.getItem(getMenuStorageKey(menu));
    }

    buildToggleButton(menu);

    if (false === self.isCollapsed(menu))
    {
      self.expandMenu(menu);
    }
  }

  function getMenuStorageKey(menu)
  {
    return "PurpleMine:" + menu + "MenuExpanded";
  }

  function buildToggleButton(menu)
  {
    var togglerClass = menu + "-menu-toggler",
      togglerLabel = self._[menu + "MenuToggler"],
      togglerHtml;

    togglerHtml = "<a href=\"javascript:;\" class=\"" + togglerClass +
            "\" title=\"" + togglerLabel + "\"></a>";
    self.menus[menu].$toggler = $(togglerHtml);

    self.menus[menu].$el.prepend(self.menus[menu].$toggler);
    self.menus[menu].$toggler.on("click", { menu: menu }, self.toggleMenu);
  }

  MenuCollapse.prototype.toggleMenu = function(event)
  {
    var menu = event.data.menu || "";

    if (self.isCollapsed(menu))
    {
      self.expandMenu(menu);
    }
    else
    {
      self.collapseMenu(menu);
    }
  };

  MenuCollapse.prototype.isCollapsed = function(menu)
  {
    return this.menus[menu].collapsed;
  };

  MenuCollapse.prototype.expandMenu = function(menu)
  {
    this.menus[menu].$el.addClass("expanded");
    this.menus[menu].$toggler.addClass("expanded");
    this.menus[menu].collapsed = false;

    if (window.localStorage)
    {
      localStorage.setItem(getMenuStorageKey(menu), "x");
    }
  };

  MenuCollapse.prototype.collapseMenu = function(menu)
  {
    this.menus[menu].$el.removeClass("expanded");
    this.menus[menu].$toggler.removeClass("expanded");
    this.menus[menu].collapsed = true;

    if (window.localStorage)
    {
      localStorage.removeItem(getMenuStorageKey(menu));
    }
  };

  return MenuCollapse;
}());
