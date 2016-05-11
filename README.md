# instatine
#### Unofficial Instagram electron desktop application

![http://i.imgur.com/umtJjF7.png](http://i.imgur.com/umtJjF7.png)

OS X, Windows and Linux support.

## Keyboard shortcuts
Go back: `ctrl+backspace`, OSX: `cmd+backspace`  
Refresh: `ctrl+R`, OSX: `cmd+R`  
Get current url: `ctrl+L`, OSX: `cmd+L`  

## Download
[Latest release](https://github.com/bjarneo/instatine/releases/latest)

## Icon for linux
If you want an icon for the app, create a file in ~/.local/share/applications named
instatine.desktop with:
```
[Desktop Entry]
Name=HNU
Exec=/full/path/to/folder/instatine
Terminal=false
Type=Application
Icon=/full/path/to/icon/Icon.png
```
Icon you need to download: [Icon.png](https://github.com/bjarneo/instatine/blob/master/media/Icon.png)

## Manually

```bash
# Clone this repository
git clone https://github.com/bjarneo/instatine
# Go into the repository
cd instatine
# Install dependencies and run the app
npm install && npm start
```

Inspiration
------
Heavily inspired by [anatine](https://github.com/sindresorhus/anatine/) and idea based on [this discussion](https://github.com/sindresorhus/anatine/issues/28).

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.

<div>Icons made by <a href="http://www.flaticon.com/authors/coucou" title="Coucou">Coucou</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
