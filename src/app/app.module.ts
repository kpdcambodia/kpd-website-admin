import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { TutorialsComponent } from './post/tutorials/tutorials.component';
import { SoftwaresComponent } from './post/softwares/softwares.component';
import { SourceProjectComponent } from './post/source-project/source-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEditorComponent } from './controls/post-editor/post-editor.component';
import { ContentDialogComponent } from './controls/content-dialog/content-dialog.component';
import { HeadingComponent } from './controls/heading/heading.component';
import { HeadingContentComponent } from './controls/heading-content/heading-content.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropImageComponent } from './controls/crop-image/crop-image.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    TutorialsComponent,
    SoftwaresComponent,
    SourceProjectComponent,
    PostEditorComponent,
    ContentDialogComponent,
    HeadingComponent,
    HeadingContentComponent,
    CropImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgMaterialModule,
    HttpClientModule,
    CKEditorModule,
    ImageCropperModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
