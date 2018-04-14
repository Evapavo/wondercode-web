import { Source } from './../../shared/model/source.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.css']
})
export class SourceItemComponent implements OnInit {
  @Input() source: Source;

  constructor() { }

  ngOnInit() {
  }

}
