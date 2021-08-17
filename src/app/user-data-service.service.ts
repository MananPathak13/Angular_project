import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { ListingComponent } from './components/listing/listing.component';
import Video from './models/Video';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(){}

  claass:string[] = []
  observable3 = new BehaviorSubject([""])
  playlist = new BehaviorSubject<Video[]>([])

  addedData:Video[] = []

  addd = (d:Video) => {
    this.addedData.push(d)
  }

  playList = () =>{
    this.playlist.next(this.addedData)
    return this.addedData
  }

  sendEvent(e:any){
    this.claass.push(e)
    this.observable3.next(this.claass)
  }

  

}
