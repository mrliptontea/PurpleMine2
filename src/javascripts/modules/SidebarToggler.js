var PurpleMine = PurpleMine || {};

PurpleMine.SidebarToggler = (function()
{
    "use strict";

    var self; // Make it work for browsers without Function.prototype.bind
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

        if (window.localStorage)
        {
            this.sidebarVisible =
                null === localStorage.getItem("PurpleMine:sidebarHidden");
        }

        if (this.$sidebar.length > 0 &&
            false === this.$main.hasClass("nosidebar"))
        {
            this.buildButton();
            this.bindKeyHandler();

            if (false === this.sidebarVisible)
            {
                this.hideSidebar(true);
            }
        }
    }

    SidebarToggler.prototype.bindKeyHandler = function()
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
    };

    SidebarToggler.prototype.buildButton = function()
    {
        var togglerClass = "sidebar-toggler",
            togglerHtml;

        togglerHtml = "<a href=\"javascript:;\" class=\"" + togglerClass +
                        "\" title=\"" + this._.toggler + "\"></a>";
        this.$toggler = $(togglerHtml);

        this.$main.append(this.$toggler);
        this.$toggler.on("click", this.toggleSidebar);
    };

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
        this.$sidebar
                .removeClass("sidebar-hidden", 0)
                .removeClass("sidebar-hiding");

        this.$toggler.removeClass("sidebar-hidden");
        this.sidebarVisible = true;

        if (window.localStorage)
        {
            localStorage.removeItem("PurpleMine:sidebarHidden");
        }
    };

    return SidebarToggler;
}());
