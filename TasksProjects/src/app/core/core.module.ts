import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { SharedComponent } from './shared.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [SharedComponent],
    declarations: [SharedComponent],
    providers: [ ApiService ]
})
export class CoreModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ApiService]
    }
  }
}