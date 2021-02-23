import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { Tutorial } from 'src/app/models/tutorial'

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  postid: number | any
  form: FormGroup
  post: Tutorial = {}
  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router, private postService: PostService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      post_title: [this.post.Subject, Validators.required],
      post_memo: [this.post.Memo, Validators.required]
    })
  }

  ngOnInit(): void {
    this.postid = +this.route.snapshot.params['id']

    if(this.postid!=0){
      this.postService.getPostTutorial(this.postid).subscribe(
        (rs)=>{
          this.post = rs['response'].data.post
          //
          this.form.controls['post_title'].setValue(this.post.Subject)
          this.form.controls['post_memo'].setValue(this.post.Memo)
        }
      )
    }
  }

  savePublic() {

  }

  saveDraft() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContentDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const postdata =  {...this.form.value, ...result, ...{postid: this.postid}}        
        this.postService.createContentTutorial(postdata).subscribe(
          (rs)=>{
            if(this.postid==0){
              this.router.navigate([`/post-editor/${rs['response'].data}`])
            }
          }
        )
      }
    });
  }

}
