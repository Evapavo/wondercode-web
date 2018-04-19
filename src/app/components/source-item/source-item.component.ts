import { SourcesService } from './../../shared/services/sources.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Source } from '../../shared/model/source.model';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.css']
})
export class SourceItemComponent implements OnInit {
  source: Source = new Source();
  error: Object;
  id: string;
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('sourceForm') sourceForm;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private sourcesService: SourcesService,
    private activatedRoute: ActivatedRoute,
) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        this.sourcesService.get(this.id)
          .subscribe(data => {
            this.source = data;
          });
      }
    });
  }

  onSubmitSource(sourceForm) {
     this.sourcesService.create(this.source)
       .subscribe(
         (source) => {
           sourceForm.reset();
           this.router.navigate(['/home']);
         },
         (error) => {
           this.apiError = error;
         }
     );
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.sourcesService.delete(this.source.id)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }

}
