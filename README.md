# PurpleMine 2

A free Redmine theme for modern browsers.

![Screenshot](https://github.com/HolonGlobe/PurpleMine2/raw/master/screenshots/issues-list.png)

Compatible with Redmine 2.5+ and browsers: IE9+, latest Firefox and Google Chrome (others were not tested).

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

To install PurpleMine, just download [.zip](https://github.com/HolonGlobe/PurpleMine2/archive/master.zip) and unpack it to your Redmine's `public/themes` folder.

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

Regrettably, optional file include is not possible in SASS, so I would recommend creating a new file, e.g. `_my_variables.scss` and importing it a the beginning of the `application.scss` file. That way all the variables with the `!default` flag could be overridden.

## Changelog

Latest (master):

+ Introduced option `$wiki-page-more-vertical-space` (by default `true`) to improve wiki pages' readability even more
* Fixed bottom margin of `pre` tag
+ Added a few helper classes from Bootstrap:
    * `wiki-pager` - acts like Bootstrap's `pager`. Add `wiki-pager--aligned` modifier to align links to the sides.
    * `lead` for paragraphs that should stand out.
    * `text-left`, `text-right`, `text-center`, `text-justify`, `text-nowrap` alignment classes.
    * `text-lowercase`, `text-uppercase`, `text-capitalize` text transformation classes.
    * `text-muted`, `text-primary`, `text-success`, `text-info`, `text-warning`, `text-danger` for setting color of the text.
    * `bg-primary`, `bg-success`, `bg-info`, `bg-warning`, `bg-danger` for setting color of the background.

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

## License

[WTFPL](http://www.wtfpl.net/)

[SCSS]: http://sass-lang.com/
[normalize.css]: https://github.com/necolas/normalize.css
[bootstrap-sass]: https://github.com/twbs/bootstrap-sass
[redmine_backlogs]: https://github.com/backlogs/redmine_backlogs
[redmine_time_tracker]: https://github.com/hicknhack-software/redmine_time_tracker
[redmine_crm_people]: http://www.redminecrm.com/projects/people/