import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostscomponentComponent } from './components/postscomponent/postscomponent.component';
import { RouterModule } from '@angular/router';
import { PostsServiceService} from './services/posts-service.service'


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PostsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
