import { Injectable } from '@angular/core';
import { LoadingController, ToastController, LoadingOptions, ToastOptions } from 'ionic-angular';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { timer } from 'rxjs/observable/timer';

type LoadOptions = {
  loadingOptions?: LoadingOptions
  toastOptions?: ToastOptions
  delay?: number
};

@Injectable()
export class LoadingUiProvider {

  defaultOptions: LoadOptions = {
    loadingOptions: {},
    toastOptions: {
      duration: 3000,
      position: 'bottom'
    },
    delay: 0,
  }

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

  async load(action: () => Promise<any>, errorMessage: string, opts?: LoadOptions) {
    opts = {
      ...this.defaultOptions,
      ...opts,
    };

    const loading = this.loadingCtrl.create(opts.loadingOptions);
    const toast = this.toastCtrl.create({ ...opts.toastOptions, message: errorMessage });
    const delayedAction = () => forkJoin(action(), timer(opts.delay)).toPromise();

    try {
      loading.present();
      return await delayedAction();
    } catch (e) {
      toast.present();
    } finally {
      loading.dismiss();
    }
  }

}
