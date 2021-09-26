


Electron, capacitor ya vienen instalados ejecutar: npm install
luego: cd admin o cd app

luego lo siguiente segun el sistema operativo donde lo corran:

Linux web admin:  npx quasar dev
Linux application admin desktop:  npx quasar dev -m electron  -T linux
Linux application admin mobil:  npx quasar dev -m capacitor -T android --ide

add line in quasar.conf.js:

    bin: {
      linuxAndroidStudio: "/home/shernaji/Escritorio/android-studio/bin/studio.sh",
    },

add:

  npx cap add android
  npx cap add ios
  npx cap add electron



Mac web admin: quasar dev
Mac application admin desktop: quasar dev -m electron -T darwin

Windows web admin: quasar dev
windows application admin desktop: quasar dev -m electron -T win32






# Quasar App (Administrador)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
