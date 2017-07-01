import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { JhiLanguageService } from 'ng-jhipster';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from '@ngx-translate/core';
import { NgJhipsterModule } from 'ng-jhipster';

import { GreatBigExampleApplicationSharedLibsModule } from './shared/shared-libs.module';

// export function createTranslateLoader(http: Http) {
//     return new TranslateHttpLoader(http, './i18n/', '.json');
// }

// const translationOptions = {
//     loader: {
//         provide: TranslateLoader,
//         useFactory: (createTranslateLoader),
//         deps: [Http]
//     }
// };

// @NgModule({
//     imports: [TranslateModule.forRoot(translationOptions)],
//     exports: [TranslateModule],
//     providers: [TranslateService]
// })
// export class AppTranslationModule {
//     constructor(private translate: TranslateService) {
//         translate.addLangs(['de']);
//         translate.setDefaultLang('de');
//         translate.use('de');
//     }
// }


@NgModule({
    imports: [NgJhipsterModule],
    exports: [NgJhipsterModule],
    providers: [
        // TranslateService
    ]
})
export class AppTranslationModule {
    constructor(private translate: TranslateService) {
    }
}