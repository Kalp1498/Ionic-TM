import { Injectable } from '@angular/core';
import { IShare } from '../models/share.interface';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private socialSharing: SocialSharing,
  ) { }

  // options for sharing content
  options: IShare = {
    url: '',
    files: '',
    message: '',
    subject: '',
    chooserTitle: '',
  };

  // share content using social sharing 
  share() {
    this.socialSharing.shareWithOptions(this.options)
    .then(() => {})
    .catch((err) => {});
  }
}
