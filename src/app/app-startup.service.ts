import { Injectable } from '@angular/core';
import { IconRegistryService } from './icon-registry/icon-registry.service';

@Injectable({ providedIn: 'root' })
export class AppStartupService {

  constructor(
    private iconRegistry: IconRegistryService
  ) { }

  init(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.iconRegistry.register();
      resolve(true);
    });
  }
}
