import { Component, OnInit } from '@angular/core';
import { convertToObject } from 'typescript';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css'],
})
export class HttpServicesComponent implements OnInit {
  users: any;
  constructor(private userservice: UserServiceService) {}

  ngOnInit(): void {
    this.userservice.get().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log('error logged');
        if (error.status === 404)
          console.log('Not found error -> ', error.status);
        if (error.status === 400)
          console.log('Bad request error -> ', error.stautus);
        else console.log('unexpected error');
      }
    );
  }

  onAdd(e: HTMLInputElement) {
    this.userservice.add(e).subscribe((response) => {
      this.users.push(response);
    });
    e.value = '';
  }

  onDelete(e: any) {
    this.userservice.delete(e).subscribe(
      (r) => {
        for (let index in this.users)
          if (this.users[index] === e) this.users.splice(index, 1);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  onUpdate(e: any) {
    this.userservice.update(e).subscribe();
  }
}
