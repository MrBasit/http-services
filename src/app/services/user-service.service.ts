import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  add(input: HTMLInputElement) {
    let body = {
      id: 1,
      name: 'A B C',
      username: input.value,
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
    };
    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  }
  delete(input: HTMLInputElement) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/users/${input.id}`
    );
  }
  update(input: any) {
    input.username = 'updated username';

    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${input.id}`,
      input
    );
  }
}
