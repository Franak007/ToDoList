import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBitcoin} from "./IBitcoin";


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"

  constructor(private http: HttpClient) { }

fetchAll() {
  return this.http.get<IBitcoin[]>(this.url);
}

}
