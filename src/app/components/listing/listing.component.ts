import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/user-data-service.service';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listData:Video[]=[]
  constructor(private data:VideoDataService){}

  ngOnInit(): void {

    this.data.observable1.subscribe((api)=>{
      this.listData = api
    })
  }

  addPlaylist = (list:Video[]) =>{
    this.listData = list
  }

}
