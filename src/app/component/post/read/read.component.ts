import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/model/model-interfaces';
import { PaginationService } from 'src/app/service/pagination.service';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  id: number = 0;
  oPost: IPost;
  eventsSubjectView: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oPostService: PostService,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();

  }

  ngOnInit() {  
    this.eventsSubjectView.next(this.id);    
  }

  goBack() {
    this.oLocation.back();
  }

  getOne = () => {
    this.oPostService.getOne(this.id).subscribe((oData: IPost) => {
      this.oPost = oData;      
    })
  }

}
