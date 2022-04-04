import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private _hubConnection!: HubConnection;
  private isReconnect: boolean = true;
  showMessage: boolean = false;
  signaldata: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder().withUrl('https://localhost:44311/notify').build();
    this.startConnection();
    this._hubConnection.onclose(async () => {
      if (this.isReconnect) {
        await this.startConnection();
      }
    })
    this._hubConnection.start().then(
      () =>
        console.log('connection start')
    ).catch(err => console.error);
    this._hubConnection.on('BoardCastMessage', (person) => {
      this.signaldata.push(person);
      console.log(person);
      this.showMessage = true;
    });
  }
  private startConnection = async () => {
    try {
      await this._hubConnection.start();
    } catch (err) {
      setTimeout(() => this.startConnection(), 5000);
    }
  }
  showData() {
    this.showMessage = false;
  }
}
