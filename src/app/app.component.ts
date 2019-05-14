import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
import { ObjetoJson } from './objetoJson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto Angular + Node';
  data : ObjetoJson[] = [];

  constructor(private service: GetDataService){

  }

  ngOnInit(){
    setTimeout(()=>{
      this.service.getDataFromServer().subscribe( data => {
        this.data = data;
        console.log(this.data);
      });
    }, 100);
  }

  evento(){
    setTimeout(()=>{
      window.location.reload();
    }, 1500);
  }

  getData(){
    this.service.getDataFromServer().subscribe( data => {
      this.data = data;
      console.log(this.data);
    });
    
  }
}
