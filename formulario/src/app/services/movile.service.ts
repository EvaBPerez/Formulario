import { Injectable } from '@angular/core';
import { Movile  } from '../models/movile.model';

@Injectable({
  providedIn: 'root'
})
export class MovileService {
  moviles: Movile[] = [
    {
      id: 1, 
      marca: 'Huawei',
      modelo: 'Smart 2021'
    }, 
    {
      id: 2, 
      marca: "Apple",
      modelo: "iPhone 11"
    }
  ];

  constructor() { }

  onGet() {
    return this.moviles;
  }

  onGetMovile(id: number) {
    return this.moviles.find(x=>x.id === id);
  }

  onAdd(movile: Movile) {
    this.moviles.push(movile);
  }

  onDelete(id: number) {
    let movile = this.moviles.find(x=>x.id === id);
    if (typeof movile !== "undefined") {
      let index = this.moviles.indexOf(movile, 0);
      this.moviles.splice(index, 1);
    }
    
  }

  onUpdate(movile: Movile) {
     let oldMovile = this.moviles.find(x=>x.id == movile.id);
     if (typeof oldMovile !== "undefined") {
      oldMovile.marca = movile.marca;
      oldMovile.modelo = movile.modelo;
     }
  }
}
