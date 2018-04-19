import { Component, OnInit } from '@angular/core';
import { Source } from '../../shared/model/source.model';
import { SourcesService } from '../../shared/services/sources.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Array<Source> = [];
  type: string = "FILMS, BOOKS, FIGURES, MENTORS, QUOTES";

  constructor(
    private sourcesService: SourcesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
   ) { }

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

  getSourceInfo(id) {
    this.router.navigate(['/info'], { queryParams: { id } });
  }
}
