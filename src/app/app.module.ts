import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './feed/header/header.component';
import { TweetBoxComponent } from './feed/tweet-box/tweet-box.component';
import { PostComponent } from './feed/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FeedComponent,
    HeaderComponent,
    TweetBoxComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
