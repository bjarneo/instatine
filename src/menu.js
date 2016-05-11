'use strict';

const { dialog, shell, Menu } = require('electron');

const tpl = [
    {
        label: 'View',
        submenu: [
            {
                label: 'Copy link',
                accelerator: 'CmdOrCtrl+L',
                click: (item, focusedWindow) => {
                    dialog.showMessageBox(focusedWindow, {
                        type: 'none',
                        buttons: ['close'],
                        title: 'Fetch current URL',
                        message: focusedWindow.webContents.getURL()
                    });
                }
            },
            {
                label: 'Go back',
                accelerator: 'CmdOrCtrl+backspace',
                click: (item, focusedWindow) => {
                    if (focusedWindow.webContents.canGoBack()) {
                        focusedWindow.webContents.goBack();
                    }
                }
            },
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: (item, focusedWindow) => {
                    if (focusedWindow) {
                        focusedWindow.webContents.reloadIgnoringCache();
                    }
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Website',
                click() {
                    shell.openExternal('https://github.com/bjarneo/instatine');
                }
            }
        ]
    }
];

module.exports = Menu.buildFromTemplate(tpl);
