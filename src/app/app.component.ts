import { Component } from '@angular/core';
import { VideoDataService } from './video-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4';

  constructor(private data:VideoDataService){}



  
}
