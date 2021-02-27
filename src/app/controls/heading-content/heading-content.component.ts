import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import { MatSnackBar } from '@angular/material/snack-bar';
import MyCustomUploadAdapterPlugin from 'src/ckeditor/SimpleUploadAdapter';
import ImageRemoveEventCallbackPlugin from 'ckeditor5-image-remove-event-callback-plugin';

@Component({
  selector: 'app-heading-content',
  templateUrl: './heading-content.component.html',
  styleUrls: ['./heading-content.component.css'],
  providers: [PostService]
})
export class HeadingContentComponent implements OnInit {

  postid: any
  headng: any
  data:any
  sub: any
  sub2: any

  public Editor = DecoupledEditor;
  config = {
    extraPlugins: [MyCustomUploadAdapterPlugin]
  }
  constructor(private postService: PostService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { 
  }

  public onReady( editor: CKEditor5.Editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );

    editor.on('afterUndoImage', function( e ){ 
      console.log(333);
     } )
     editor.on('afterCommandExec', function( e ){ 
       console.log(555);
       
      } )
  }

  ngOnInit(): void {
    //this.heading = this.route.snapshot.params['head']
    this.sub = this.route.parent?.params.subscribe(param=>{
      this.postid = +param['id']
    })
    this.sub2 = this.route.params.subscribe(param=>{
      this.headng = param['head']
      this.postService.getTutorialHeadingContent(this.postid, this.headng).subscribe(rs=> {
        this.data = rs['response'].data.Content
      })
    })
  }

  saveContent() {
    this.postService.saveContent(this.postid, this.headng, this.data).subscribe(rs=>{
      if(rs['response'].status){
        this.openSnackBar('Your content has been saved!.', '')
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.sub2.unsubscribe()
  }

}
