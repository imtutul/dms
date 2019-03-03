import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule, routedComponents } from './setting-routing.module';
import { ButtonsModule } from '../forms/buttons/buttons.module';

@NgModule({
  imports: [
    ThemeModule,
    SettingRoutingModule,
    ButtonsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SettingModule { }
