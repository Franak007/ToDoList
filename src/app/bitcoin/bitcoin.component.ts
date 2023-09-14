import {Component, OnInit} from '@angular/core';
import {BitcoinService} from "../bitcoin.service";
import {IBitcoin} from "../IBitcoin";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent  implements OnInit {

  constructor(private service: BitcoinService) {}

  dailyBitcoin:IBitcoin[] = []

  ngOnInit():void {
    this.getBitcoinValue();
    console.log("go !")
  }

  getBitcoinValue(): void {
    this.service.fetchAll().subscribe((data: any) => {
      this.dailyBitcoin = data.data;
      // console.log(this.dailyBitcoin[0].priceUsd);
      return this.dailyBitcoin;
    });
  }

}
