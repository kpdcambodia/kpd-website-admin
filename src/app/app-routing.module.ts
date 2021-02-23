import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEditorComponent } from './controls/post-editor/post-editor.component';
import { HomeComponent } from './home/home.component';
import { SoftwaresComponent } from './post/softwares/softwares.component';
import { SourceProjectComponent } from './post/source-project/source-project.component';
import { TutorialsComponent } from './post/tutorials/tutorials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsComponent,
    children: [
      { path: 'post-editor', component: PostEditorComponent}
    ] 
  },
  { path: 'sources', component: SourceProjectComponent,
    children: [
      { path: 'post-editor', component: PostEditorComponent}
    ] 
  },
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'post-editor/:id', component: PostEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
