# PurpleMine 2

A free Redmine theme for modern browsers.

![The MIT License](https://img.shields.io/badge/license-MIT-584492.svg?style=flat-square) [![Release](https://img.shields.io/github/release/mrliptontea/PurpleMine2.svg?style=flat-square)](https://github.com/mrliptontea/PurpleMine2/releases) [![Issues](https://img.shields.io/github/issues/mrliptontea/PurpleMine2.svg?style=flat-square)](https://github.com/mrliptontea/PurpleMine2/issues) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

---

![Screenshot](https://github.com/mrliptontea/PurpleMine2/raw/master/screenshots/issues-list.png)

Compatible with Redmine 2.5+ and browsers: IE10+/Edge, latest Firefox and Google Chrome (others were not tested).

It's written in [SCSS]. It uses [normalize.css] and benefits from some parts of [Bootstrap][bootstrap-sass] like mixins, structure, and stuff.

## Main features

* Bigger, easier to read fonts,
* Github-like wiki content look,
* Sidebar moved to the left for better ergonomy,
* Coloring trackers links (on lists, issue pages and even in the wiki content),
* Highlighting issues priority on the list and on the issue page,
* Toggling sidebar visibility,
* Easy to customize via variables.

## How install it

To install PurpleMine, just download [.zip](https://github.com/mrliptontea/PurpleMine2/archive/master.zip) and unpack it to your Redmine's `public/themes` folder.

Then go to Redmine > Administration > Settings > Display and select PurpleMine2 from the list and save the changes.

## Plugins

This theme also features a new look for [Redmine Backlogs][redmine_backlogs] plugin. To install it, simply copy stylesheets from `PurpleMine2/plugins/redmine_backlogs` and overwrite files in `{redmine}/plugins/redmine_backlogs/assets/stylesheets` and restart Redmine.

Also, [Redmine Time Tracker][redmine_time_tracker] and [Redmine People][redmine_crm_people] plugins should look nice with PurpleMine.

## How to customize it

If you want to customize PurpleMine to your needs, first, make sure that you have installed [node.js](http://nodejs.org/) and `npm` is available in your terminal.

If haven't yet, you need to install grunt:

    npm install grunt-cli -g

Then, from the directory that contains PurpleMine run:

    npm install

Now all the dependencies should be ready to use. Run one more command:

    grunt watch

And now the grunt is watching for changes in files placed in `src/` folder. Just change what you need, and it'll run SASS preprocessor automatically.

Regrettably, optional file include is not possible in SASS, so I would recommend creating a new file, e.g. `src/sass/_custom-variables.scss` and importing it a the beginning of the `application.scss` file. That way all the variables with the `!default` flag could be overridden.

The path `src/sass/_custom-variables.scss` is added to `.gitignore` so it should make upgrading PurpleMine with keeping your changes rather painless, given that the only thing you changed in PurpleMine's source was adding this one line with `@import "custom-variables";`.

If you need to customize styles for [Redmine Backlogs][redmine_backlogs] remember to include your `_custom-variables.scss` in `src/sass/plugins/redmine_backlogs/_common.scss`.

## Changelog

Latest (master):

* Fixed #42: override some styles from [RM+](http://rmplus.pro) plugins

v1.8.0 (2016-11-20):

* Fixed #19: missing text wrapping for long text custom fields
* Fixed #20: applied Font Awesome font-family for icons in Time Tracker overview
* Fixed duplicated pencil icon for Description in issue form in Redmine 3.1.2+
* Fixed #21: added styling for compatibility with layout changes in Redmine 3.2.0
* Fixed #23: set width for progress bars
* Fixed #25: proper styles for pagination
* Fixed #28: correct icon will be displayed for users that cannot edit notes in journal
* Fixed #30: styles will now compile with latest Sass
* Fixed #32, #33: improve @shawndibble's styles for new main menu styles in Redmine 3.3
* Various small visual tweaks
* Fixed #34: project breadcrumbs in the header should wrap nicely
* Fixed #35: `.icon-only` class should now display only icons, buttons with icons should de displayed correctly with Font-Awesome disabled
* Fixed #36: npm dependencies can be installed on production environments + update grunt to its latest version
* Fixed #37: added support for drag'n'drop re-ordering in issue statuses, roles, and trackers settings
* Fixed #38: corrected z-index for dropdown new item menu on backlogs page (thanks to @futaz, see PR #39)
* Changed indentation to 2 spaces (to match with Redmine's coding style)
* Introduced [autoprefixer](https://github.com/postcss/autoprefixer) via [PostCSS](http://postcss.org)
* Updated [scss-lint](https://github.com/brigade/scss-lint) rules
* Added [JavaScript Standard Style](http://standardjs.com)

v1.7.2 (2015-10-12):

* Fixed `.pagination` float in project members settings
* Lists' cells are aligned to center by default (as in Redmine's default theme)

v1.7.1 (2015-10-10):

+ Improved styling for [Stuff To Do][stuff_to_do] plugin

v1.7.0 (2015-09-25):

* Added styles for optgroup (Firefox only)
* Fixed #13: #header was missing clearfix and was breaking the layout is some cases
* Coloring issue's title instead of link in Gantt diagram for overdue issues
* Updated npm packages: grunt-sass from 0.18.0 to 1.0.0 and grunt-contrib-uglify 0.7.0 to 0.9.1
* Use flexbox layout by default (can be changed by setting `$flexbox-layout` to `false`)
* Fixed animation issue when showing sidebar
* Slightly modified buttons' style
* Few visual tweaks: nicer shadows, improved datepickers layout
+ Configurable list borders and highlighting of hovered and even/odd rows
+ Introduce `$pagination-padding-` variables and make pagination buttons' height equal to buttons by default
* Fixed #16: remove `white-space: nowrap` from external links to prevent breaking the page with flexbox layout
* Fixed colored trackers in tooltips in Backlogs plugin
* Fixed broken codebutton modal after making buttons wider
* Changed the license to MIT

v1.6.0 (2015-06-10):

* Fixed #8: Setting `$top-menu-collapse` to `true` will enable script allowing to toggle if top menu should be collapsed (no wrapping) or expanded (wrapped, with auto height)
+ Header matching current URL fragment will have `#` prepended
+ Introduced `$font-weight-normal` and `$font-weight-bold` variables to give better control on the appearance of text with custom fonts
* Fixed #9: Added `$main-menu-collapse` and applied the same logic as in #8
* Fixed #12: Removed `display: block` from issue's subject link to allow context menu to popup upon right click next to subject
* Resolved #11: Company logo can be added to the header

v1.5.0 (2015-04-15):

* Fixed #5: Added default style for colored issue links.
* Introduced `$tracker-colors-map` and removed `$tracker-X-bg` variables.
  See d220db1 comments for more details.
* Fixed #6: Added default padding for table cells.

v1.4.1 (2015-04-14):

* Fixed #3: Closed tasks will be more appreciable.

v1.4.0 (2015-04-10):

+ Introduced option `$wiki-page-more-vertical-space` (by default `true`) to improve wiki pages' readability even more
* Fixed bottom margin of `pre` tag
+ Added a few helper classes from Bootstrap
* WYSIWYG's icons will squeeze a little bit on smaller screens
* Images in headers will be aligned to the middle vertically
+ Introduced `text-normal` class for resetting font's weight
+ Added class `toc-active-prev` that will "highlight" TOC as "active".
* Fixed #2: Make sure that `.sort` with Font Awesome icons won't have background image
* Fixed attachments div's layout for wiki pages

For more details, see [release v1.4.0](https://github.com/mrliptontea/PurpleMine2/releases/tag/v1.4.0)

v1.3.0 (2015-04-01):

* Backlogs: make it possible to click on empty field
* Corrected issue form columns widths so they will be equal in all fieldsets
* Changesets will look similar to issue's journal
+ Improved revision page layout and added Font Awesome icons
+ Improved file content view
* Fixed #1: Font Awesome icons will no longer break plugins' icons
+ Introduced styles for [People][redmine_crm_people] plugin
* Enhanced styles for activities list
* Regular buttons (e.g. `Cancel`) will look like links in dialog windows
* Fixed look of collapsible arrow in Firefox
+ Overrode Redmine's revision graph function to make it look better
+ Animated collapsible fieldsets
+ Custom image based icons changed to base64 embedded data

v1.2.0 (2015-03-03):

* Fixed .warning style
+ Coloring status on issue page (it'll look like label)
* Fixed master backlog sub-menu accessibility
+ Changed font weight to normal for sub-projects in project list
* Fixed watch task path for .js
- Removed unnecessary classes from .sidebar-toggler
* Fixed external link icon, when URI contains the word 'edit'
* Fixed wiki page headers links font-size
+ Changed some trackers default colors
+ Bolded user name on issue page if it's current user
* Issue's journal appearance changed once again
+ Some improvements in wiki formatting
+ Introduced HistoryTabs for filtering issue journals
* Improved issue page styles and adjusted default priority colors
* Backlogs: added delay before hiding backlog menu
* Changed ancestor project name in top to equal font size, but different weight
* Fixed context menu position regression introduced by sidebar toggle

v1.1.0 (2015-02-15):

+ Changed issue's journal appearance
+ jQuery UI menus look improved
+ Removed box-shadow from boxes
+ Bumped grunt-sass version
+ Toggling sidebar visibility
+ Recompressed images
+ Changelog added

v1.0.0 (2015-02-06):

Initial version

[SCSS]: http://sass-lang.com/
[normalize.css]: https://github.com/necolas/normalize.css
[bootstrap-sass]: https://github.com/twbs/bootstrap-sass
[redmine_backlogs]: https://github.com/backlogs/redmine_backlogs
[redmine_time_tracker]: https://github.com/hicknhack-software/redmine_time_tracker
[redmine_crm_people]: http://www.redminecrm.com/projects/people/
[stuff_to_do]: https://github.com/raafael911/stuff_to_do_plugin
