import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  heading: any
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTutorialHeading(15).subscribe(
      (rs)=>{
        this.heading = rs['response'].data.heading
      }
    )
  }

}
