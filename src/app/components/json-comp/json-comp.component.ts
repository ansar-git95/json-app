import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
@Component({
  selector: 'app-json-comp',
  templateUrl: './json-comp.component.html',
  styleUrls: ['./json-comp.component.scss']
})
export class JsonCompComponent implements OnInit {
  posts: any;
    p: number = 1;

  constructor(private jsonService:JsonService) { }

  ngOnInit(): void {
    this.jsonService.getPost().subscribe(response =>{
      this.posts=response
    });
  }

}
