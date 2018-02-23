import { NgModule } from '@angular/core';
import { SettingsPage } from './settings';
import { IonicPageModule } from 'ionic-angular';
import { DatasyncPage } from './datasync/datasync';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSettingsPage } from '../language-settings/language-settings';
import { OnboardingPageModule } from '../onboarding/onboarding.module';

@NgModule({
	declarations: [SettingsPage, LanguageSettingsPage, DatasyncPage],
	entryComponents: [LanguageSettingsPage, DatasyncPage],
	imports: [
		OnboardingPageModule,
		IonicPageModule.forChild(SettingsPage),
		TranslateModule.forChild()
	],
	exports: [SettingsPage]
})
export class SettingsPageModule { }
