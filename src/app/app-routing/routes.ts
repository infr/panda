import { Routes } from '@angular/router';

// import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { GalleryComponent } from '../gallery/gallery.component';

export const routes: Routes = [
  // { path: 'home',  component: HomeComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'gallery/:id',     component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
