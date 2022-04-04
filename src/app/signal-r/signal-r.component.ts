import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal-r',
  templateUrl: './signal-r.component.html',
  styleUrls: ['./signal-r.component.css']
})
export class SignalRComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sendData(){
    this.http.get("https://localhost:44311/api/services/app/Person/GetNotify").subscribe(data => {
      console.log(data);  
    })
  }
}
