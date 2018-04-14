import { Component, OnInit } from '@angular/core';
import { Source } from '../../shared/model/source.model';
import { SourcesService } from '../../shared/services/sources.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Array<Source> = [];
  type: string;

  constructor(private sourcesService: SourcesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['type']) {
        this.type = params['type'].toUpperCase();
      }
    });

    this.sourcesService.list()
      .subscribe((sources) => {
        this.sources = sources.filter(source => source.sourceType === this.type);
      });
  }
}
