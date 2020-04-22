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
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idpass = id;
  }

}