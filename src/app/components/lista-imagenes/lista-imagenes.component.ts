import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/imagen.service';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {
  categories: any[];
  catSelect: string;
  catSelectName: string;
  images: any[];
  searchQuery: string;
  imagesFound = false;
  searching = false;
  catValueSelect: string;


  handleSuccess(data): void {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error): void {
    console.log(error);
  }

  constructor(private imageService: ImageService)
  {
      this.categories = [ { value: 'science', name: 'ciencia' },
        {value: 'education', name: 'educación'},
        {value: 'people', name: 'personas'},
        {value: 'feelings', name: 'sentimientos'},
        {value: 'computer', name: 'computadora'},
        {value: 'buildings', name: 'construcción'},
        {value: '', name: 'Ninguna'}
      ];
      this.catSelect = '';
  }

  // tslint:disable-next-line:typedef
  searchImages(query: string) {
    this.searching = true;
    if (query !== '') {
      return this.imageService.getImage(query, this.catValueSelect = this.catSelect ).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => {(this.searching = false), this.searchQuery = '', this.catSelect = ''; }
      );
    }
  }

  setCategory(categoriaselec: string, catSelectName: string): void{
    this.catSelect = categoriaselec;
    this.catSelectName =  catSelectName;
    console.log(this.catSelect);
  }

  ngOnInit(): void {
  }

}
