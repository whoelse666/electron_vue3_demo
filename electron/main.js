const { app, BrowserWindow } = require("electron");
const path = require("path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

    mainWindow.loadURL("http://localhost:8080");
  // mainWindow.loadFile(path.resolve(__dirname, "../dist/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

// 证书的链接验证失败时，触发该事件
app.on("certificate-error", function (event, webContents, url, error, certificate, callback) {
  event.preventDefault();
  callback(true);
});
