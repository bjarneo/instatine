'use strict';

const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, shell, Menu } = require('electron');
const root = path.join(path.dirname(fs.realpathSync(__filename)));

let mainWindow;

Menu.setApplicationMenu(require('./src/menu'));

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 900,
        title: 'Unofficial Instagram',
        icon: process.platform === 'linux' && path.join(__dirname, 'media', 'Icon.png')
    });

    mainWindow.loadURL('https://www.instagram.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const page = mainWindow.webContents;

    page.on('will-navigate', (e, url) => {
        if (url.indexOf('instagram.com') === -1) {
            e.preventDefault();

            shell.openExternal(url);
        }
    });

    page.on('dom-ready', () => {
        page.insertCSS(fs.readFileSync(path.join(root, 'styles.css'), 'utf8'));

        mainWindow.show();
    });

    page.on('new-window', (e, url) => {
        e.preventDefault();

        shell.openExternal(url);
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
