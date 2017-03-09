import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  schemaUrl: string;
  selectedFramework = 'bootstrap-3';

  constructor() { }

  ngOnInit() {
    this.schemaUrl = '../../assets/jsonschemas/bettor.json';
    this.selectedFramework = 'bootstrap-3';
  }

  updateObject(obj: any) {
    console.log('Update object' + obj);
  }

}
