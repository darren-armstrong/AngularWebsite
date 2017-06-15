import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.header.component';
import { NavigationComponent } from './navigation/app.nav.component';
import { ContentAreaComponent } from './content-area/app.content-area.component';
import { FooterComponent } from './footer/app.footer.component';
import { AboutComponent } from './about/app.about.component';
import { ContactComponent } from './contact/app.contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentAreaComponent,
    FooterComponent,
    AboutComponent, 
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path:'',
        component: ContentAreaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
