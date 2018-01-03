# Ionic-wp
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Build app of your Wordpress Blog with [Ionic](https://ionicframework.com/)

# Installation

You need install [WP REST API v2](http://v2.wp-api.org/) in your Wordpress Site.

```bash
npm install -g ionic cordova
git clone https://github.com/d3ltcod/Ionic-WP.git
cd Ionic-WP/
npm install
```

# Configure
To configure your app, go to src/app and open app.config.ts

If you want change colors of your app, go to src/theme and open variable.scss

# Use
## Android
```bash
ionic cordova platform add android
ionic cordova run android
```
## iOS
```bash
ionic cordova platform add ios
ionic cordova run ios
```
## Web
```bash
ionic serve
```

# Package Build
See [Ionic Package Build](https://ionicframework.com/docs/cli/package/build/) to build package.

# Requirements

* [Ionic](https://ionicframework.com/)
* [Cordova](https://cordova.apache.org/)
* [WP REST API v2](http://v2.wp-api.org/)
* [WP API ANGULAR](https://github.com/wordpress-clients/wp-api-angular)

# Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags in this repository](https://github.com/d3ltcod/ionic-wp/tags).

# Author

**Adam Alvarado Bertomeu** [d3ltcod](https://github.com/d3ltcod)

See also the list of [contributors](https://github.com/d3ltcod/ionic-wp/graphs/contributors) who participated in this project.

# License
This Ionic-WP is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
