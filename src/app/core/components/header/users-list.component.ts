import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  contacts : any;
  isDesc: boolean = false;
  column: string = '';
  elements : any;
  @ViewChild("myDiv") divView: ElementRef;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((users: any) => {
      this.contacts = users.data;
    });
  }

listView() {  
  this.divView.nativeElement.style.width = "20%"; 
}

// Grid View
gridView() {
  this.divView.nativeElement.style.width = "100%"; 
}

  sort(property) {
    this.isDesc = !this.isDesc;   
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.contacts.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };
}
