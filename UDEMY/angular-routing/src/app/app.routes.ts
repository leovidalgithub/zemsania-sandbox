import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent,
         AboutHomeComponent, AboutItemComponent } from './primaryComponents/components.component';
import { GroupComponent } from './groupComponents/group.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about',
        component: AboutComponent,
        children: [
            { path: '', component: AboutHomeComponent },
            { path: 'item/:id', component: AboutItemComponent },
            { path: 'group', component: GroupComponent }
    ]
},
    { path: '**', redirectTo: '' }
]
