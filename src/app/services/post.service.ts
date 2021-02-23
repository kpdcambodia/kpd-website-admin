import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createContentTutorial(data: any):Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/post`, {"name": "createContentTutorial", "appid": 100, "param": data})
  }

  getPostTutorial(postid: number):Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/post`, {"name": "getPostTutorial", "appid": 100, "param": {"postid": postid}})
  }
}
