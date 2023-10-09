import { Routes } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
    {
        path: '',
        component: FootballComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    },
];
