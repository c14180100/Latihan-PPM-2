import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  idpass = '';
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idpass = id;
  }

}