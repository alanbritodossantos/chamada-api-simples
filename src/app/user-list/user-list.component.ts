import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://randomuser.me/api/?results=10').subscribe(data => {
      this.users = data.results;
    });
  }

}
