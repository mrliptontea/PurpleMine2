## PurpleMine2 Cloudogu Redmine Theme
This repository contains the theme used in the cloudogu redmine dogu.

:warning: To enhance the upgrade compatibility please do not modify the source of the base theme. Basic changes can be made in _custom-variables.scss.

## Development
`docker run -d --name rm-theme -p3000:3000 -v $REPOSITORY_SOURCE:/usr/src/redmine/public/themes redmine:4.0.5`

`npm install`

`npm run watch`

## Build / CSS Generierung

`npm run build`

## Further details about PurpleRedmine2

![The MIT License](https://img.shields.io/badge/license-MIT-584492.svg) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Build Status](https://img.shields.io/endpoint.svg?url=https://actions-badge.atrox.dev/mrliptontea/PurpleMine2/badge&label=lint&logo=none)](https://actions-badge.atrox.dev/mrliptontea/PurpleMine2/goto) [![Issues](https://img.shields.io/github/issues/mrliptontea/PurpleMine2.svg)](https://github.com/mrliptontea/PurpleMine2/issues)

---

Compatible with Redmine 3.0+ and browsers: IE10+/Edge, latest Firefox and Google Chrome (others were not tested).

It's written in [SCSS]. It uses [normalize.css] and benefits from some parts of [Bootstrap][bootstrap-sass] like mixins, structure, and stuff.

## Main features

* Bigger, easier to read fonts,
* Github-like wiki content look,
* Sidebar moved to the left for better ergonomy,
* Coloring trackers links (on lists, issue pages and even in the wiki content),
* Highlighting issues priority on the list and on the issue page,
* Toggling sidebar visibility,
* Easy to customize via variables.

[SCSS]: http://sass-lang.com/
[normalize.css]: https://github.com/necolas/normalize.css
[bootstrap-sass]: https://github.com/twbs/bootstrap-sass
[redmine_backlogs]: https://github.com/backlogs/redmine_backlogs
[redmine_time_tracker]: https://github.com/hicknhack-software/redmine_time_tracker
[redmine_crm_people]: http://www.redminecrm.com/projects/people/
[stuff_to_do]: https://github.com/raafael911/stuff_to_do_plugin
