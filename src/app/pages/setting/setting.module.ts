import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule, routedComponents } from './setting-routing.module';
import { ButtonsModule } from '../forms/buttons/buttons.module';

@NgModule({
  imports: [
    ThemeModule,
    SettingRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SettingModule { }
