import { Component, OnInit } from '@angular/core';
import { Source } from './shared/model/source.model.ts';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Array<Source>
  constructor() { }

  ngOnInit() {
  }

}
