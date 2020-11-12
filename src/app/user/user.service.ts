import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

//get host from right clicking project name in VS solution explorer
//scroll down to properties, debug, scrolldown to host number
const baseurl = "http://localhost:62513/api/users";

//decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //pass in property and type
  constructor(
    private http: HttpClient
  ) { }

  //reads all users from User[] array and returns it as an array
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  //reads a single instance of a user by pk adn returns as an instance
  get(id: number): Observable<User> {
    return this.http.get(`${baseurl}/${id}}`) as Observable<User>;
  }

 //add user instance to database by passing in user propety of type User
 //return the baseurl and a single user 
 create(user: User): Observable<User> {
    return this.http.post(`${baseurl}`, user) as Observable<User>;
 }

 //update user instance in database
 //return baseurl and the instance of the user by id
 change(user: User): Observable<any> {
   return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
 }

 //delete only requires one parameter - don't need to pass the user instance
 remove(user: User): Observable<User> {
   return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
 }
}
