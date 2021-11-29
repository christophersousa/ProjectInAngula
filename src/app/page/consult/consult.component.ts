import { Component, OnInit } from '@angular/core';
import { Advogado } from 'src/app/shared/modelo/advogado';
import { arrayConsult } from 'src/app/shared/modelo/arrayConsult';
import { AdvogadosService } from 'src/app/shared/servicos/advogados.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  advogados= new Array<Advogado>();
  arrayAdvogados = new arrayConsult()
  constructor(private advogadoService: AdvogadosService) { }

  ngOnInit(): void {
    this.advogadoService.listar().subscribe(advogados => this.advogados = advogados);
  }

  insertAdvogado(advogado: Advogado): void {
    this.arrayAdvogados.insertAdvogado(advogado)
    console.log(this.advogadoService.listar())
  }

}
