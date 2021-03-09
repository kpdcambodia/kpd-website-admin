import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  postedData: any;
  draftData: any;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
  }

  tabChange($event: any) {
    if($event.index ==  0) {
      this.postService.postedTutorials().subscribe(
        (rs)=>{
          this.postedData = rs['response'].data
        }
      )
    }
    else if($event.index == 1) {
      this.postService.draftTutorials().subscribe(
        (rs)=>{
          this.draftData = rs['response'].data
        }
      )
    }
  }

  newPost() {
    this.router.navigate(['/post-editor'])
  }

}
