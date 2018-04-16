

import { SourcesService } from './../../shared/services/sources.service';
import { Source } from './../../shared/model/source.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-source-create',
  templateUrl: './source-create.component.html',
  styleUrls: ['./source-create.component.css']
})
export class SourceCreateComponent {
  source: Source = new Source();
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('sourceForm') sourceForm;

  constructor(
    private router: Router,
    private sourcesService: SourcesService) {}




  onSubmitSource(sourceForm: NgForm) {
    const imageFile = this.imageFile.nativeElement;
    if (imageFile.files && imageFile.files[0]) {
      this.source.image = imageFile.files[0];
      this.sourcesService.create(this.source)
        .subscribe(
          (source) => {
            sourceForm.reset();
            this.router.navigate(['/sources']);
          },
          (error) => {
            this.apiError = error;
          }
      );
    }
  }

  canLeaveTheComponent(): boolean {
    if (this.sourceForm.dirty) {
      return window.confirm(`
        Unsaved changes.
        Are you sure you want to leave?
    `);
    } else {
      return true;
    }
  }
}
