import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//material
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



// import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PostComponent } from './pages/post/post.component';


//import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { CreatePostComponent } from './components/create-post/create-post.component';
//import { PostCreateComponent } from './pages/post-create/post-create.component';
import { environment } from 'src/environments/environment';


import { ShowdownModule } from 'ngx-showdown';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    NavbarComponent,
    // HomeComponent,
    BlogComponent,
    ContactComponent,
    ContactFormComponent,
    PostComponent,
    //DashboardComponent,
    //CreatePostComponent,
    //PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ShowdownModule.forRoot({emoji: true, noHeaderId: true, flavor: 'github'}),
    AngularFireModule.initializeApp(environment.firebase),
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
