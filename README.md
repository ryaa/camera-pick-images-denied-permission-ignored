# Capacitor Android 5.7.1 app crash reproduction project

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

## Reproducing the crash
Build and run the app on an Android device. The app will crash with the following error message in the logcat output:
```
2024-03-04 17:57:05.341 21704-21752 cr_AwBgThreadClient     io.ionic.starter                     E  Client raised exception in shouldInterceptRequest. Re-throwing on UI thread.
2024-03-04 17:57:05.342 21704-21704 cr_AwBgThreadClient     io.ionic.starter                     E  The following exception was raised by shouldInterceptRequest:
2024-03-04 17:57:05.343 21704-21704 AndroidRuntime          io.ionic.starter                     D  Shutting down VM
2024-03-04 17:57:05.353 21704-21704 AndroidRuntime          io.ionic.starter                     E  FATAL EXCEPTION: main
                                                                                                    Process: io.ionic.starter, PID: 21704
                                                                                                    java.lang.IndexOutOfBoundsException: No group 1
                                                                                                    	at java.util.regex.Matcher.group(Matcher.java:589)
                                                                                                    	at java.util.regex.Matcher.appendEvaluated(Matcher.java:917)
                                                                                                    	at java.util.regex.Matcher.appendReplacementInternal(Matcher.java:890)
                                                                                                    	at java.util.regex.Matcher.appendReplacement(Matcher.java:1040)
                                                                                                    	at java.util.regex.Matcher.replaceFirst(Matcher.java:1468)
                                                                                                    	at java.lang.String.replaceFirst(String.java:2757)
                                                                                                    	at com.getcapacitor.JSInjector.getInjectedStream(JSInjector.java:75)
                                                                                                    	at com.getcapacitor.WebViewLocalServer.handleLocalRequest(WebViewLocalServer.java:411)
                                                                                                    	at com.getcapacitor.WebViewLocalServer.shouldInterceptRequest(WebViewLocalServer.java:201)
                                                                                                    	at com.getcapacitor.BridgeWebViewClient.shouldInterceptRequest(BridgeWebViewClient.java:23)
                                                                                                    	at WV.g6.a(chromium-TrichromeWebViewGoogle6432.aab-stable-616717833:86)
                                                                                                    	at org.chromium.android_webview.AwContentsBackgroundThreadClient.shouldInterceptRequestFromNative(chromium-TrichromeWebViewGoogle6432
```