import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/user-data-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private d:UserDataServiceService) { }

  ngOnInit(): void {
  }


}
