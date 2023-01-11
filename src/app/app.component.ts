import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Utente {
  id: number;
  nome: string;
  cognome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testdockerangular';
  listaUtenti: Utente[] = [];

  private apiServer = 'http://localhost:8080/list';
  constructor(private http: HttpClient) {}

  lista(): Observable<Utente[]> {
      this.http.get<Utente[]>(this.apiServer).subscribe(res => console.log(res));
      return this.http.get<Utente[]>(this.apiServer);
  }

  ngOnInit(): void {
    this.lista().subscribe(res => this.listaUtenti = res);
  }
}
