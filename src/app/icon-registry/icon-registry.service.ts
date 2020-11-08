import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NxIconRegistry } from '@aposin/ng-aquila/icon';
import { ICONS } from './icons';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  constructor(
    private registry: NxIconRegistry,
    private sanitizer: DomSanitizer,
  ) { }

  register(): Promise<boolean> {
    return new Promise(resolve => {
      const total = ICONS.length;
      ICONS.forEach((icon, index) => {
        this.registry.addSvgIcon(icon, this.sanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${icon}.svg`));
        if (index === total - 1) { resolve(true); }
      });
    });
  }
}
