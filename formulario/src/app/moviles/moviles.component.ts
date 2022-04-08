import { Component, OnInit } from '@angular/core';
import { Movile } from '../models/movile.model';
import { MovileService } from '../services/movile.service';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit {
  moviles: Movile[] = [];

  constructor(private movileService: MovileService) {}

  ngOnInit(): void {
    this.moviles = this.movileService.onGet();
  }

  onDelete(id: number) {
    this.movileService.onDelete(id);
  }

}
