import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movile } from 'src/app/models/movile.model';
import { MovileService } from 'src/app/services/movile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number = 0;
  header: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private movileService: MovileService) { }
    public moviles: Movile = {
      id: 0,
      marca: '',
      modelo: ''
    }

  ngOnInit(): void {
    let aux = this.route.snapshot.paramMap.get('id');
    if (aux !== null) {
      this.id = + aux;
    }

    this.header = this.id === 0? 'Añadir movil': 'Editar movil';

    if(this.id != 0) {
      let auxx = this.movileService.onGetMovile(this.id);
      
      if (typeof auxx !== "undefined") {
        this.moviles = auxx;
      }    
    }
  }

  onSubmit(form: NgForm) {
    let movile: Movile = {
      id: form.value.id,
      marca: form.value.marca,
      modelo: form.value.modelo,
    }

    if(this.id === 0) {
      this.movileService.onAdd(movile);

    } else  {
      this.movileService.onUpdate(movile);
    }

    this.router.navigateByUrl('');
  }

}
