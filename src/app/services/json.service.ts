import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient:HttpClient) { }

  getPost(){
    return this.httpClient.get(this.url);
  }
}
