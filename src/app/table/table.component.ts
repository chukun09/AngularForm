import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})
export class TableComponent implements OnInit {
    private _hubConnection!: HubConnection;
  ;
  constructor(private tableService: TableService, private router: Router
  ) {
  }
  selectall = false;
  checked: any = [];
  datas: any = [];
  isReconnect: boolean = true;
  ngOnInit(): void {
    this.getPeople();
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
    this._hubConnection.on('BoardCastPerson', () => {
      this.getPeople();
    });
  }
  private startConnection = async () => {
    try {
      await this._hubConnection.start();
    } catch (err) {
      setTimeout(() => this.startConnection(), 5000);
    }
  }
  getPeople() {
    this.tableService.getData().subscribe((data: any) => {
      this.datas = data.result.items;
    })
  }
  select() {
    this.checked = [];
    this.selectall = !this.selectall;
    for (let i in this.datas) {
      this.datas[i].isSelected = this.selectall;
    }
    this.getCheckPeople();
  }
  isAllSelected() {
    this.selectall = this.datas.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckPeople();
  }

  checkBoxData(event: any) {
    debugger;
    console.log(event);

  }
  getCheckPeople() {
    this.checked = [];
    for (let i in this.datas) {
      if (this.datas[i].isSelected) {
        this.checked.push(this.datas[i].id);
      }
    }
  }
  editPersonInfor(id: number) {
    this.router.navigate(['edit', id]);
  }
  delete() {
    if (!this.checked.length) {
      alert("Please select a Person from the table");
      return;
    }
    for (let i in this.checked) {
      this.tableService.deletePeople(this.checked[i]).subscribe((response: any) => {
        alert(response.success ? 'Success' : 'Error');
      });
    }
    this.getPeople();
  }
}
