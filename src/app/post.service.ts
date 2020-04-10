import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY } from 'src/app/kinvey.tokens';
import { PostInfo } from './post/Post-info';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_POSTS = `${this.BASE_URL}/posts?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/posts`;
  private readonly CREATE_RESERV = `${this.BASE_URL}/reservation`;
  private readonly ALL_RESERVATION = `${this.BASE_URL}/reservation?query={}&sort={"_kmd.ect": -1}`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<PostInfo[]>(this.ALL_POSTS, {
      
    });
  }

  getReservation() {
    return this.http.get<PostInfo[]>(this.ALL_RESERVATION, {
      
    });
  }

  
  createPost(body: Object) {
    return this.http.post(this.CREATE_POST, body, {
      
    });
  }

  createReservation(body: Object) {
    return this.http.post(this.CREATE_RESERV, body, {
     
    });
  }

  getUserPosts() {
    return this.http
      .get<PostInfo[]>(`${this.BASE_URL}/reservation?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`, {
        
      });
  }

  deletePost(id: string) {
    return this.http.delete(this.CREATE_RESERV + `/${id}`, {
      
    });
  }

  

  
}