import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private tc: ChangeDetectorRef) {
    this.userInfo = new UserInfo();
    this.userInfo.firstName = 'test';
  }

  @Output() userInfoEmt = new EventEmitter<any>();
  userInfo: UserInfo;

  ngOnInit(): void {
    this.userInfo.firstName = 'John';
    this.userInfo.lastName = 'Doe';
    this.userInfo.role = 'Java';
  }

  public reset() {
    this.userInfo = this.userInfo;
    this.tc.detectChanges();
  }

  public submit() {
    this.userInfoEmt.emit(this.userInfo);
  }

}

export class UserInfo {
  firstName: string | undefined;
  lastName: string | undefined;
  role: string | undefined;
}
