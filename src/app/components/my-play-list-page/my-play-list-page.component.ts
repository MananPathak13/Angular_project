import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/user-data-service.service';

@Component({
  selector: 'app-my-play-list-page',
  templateUrl: './my-play-list-page.component.html',
  styleUrls: ['./my-play-list-page.component.css']
})
export class MyPlayListPageComponent implements OnInit {

  constructor(private data:UserDataServiceService) { }

  playlist:Video[] = []
  ngOnInit(): void {
    this.data.playlist.subscribe((data) => {
      this.playlist = data
    })

  }

  clear(){
    this.playlist=[]
  }

}
