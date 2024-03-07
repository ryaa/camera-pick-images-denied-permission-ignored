import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

// NATIVE
import { Camera, GalleryPhotos, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController
  ) { }

  public async pickPhoto(): Promise<void> {

    try {
      const galleryPhotos: GalleryPhotos = await Camera.pickImages({
        quality: 100,
        limit: 1
      });
      await this.showDialog('Photo successfully picked', 'Success');
    } catch (error) {
      console.error('Failed to pick photo', error);
      // @ts-expect-error
      await this.showDialog(`Failed to pick photo - ${error?.message}`, 'Error');
    }

  }

  public async takePhoto(): Promise<void> {

    try {
      const photo: Photo = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
        correctOrientation: true,
        source: CameraSource.Camera
      });
      await this.showDialog('Photo successfully picked', 'Success');
    } catch (error) {
      console.error('Failed to take photo(s)', error);
      // @ts-expect-error
      await this.showDialog(`Failed to take photo(s) - ${error?.message}`, 'Error');
    }

  }

  public showDialog(
    message: string,
    header: string
  ): Promise<void> {
    return new Promise(async (resolve: () => void) => {

      const options = {
        header,
        cssClass: 'dialog',
        message,
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              resolve();
            }
          }
        ]
      };
      const alert = await this.alertController.create(options);
      alert.present();

    });
  }

}
