import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ObjetoJson } from './objetoJson';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  data: ObjetoJson[];

  constructor(private http: HttpClient) { }
  getDataFromServer(){
    //return this.http.get<Object[]>('http://localhost:3000/getData');
    return this.http.get<ObjetoJson[]>('https://node-pessoa-api.herokuapp.com/getData');
  }
}


