var PurpleMine = PurpleMine || {};

PurpleMine.HistoryTabs = (function()
{
  "use strict";

  var self;
  var translations = {
    en: {
      all    : "All",
      notes  : "Notes",
      details: "Changes"
    },
    pl: {
      all    : "Wszystko",
      notes  : "Notatki",
      details: "Zmiany"
    }
  };

  function HistoryTabs()
  {
    if (self)
    {
      return self;
    }

    self = this;

    this.$tabsContainer = null;
    this.$tabs          = null;
    this.$history       = $("#history");
    this.lang           = document.documentElement.lang;

    if (typeof translations[this.lang] === "undefined")
    {
      this.lang = "en";
    }

    this._ = translations[this.lang];

    if (this.$history.length > 0)
    {
      buildTabs();
      markFirstOfTypes();
    }
  }

  function buildTabs()
  {
    var html = "",
      liStart = "<li><a href=\"javascript:;\" class=\"",
      liMid = "history-tab\" data-tab=\"",
      liEnd = "</a></li>";

    html += "<div class=\"tabs\"><ul>";
    html += liStart + "selected " + liMid + "all\">" + self._.all + liEnd;
    html += liStart + liMid + "notes\">" + self._.notes + liEnd;
    html += liStart + liMid + "details\">" + self._.details + liEnd;
    html += "</ul></div>";

    self.$tabsContainer = $(html);
    $("#history > h3").after(self.$tabsContainer);

    self.$tabs = self.$tabsContainer.find(".history-tab");
    self.$tabs.on("click", tabClick);
  }

  function markFirstOfTypes()
  {
    self.$history.find(".has-notes:first").addClass("first-of-notes");
    self.$history.find(".has-details:first").addClass("first-of-details");
  }

  var tabClick = function()
  {
    var $this = $(this),
      tab = $this.attr("data-tab");

    self.$tabs.removeClass("selected");
    $this.addClass("selected");

    self.$history
        .removeClass("hide-details")
        .removeClass("hide-notes");

    if ("notes" === tab)
    {
      self.$history.addClass("hide-details");
    }
    else if ("details" === tab)
    {
      self.$history.addClass("hide-notes");
    }
  };

  return HistoryTabs;
}());
