import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SvgModule } from '@ironsource/fusion-ui/components/svg';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs';
import { IconModule } from '@ironsource/fusion-ui/components/icon';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SvgModule.forRoot({
      assetsPath: 'https://fusion.ironsrc.net/assets',
    }),
    TabsModule,
    IconModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
