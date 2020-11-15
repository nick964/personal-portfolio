import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    ProjectComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

