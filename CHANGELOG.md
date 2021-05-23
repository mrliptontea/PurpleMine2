v2.15.0 (2021-05-23):

* Updated styles for Redmine 4.2.
* Merged #225 (via #228): improved documents styles.

v2.14.0 (2021-01-27):

* Merged #220: fixed drag & drop behavior.

v2.13.0 (2020-09-26):

* Replaced node-sass with sass.
* Resolved issues with `inline-svg` function in Node 14.x.

v2.12.1 (2020-08-11):

* Fixed #204 - missing context menu icons in Easy WBS plugin.

v2.12.0 (2020-08-01):

* Fixed #196 and #199: text wrapping in certain column types.
* Merged #203: fixed pagination overlapping wiki content.

v2.11.0 (2020-05-08):

* Fixed #179: full screen mode issues when using redmine_wysiwyg_editor plugin.
* Fixed #177: changed styling for icon-only buttons to resolve weird behavior on hover.
* Added `$icon-width` variable.
* Added margin in some places like after buttons, avatars.
* Changed tooltip background to black.
* Changed top menu styles.
* Restored `$color-priorities` variable, `false` by default.
* Added `parse-length($value, $side)` function for extracting length/width from margin/padding/border.
* Fixed checkbox cell padding when issue table borders are enabled.
* Added table icon to jstoolbar styles.
* Refactored icons code.
* Improved styles for [RedmineUP](https://www.redmineup.com/pages/plugins) plugins (Agile, Checklists, CRM, Tags).
* Improved vertical alignment of certain form elements.
* Improved styles for sortable elements.
* Added new `.inline-flex` class.
* Improved styles for [Redmine Banner](https://github.com/akiko-pusu/redmine_banner) plugin.

v2.10.2 (2020-04-09):

* Fixed #175: couldn't edit note when it's URL target.
* Improved styling of some inline edit forms.

v2.10.1 (2020-04-06):

* Fixed #160: highlight color in jQuery UI menu, most notably in checklist plugin.

v2.10.0 (2020-04-05):

* Fixed #172 Collapsed/expended icons for completed versions.
* Fixed #171 "Display" label in Gantt option.
* Fixed #170 radio buttons in projects options.
* Fixed #169 styles in the spent time tab.
* Fixed #164: apply responsive overrides more generally
* Fixed #159: wrapping long text in issue attributes.
* Fixed #150: styling for query totals and expander in Agile plugin.
* Fixed #148: full screen view for Dashboard plugin.
* Fixed a "timeline" positioning in issue notes/changes.
* Changed lightness of shades 50 and 950.
* Changed loader styles.
* Changed rouge syntax highlighter color scheme.

v2.9.1 (2020-02-22):

* Merged fix #155: $.load function removed from jQuery.
* Fixed badge positioning in roadmap screen.

v2.9.0 (2020-01-30):

* Fixed #141: improved styling for issue edit form.
* Fixed #142: TOC assumes `left` by default, also added new variables to control how it looks.
* Fixed #143: `$main-menu-bg-hover` is now being used.
* Resolved #144: added `$main-menu-bg-active` variable.
* Resolved #145: added `$table-list-header-bg` variable.
* Fixed #147: corrected forum edit attached files icon.
* Fixed #153: improved styling for `label.block`.
* Added styling for clear query button.
* Improved responsive sidebar menu layout.

v2.8.0 (2019-08-13):

* Resolved #132: fixed spacing for headers on roadmap pages.
* Merged fix #136: broken layout with large image attachment.

v2.7.0 (2019-06-13):

* Resolved #124: added support for [issue-id](http://projects.andriylesyuk.com/projects/issue-id/) plugin.

v2.6.0 (2019-06-13):

* Resolved #121: added support for [redmine_wiki_page_tree](https://github.com/ledsun/redmine_wiki_page_tree) plugin.

v2.5.0 (2019-06-05):

* Fixed #117, #118 and added many improvements to the responsive layout.

v2.4.0 (2019-06-02):

* Synchronized most application styles with Redmine's default theme.
* Fixed #115: color overdue date in issue lists.

v2.3.1 (2019-05-09):

* Fixed #112: improved highlight contrast in text diffs.

v2.3.0 (2019-05-09):

* Fixed #107: nested lists in the sidebar via [Additionals](https://www.redmine.org/plugins/additionals) plugin.

v2.2.0 (2019-04-09):

* Fixed #101, #102: tooltip positioning

v2.1.1 (2019-03-23):

* Fixed sidebar toggler style when fixed layout is enabled
* Fixed contextual dropdown padding in mobile view

v1.11.0 (2019-03-22):

* Backported fixes from v2:
  * Fixed #89: [RM+ custom menu](http://rmplus.pro/en/redmine/plugins/custom_menu) breaking the layout
  * Fixed #90: regression in some sidebar layouts
  * Fixed #93: Agile chart expanding indefinitely when Additional "Go to top" link is enabled
  * Fixed #94: subtasks indentation
  * Fixed styling of some flash messages
  * Fixed horizontal scrollbar appearing when sidebar is on the right
  * Fixed footer being mispositioned in Agile charts
  * Fixed positioning of admin menu icons for some plugins
  * Improved support for [Redmine Tags](https://www.redmineup.com/pages/plugins/tags) plugin
  * Added separator line between news on the news list
  * Improved Redmine 4.0 compatibility
  * Updated Font Awesome icons to 4.7.0

v2.1.0 (2019-03-22):

* Added CSS grid layout support (off by default because of IE support)
* Fixed styling of some flash messages
* Fixed horizontal scrollbar appearing when sidebar is on the right
* Fixed footer being mispositioned in Agile charts
* Improved support for [Redmine Tags](https://www.redmineup.com/pages/plugins/tags) plugin
* Fixed positioning of admin menu icons for some plugins
* Added separator line between news on the news list
* Fixed #93: Agile chart expanding indefinitely when Additional "Go to top" link is enabled
* Fixed #94: subtasks indentation
* Improved progress bar styling, avatar positioning, WYSIWYG button styling, wiki preview font sizes

v2.0.2 (2019-03-20):

* Fixed #89: [RM+ custom menu](http://rmplus.pro/en/redmine/plugins/custom_menu) breaking the layout

v2.0.1 (2019-03-17):

* Fixed #90: regression in some sidebar layouts
* Removed reduntant `abbr[title]` styles

v2.0 (2019-03-13):

* Refreshed, modernized look & feel
* Added priority icons
* Removed `$color-priorities` setting and styles
* Improved Redmine 4.0 compatibility
* Updated Font Awesome icons to 4.7.0

v1.10.0 (2019-03-12):

* Fixed #86: added support for redmine_hearts plugin

v1.9.0 (2019-03-01):

* Fixed #42: override some styles from [RM+](http://rmplus.pro) plugins
* Merged #43: fixes for Redmine 3.3.2.devel
* Support for responsive menu and further changes for Redmine 3.3.2.devel (fixes #26)
* Improved styles for custom flash messages in wiki content (e.g. for [WikiNG](http://www.redmine.org/plugins/wiking) plugin)
* Introduce project tiles on projects list page (enabled by default, can be switched off by setting `$use-project-tiles` to `false`)
* Fixed #44: adjust width of the label column on the login form
* Merged #49: German translations
* Fixed #50: printed content on second page onwards was missing in Firefox
* Fixed #51: a plugin dropdown in top menu could be too narrow
* Fixed #52: delete watcher icon in the sidebar was missing
* Fixed #54: long checkbox lists will be scrollable
* Fixed #62: anchors won't scroll the page
* Fixed #69: fixed "remember me" checkbox layout on login page
* Fixed #78: files not visible on list in wiki when there is a lot of them
* Updated dependencies
* Fixed #81: top watchers checkboxes were not visible on Firefox
* Removed `checkbox` and `radio` mixins in favour of `check`
* Fixed #83: editor tabs layout in Redmine 4.0

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
