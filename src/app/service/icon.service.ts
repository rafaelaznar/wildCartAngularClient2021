import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  public getEntityIcon(strEntity: string): string {
    switch (strEntity) {
      case 'tipoproducto': {
        return 'fas fa-tag';
        break;
      }
      default: {
        return 'fas fa-question'
        break;
      }
    }
  }
  public getoperationIcon(strOperation: string): string {
    switch (strOperation) {
      case 'plist': {
        return 'fas fa-file-alt';
        break;
      }
      default: {
        return 'fas fa-question'
        break;
      }
    }
  }


}

