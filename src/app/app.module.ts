import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SvgModule } from '@ironsource/fusion-ui/components/svg';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs';
import { IconModule } from '@ironsource/fusion-ui/components/icon';
import { RadioGroupModule } from '@ironsource/fusion-ui/components/radio-group';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SvgModule.forRoot({
      assetsPath: 'https://fusion.ironsrc.net/assets',
    }),
    TabsModule,
    IconModule,
    RadioGroupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
