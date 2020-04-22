import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  idpass = '';
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idpass = id;
  }

}