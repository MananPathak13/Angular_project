import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/user-data-service.service';
import { VideoDataService } from 'src/app/video-data.service';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() currVideo:Video = {} as Video
  originalList:Video[] = []
  playlist:Video[] = []
  id:string=""
  e:any

  constructor(private data:VideoDataService,private data2:UserDataServiceService){}

  alreadyExists:boolean = true
  ngOnInit(): void {
    this.data.observable1.subscribe((api)=>{
      console.log("in")
      for(let j = 0; j <this.playlist.length;j++){
        let claasss = this.e.target.classList
        if(this.playlist[j].id.includes(this.id)){
          claasss.add('clicked')
        }
      }
    })
    this.data2.playlist.subscribe((api)=>{
      for(let j = 0; j <this.playlist.length;j++){
        let claasss = this.e.target.classList
        if(this.playlist[j].id.includes(this.id)){
          claasss.add('Playlist')
        }
      }
    })
  }


  add = (id:string, e:any) => {
    this.originalList = this.data.orginalList()
    this.id = id
    this.e=e
    this.playlist  = this.data2.playList()
    let claasss = e.target.classList
    e.target.value = "Added"
    claasss.add('clicked')
    this.alreadyExists = true
    for(let j = 0; j <this.playlist.length;j++){
      if(this.playlist[j].id.includes(id)){
        this.alreadyExists  = false
      }
    }

      if(this.alreadyExists){
        for(let i=0; i<this.originalList.length;i++){
          if(this.originalList[i].id == id){
            this.data2.addd(this.originalList[i])
          }
        }
      }


  }



}
