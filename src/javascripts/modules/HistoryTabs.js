var PurpleMine = PurpleMine || {};

PurpleMine.HistoryTabs = (function()
{
    "use strict";

    var self; // Make it work for browsers without Function.prototype.bind
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
        self = this;

        this.$tabsContainer = null;
        this.$tabs          = null;
        this.$history       = $("#history");
        this.lang           = document.documentElement.lang;

        if ("undefined" === translations[this.lang])
        {
            this.lang = "en";
        }

        this._ = translations[this.lang];

        if (this.$history.length > 0)
        {
            this.buildTabs();
            this.markFirstOfTypes();
        }
    }

    HistoryTabs.prototype.buildTabs = function()
    {
        var html = "",
            liStart = "<li><a href=\"javascript:;\" class=\"",
            liMid = "history-tab\" data-tab=\"",
            liEnd = "</a></li>";

        html += "<div class=\"tabs\"><ul>";
        html += liStart + "selected " + liMid + "all\">" + this._.all + liEnd;
        html += liStart + liMid + "notes\">" + this._.notes + liEnd;
        html += liStart + liMid + "details\">" + this._.details + liEnd;
        html += "</ul></div>";

        this.$tabsContainer = $(html);
        $("#history > h3").after(this.$tabsContainer);

        this.$tabs = this.$tabsContainer.find(".history-tab");
        this.$tabs.on("click", this.tabClick);
    };

    HistoryTabs.prototype.markFirstOfTypes = function()
    {
        this.$history.find(".has-notes:first").addClass("first-of-notes");
        this.$history.find(".has-details:first").addClass("first-of-details");
    };

    HistoryTabs.prototype.tabClick = function()
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
