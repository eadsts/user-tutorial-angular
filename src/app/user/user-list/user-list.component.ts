import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

  //this is a property user which holds the user instances returned
  //in an array
  users: User[] = [];
  tableStyle: string = "table table-sm"; 

  constructor(
    private usersvc: UserService
  ) { 
   
  }
//use our userserive to use the list method to return observable
//which calls subscribe to get data and stuff in users variable
//build user interface binding to the user property
//subscribe is the function that deals with res or err
  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { console.log(res); 
      this.users = res as User[];
    },
      err => { console.error(err); }
    );
  }

}
