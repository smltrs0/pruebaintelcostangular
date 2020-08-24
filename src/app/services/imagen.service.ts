import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()

export class ImageService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&lang=es&q=';

  constructor(private http: HttpClient) { }

  getImage = (query: string, catSelect: string) => this.http.get(this.URL + query + '&category=' + catSelect);

}
