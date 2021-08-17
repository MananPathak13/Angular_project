import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private data:VideoDataService) { }
  userinput:String = ""
  isclick:boolean = false
  listOfVideos:Video[]=[]

  ngOnInit(): void {
  }

  homescreen=()=>{
    this.isclick = true
    this.data.getDataFromAPI(this.userinput).subscribe((apidata:any)=>{
      this.listOfVideos = apidata["list"]
      this.data.videoData(this.listOfVideos)
    })
  }



}
