import { Injectable } from '@angular/core';
import Video from './models/Video';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http:HttpClient) { }

  list:Video[]=[]
  

  observable1 = new BehaviorSubject<Video[]>(this.list)
  getDataFromAPI = (dat:String):Observable<any> => {
    return this.http.get<any>(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url%2Curl&search=${dat}`);
  }


  
  orginalList = ():Video[]=>{
  return this.list
  }
  videoData = (list:Video[])=>{
    this.list = list
    this.observable1.next(this.list)
  }

  
}

