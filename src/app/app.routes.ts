import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './layout/home/home';
import { About } from './layout/about/about';
import { Projects } from './layout/projects/projects';
import { Skills } from './layout/skills/skills';
import { Contact } from './layout/contact/contact';
import { EditHome } from './dashboard/edit-home/edit-home';
import { EditProjects } from './dashboard/edit-projects/edit-projects';
import { EditAbout } from './dashboard/edit-about/edit-about';
import { EditSkills } from './dashboard/edit-skills/edit-skills';
import { EditContact } from './dashboard/edit-contact/edit-contact';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path:'', component: Layout , children :[
            {path:'',redirectTo: 'home', pathMatch:'full'},
            {path: 'home',component : Home},
            {path: 'about',component : About},
            {path: 'projects',component : Projects},
            {path: 'skills',component : Skills},
            {path: 'contact',component : Contact}
        ]
    },
   {
        path:'dashboard', component: Dashboard , children :[
            {path:'',redirectTo: 'home', pathMatch:'full'},
            {path: 'home',component : EditHome},
            {path: 'about',component : EditAbout},
            {path: 'projects',component : EditProjects},
            {path: 'skills',component : EditSkills},
            {path: 'contact',component : EditContact}
        ]
    }  
];
