## Install the dependencies
```bash
npm install
```

### Install capacitor / electron: 
```shell
npm install @capacitor/core @capacitor/cli
npm install --save-dev @electron-forge/cli
```

ingresa al proyecto por consola: 

* version escritorio y web
```shell
cd admin 
```

* version móvil y web
```shell
cd app
```

#### segun el sistema operativo donde lo corran:

# LINUX

Linux web admin:  
```shell
npx quasar dev
```
Linux application admin desktop:  
```shell
npx quasar dev -m electron  -T linux
```
Linux application admin móvil:  
```shell
npx quasar dev -m capacitor -T android --ide
```
add line in quasar.conf.js:

```json
    bin: {
      linuxAndroidStudio: "/home/shernaji/Escritorio/android-studio/bin/studio.sh",
    },
```

add:

```shell
  npx cap add android
  npx cap add ios
  npx cap add electron
```

# MAC OS

Mac web admin: 
```shell
quasar dev
```
Mac application admin desktop: 
```shell
quasar dev -m electron -T darwin
```

# WINDOWS

Windows web admin: 
```shell
quasar dev
```
windows application admin desktop: 
```shell
quasar dev -m electron -T win32
```






### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
