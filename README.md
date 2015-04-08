##jspm-seed

Very basic project setup based on [Glenn Maddern's great JSPM tutorial](https://youtu.be/iukBMY4apvI).

`index.html` uses jspm module loading to load two ES6 classes which display time and place. Make sure to run `jspm install` to install all required dependencies.

`production.html` includes all development files, bundled and minified by running `jspm bundle-sfx --minify lib/main``.
