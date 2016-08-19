import { RouterModule } from '@angular/router';

import { GetStartedRootComponent } from '../components/get-started-root.component';

export const getStartedRouting = RouterModule.forChild([
    { path: 'get-started', component: GetStartedRootComponent }
]);