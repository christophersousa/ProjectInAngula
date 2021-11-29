import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advogado } from '../modelo/advogado';

@Injectable({
  providedIn: 'root'
})

export class AdvogadosService {
  url= 'http://localhost:3000/advogados'
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Advogado[]>{
    return this.httpClient.get<Advogado[]>(this.url);
  }
}
