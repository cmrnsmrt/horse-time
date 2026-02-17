# Horse Time

![Horse Time](horse-time.png)

Minimal cross-platform electron app, that provides ___horse time___ when necessary.

**Prerequisites**
- **macOS** (for building macOS distributables). You can run the app on other platforms for development.
- **Node.js & npm** (tested with Node 18+). Install via Homebrew: `brew install node`.
- **horse**. A different horse, if wanted. One has been included to make your life easy.

**Install dependencies and run (development)**

Open a terminal and run:

```bash
cd <path to folder>/horse-time
npm install
```

Start the app for local testing (this opens the Electron window):

```bash
npm run start
```

Close the window or press the custom `x` button to quit horse time (you probably won't want to).

**Installing on macOS**

If macOS reports the app as "damaged and cannot be opened":

- Open the dmg, drag the app to the applications folder to install then run:

```bash
xattr -r -d com.apple.quarantine /Applications/horse-time.app
```

**Running on Windows**

Download the exe from the latest release, open the exe.

# Inspiration

[The horse](https://www.instagram.com/p/DUg1VTgjdRO/).