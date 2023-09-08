import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"

  constructor() { }

}
