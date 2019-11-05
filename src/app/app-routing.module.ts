import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { HomeComponent } from './components/home/home.component';
import { RepSignupComponent } from './components/rep-signup/rep-signup.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock Internationa'
            }
        }
    },
    {
        path: 'test/:repid', component: HomeComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock Internationa'
            }
        }
    },
    {
        path: 'rep-signup', component: RepSignupComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock Internationa'
            }
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
