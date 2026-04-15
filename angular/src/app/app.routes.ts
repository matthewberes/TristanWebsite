import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Tristan Steele Detailing - SLOGAN GOES HERE' },
    { path: 'services', component: ServicesComponent, title: 'Services - Tristan Steele Detailing' },
    { path: 'gallery', component: GalleryComponent, title: 'Gallery - Tristan Steele Detailing' },
    { path: 'about', component: AboutComponent, title: 'About - Tristan Steele Detailing' },
    { path: 'form', component: FormComponent, title: 'Get In Touch - Tristan Steele Detailing' },
];
