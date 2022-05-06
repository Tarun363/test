import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInfo } from '../user/user.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  constructor() {
    this.userInfoData = new UserInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() userInfoData: UserInfo;

  ngOnInit(): void {
    console.log(this.userInfoData);
  }

}
