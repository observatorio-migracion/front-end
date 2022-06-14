import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:category', component: BlogComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'directorio', component: PhonebookComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'site-map', component: SiteMapComponent },
  { path: 'news', component: NewsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
