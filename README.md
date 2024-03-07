# Capacitor Android 5.7.2 Camera Plugin Permission Issue

## Prerequisities

* [Node.js](http://nodejs.org/) - install node version 20.11.1 (see the installation instructions on the site) or issue `nvm install` (if nvm is used) which will install the required node version
* [npm](https://www.npmjs.com/) - install the latest npm version 10.x (for example, 10.5.0 by issuing commands `npm install -g npm@10.5.0`)
* [Ionic CLI](http://ionicframework.com/docs/cli/install.html) - install the latest stable ionic cli version 7.2.x (for example, 7.2.0 by issuing commands `npm install -g @ionic/cli@7.2.0`)
* Install Capacitor Required Dependencies for iOS and Android Development (see https://capacitor.ionicframework.com/docs/getting-started/dependencies/)

## Instructions
## Initial setup
1. clone the source code repository
2. change to project repository directory (the directory where you cloned the repo)
3. execute the command `npm install`
4. to build and run the app an an Android device:
    - execute the command `ionic build`, then `npx cap sync android` to copy the build from www to the Android native projects and sync native plugins and then `npx cap open android` to open projects in Android Studio

## Reproducing the issue
1) Build and run this app on an Android device (I tested with Android 14).
2) Tap the "Pick Photo" button to open the photo picker.
3) When permission dialog is shown, tap "Don't Allow" to deny the permission.
NOTE: The permission dialog is dismissed and the user is allowed to choose the app to pick the photo from.
4) Select a photo from the gallery.
NOTE: The user is still allowed to select a photo even the permission has not been granted.
5) Tap the "Take Photo" button again to open the camera.
6) When permission dialog is shown, tap "Don't Allow" to deny the permission.
NOTE: The permission dialog is dismissed and the camera plugin returns the permission denied error.
NOTE: The user is not allowed to take a photo.

## Expected behavior
My assumption is that the behavior should be consistent for both the photo picker and the camera. The user should not be allowed to select a photo from the gallery if the permission has not been granted.