var PurpleMine = PurpleMine || {};

PurpleMine.SidebarToggler = (function()
{
  "use strict";

  var self;
  var translations = {
    en: {
      toggler: "Toggle sidebar"
    },
    pl: {
      toggler: "Pokaż/ukryj panel boczny"
    }
  };

  function SidebarToggler()
  {
    if (self)
    {
      return self;
    }

    self = this;

    this.sidebarVisible = true;
    this.sidebarHiding  = null;
    this.$toggler       = null;
    this.$main          = $("#main");
    this.$sidebar       = $("#sidebar");
    this.lang           = document.documentElement.lang;

    if (typeof translations[this.lang] === "undefined")
    {
      this.lang = "en";
    }

    this._ = translations[this.lang];

    // Fix issue with context menu position
    if ("relative" === this.$main.css("position"))
    {
      $("#context-menu").appendTo("#wrapper3");
    }

    handleSidebar();
  }

  function handleSidebar()
  {
    if (window.localStorage)
    {
      self.sidebarVisible =
        null === localStorage.getItem("PurpleMine:sidebarHidden");
    }

    if (self.$sidebar.length > 0 &&
      false === self.$main.hasClass("nosidebar"))
    {
      buildButton();
      bindKeyHandler();

      if (false === self.sidebarVisible)
      {
        self.hideSidebar(true);
      }
    }
  }

  function bindKeyHandler()
  {
    var body = document.getElementsByTagName("body")[0];

    window.onkeydown = function(event)
    {
      if (body === event.target && 83 === event.keyCode && // "s"
        false === event.ctrlKey && false === event.altKey &&
        false === event.shiftKey)
      {
        self.toggleSidebar();
      }
    };
  }

  function buildButton()
  {
    var togglerClass = "sidebar-toggler",
      togglerHtml;

    togglerHtml = "<a href=\"javascript:;\" class=\"" + togglerClass +
            "\" title=\"" + self._.toggler + "\"></a>";
    self.$toggler = $(togglerHtml);

    self.$main.append(self.$toggler);
    self.$toggler.on("click", self.toggleSidebar);
  }

  SidebarToggler.prototype.toggleSidebar = function()
  {
    if (self.sidebarVisible)
    {
      self.hideSidebar();
    }
    else
    {
      self.showSidebar();
    }
  };

  SidebarToggler.prototype.hideSidebar = function(immediate)
  {
    if (true === immediate)
    {
      this.$sidebar.addClass("sidebar-hiding sidebar-hidden");
    }
    else
    {
      this.$sidebar.addClass("sidebar-hiding");
      this.sidebarHiding = setTimeout(function sidebarTimeout()
      {
        self.$sidebar.addClass("sidebar-hidden");
      }, 500);
    }

    this.$toggler.addClass("sidebar-hidden");
    this.sidebarVisible = false;

    if (window.localStorage)
    {
      localStorage.setItem("PurpleMine:sidebarHidden", "x");
    }
  };

  SidebarToggler.prototype.showSidebar = function()
  {
    clearTimeout(this.sidebarHiding);

    self.$sidebar.removeClass("sidebar-hidden");
    setTimeout(function sidebarTimeout()
    {
      self.$sidebar.removeClass("sidebar-hiding");
    }, 50);

    this.$toggler.removeClass("sidebar-hidden");
    this.sidebarVisible = true;

    if (window.localStorage)
    {
      localStorage.removeItem("PurpleMine:sidebarHidden");
    }
  };

  return SidebarToggler;
}());
