import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.latest',
  appName: 'latest-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
