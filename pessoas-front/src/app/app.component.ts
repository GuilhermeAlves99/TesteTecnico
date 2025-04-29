import { Component } from '@angular/core';
import { TabelaPessoasComponent } from './tabela-pessoas/tabela-pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'; // Botão 
import { MatCardModule } from '@angular/material/card';     // Card
import { MatToolbarModule } from '@angular/material/toolbar'; // Barra
import { MatTableModule } from '@angular/material/table'; // Para tabelas
import { MatPaginatorModule } from '@angular/material/paginator'; // Paginação
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabelaPessoasComponent,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule 
  ],
  template: `
    <mat-toolbar color="primary">
</mat-toolbar>
<main class="content">
  <mat-card>
    <mat-card-header>
      <mat-card-title class="card-title">Lista de Pessoas</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-tabela-pessoas></app-tabela-pessoas>
    </mat-card-content>
    <mat-card-actions align="end">
    </mat-card-actions>
  </mat-card>
</main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }