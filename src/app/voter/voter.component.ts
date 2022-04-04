import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
})
export class VoterComponent {
  constructor(private voterService: VoterService, private router: Router) { }
  response!: any;
  ngOnInit(): void {
    this.getLoginPage();
  }
  getLoginPage(): void {
    this.voterService.loginWithGoogle();
    console.log("Hello");
    //  this.goToLink("https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=897611024079-sqmqhhs65u20a1oqnml5ctiniq421627.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flocalhost%3A44311%2Fsign-in-google&scope=openid%20profile%20email&state=CfDJ8I1CpIAOIj5JszI2CuP-4VXdmhuFNDlDnS35vSwmqqWmd8Sst6drGWZ7luYWWYfLIe-u9I7KB2UVRxGQNvWZpKgVZDPTh0xOBHRQ4amG3JHdIYF1mTo4ZJtWmJUT4vFVKFS7kIZMvlkdsGVZ46JSnpMWgdYhJ6MIyoM783z57v6UXSDokFytypd5Fzc87aJNOZ0FM4YW-bsnnSssz-fi7_wgdCUaI_97czzK7zupR57TNOdu60VPWUTcapyi8kVTGA");
    
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
