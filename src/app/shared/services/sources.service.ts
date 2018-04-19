import { BaseApiService } from './base-api.service';
import { Source } from '../model/source.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SourcesService extends BaseApiService {
  private static readonly SOURCES_API = `${BaseApiService.BASE_API}/source`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Source>> {
    return this.http.get(SourcesService.SOURCES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Source> {
    return this.http.get(`${SourcesService.SOURCES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(source: Source): Observable<Source> {
    return this.http.post(SourcesService.SOURCES_API, source, new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(source: Source): Observable<Source> {
    return this.http.put(`SourcesService.SOURCES_API/${source.id}`, source.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${SourcesService.SOURCES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
