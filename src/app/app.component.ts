import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent  {
  name = 'Angular';
  constructor (private router: Router){}
  nama:String;
  penjelasan:String;

  input(){
    this.router.navigate(['/input',this.nama, this.penjelasan]);
  }

  list() {
    this.router.navigate(['/list',this.nama, this.penjelasan]);
  }

  edit() {
    this.router.navigate(['/edit',this.nama, this.penjelasan]);
  }
}




