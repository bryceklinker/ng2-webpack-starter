import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getStartedRouting } from './routing/get-started.routing';
import { GetStartedRootComponent } from './components/get-started-root.component';

@NgModule({
    imports: [
        BrowserModule,
        getStartedRouting
    ],
    declarations: [
        GetStartedRootComponent
    ]
})
export class GetStartedModule {

}