import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  idpass = '';
  ppass = '';
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let p = this.route.snapshot.paramMap.get('p');
    this.idpass = id;
    this.ppass = p;
  }

}