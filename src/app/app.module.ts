import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routingComponent} from './app-routing.module';
import {HttpClientModule} from  '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';
import { WorkdetailComponent } from './workdetail/workdetail.component';
import {FormsModule} from '@angular/forms';
import { MySelectComponent } from './my-select/my-select.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    FooterComponent,
    CommentComponent,
    WorkdetailComponent,
    MySelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
