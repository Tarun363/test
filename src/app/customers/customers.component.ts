import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserInfo } from './user/user.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private tc: ChangeDetectorRef) {
    this.userInfoData = new UserInfo();
  }

  userInfoData: UserInfo;

  ngOnInit(): void {
  }

  public userInfoEmt(e: UserInfo) {
    this.userInfoData = new UserInfo();
    this.tc.detectChanges();
    this.userInfoData = e;
  }

}
