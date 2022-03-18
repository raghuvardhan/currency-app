import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() options: Currency[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
