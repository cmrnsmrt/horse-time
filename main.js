const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 780,
    height: 520,
    resizable: false,
    frame: false,
    transparent: true, 
    icon: path.join(__dirname, 'assets', 'horse.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: false
    },
    autoHideMenuBar: true
  });

  win.removeMenu();
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.whenReady().then(() => {
  try {
    if (process.platform === 'darwin') {
      const icnsPath = path.join(__dirname, 'assets', 'horse.icns');
      const pngPath = path.join(__dirname, 'assets', 'horse.png');
      let img;
      // prefer .icns if exists
      const fs = require('fs');
      if (fs.existsSync(icnsPath)) img = nativeImage.createFromPath(icnsPath);
      else if (fs.existsSync(pngPath)) img = nativeImage.createFromPath(pngPath);
      if (img && !img.isEmpty()) app.dock.setIcon(img);
    }
  } catch (e) {
    // non-fatal: proceed without setting the dock icon
    console.error('Failed to set dock icon:', e);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
