# PurpleMine 2

A free Redmine theme for modern browsers.

![Screenshot](https://github.com/HolonGlobe/PurpleMine2/raw/master/screenshots/issues-list.png)

Compatible with Redmine 2.5+ and browsers: IE8+, latest Firefox and Google Chrome (others where not tested).

It's written in [SASS] (SCSS to be precise). It uses [normalize.css] and benefits from some parts of [Bootstrap][bootstrap-sass] like mixins, structure and stuff.

## Main features

* Bigger, easier to read fonts
* Wiki content with Github-ish style
* Sidebar moved to the left for better ergonomy (it's customizable via `_variables.scss`)
* Coloring trackers links (on lists, issue pages and even in the wiki content)
* Highlighting issues priority on the list and on the issue page

## How install it

To install PurpleMine, just download [.zip](https://github.com/HolonGlobe/PurpleMine2/archive/master.zip) and unpack it to your Redmine's `/public/themes` folder.

Then go to Redmine > Administration > Settings > Display and select PurpleMine2 from the list and save the changes.

## Plugins

This theme also features new look for [Redmine Backlogs][redmine_backlogs] plugin.

To install it, simply copy and overwrite files in `plugin_assets/redmine_backlogs/stylesheets` or in `plugins/redmine_backlogs/assets/stylesheets` if it's not installed yet.

## License

[WTFPL](http://www.wtfpl.net/)

[SASS]: http://sass-lang.com/
[normalize.css]: https://github.com/necolas/normalize.css
[bootstrap-sass]: https://github.com/twbs/bootstrap-sass
[redmine_backlogs]: https://github.com/backlogs/redmine_backlogs