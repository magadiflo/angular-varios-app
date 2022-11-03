import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from "rxjs";

import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return firstValueFrom(this.http.get<any>('assets/customers-large.json'))
      .then(res => <Customer[]>res.data)
      .then(data => {
        console.log('Servicio....');
        return data;
      });
  }

}
