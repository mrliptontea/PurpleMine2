var PurpleMine = PurpleMine || {};

PurpleMine.TopMenuCollapse = (function()
{
    "use strict";

    var self; // Make it work for browsers without Function.prototype.bind
    var translations = {
        en: {
            toggler: "Expand/collapse top menu"
        },
        pl: {
            toggler: "Zwiń/rozwiń górne menu"
        }
    };

    function TopMenuCollapse()
    {
        self = this;

        this.topMenuCollapsed = true;
        this.$toggler         = null;
        this.$topMenu         = $("#top-menu");
        this.lang             = document.documentElement.lang;

        if (typeof translations[this.lang] === "undefined")
        {
            this.lang = "en";
        }

        this._ = translations[this.lang];

        if ("none" !== this.$topMenu.css("maxHeight"))
        {
            if (window.localStorage)
            {
                this.topMenuCollapsed =
                    null === localStorage.getItem("PurpleMine:topMenuExpanded");
            }

            this.buildToggleButton();

            if (false === this.topMenuCollapsed)
            {
                this.expandTopMenu(true);
            }
        }
    }

    TopMenuCollapse.prototype.buildToggleButton = function()
    {
        var togglerClass = "top-menu-toggler",
            togglerHtml;

        togglerHtml = "<a href=\"javascript:;\" class=\"" + togglerClass +
                        "\" title=\"" + this._.toggler + "\"></a>";
        this.$toggler = $(togglerHtml);

        this.$topMenu.prepend(this.$toggler);
        this.$toggler.on("click", this.toggleTopMenu);
    };

    TopMenuCollapse.prototype.toggleTopMenu = function()
    {
        if (self.topMenuCollapsed)
        {
            self.expandTopMenu();
        }
        else
        {
            self.collapseTopMenu();
        }
    };

    TopMenuCollapse.prototype.expandTopMenu = function()
    {
        this.$topMenu.addClass("expanded");
        this.$toggler.addClass("expanded");
        this.topMenuCollapsed = false;

        if (window.localStorage)
        {
            localStorage.setItem("PurpleMine:topMenuExpanded", "x");
        }
    };

    TopMenuCollapse.prototype.collapseTopMenu = function()
    {
        this.$topMenu.removeClass("expanded");
        this.$toggler.removeClass("expanded");
        this.topMenuCollapsed = true;

        if (window.localStorage)
        {
            localStorage.removeItem("PurpleMine:topMenuExpanded");
        }
    };

    return TopMenuCollapse;
}());
