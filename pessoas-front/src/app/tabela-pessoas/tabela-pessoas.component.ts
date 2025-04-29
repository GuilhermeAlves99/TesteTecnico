import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoas';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabela-pessoas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'endereco', 'idade', 'municipio', 'estado'];
  pessoas: Pessoa[] = [];
  pessoasFiltradas: Pessoa[] = [];
  paginaAtual: number = 1;
  registrosPorPagina: number = 10;
  totalPaginas: number = 1;
  filtroNome: string = '';

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.getPessoas().subscribe({
      next: (data) => {
        this.pessoas = data;
        this.aplicarFiltroEPaginacao();
      },
      error: (err) => console.error('Erro ao carregar pessoas:', err)
    });
  }

  aplicarFiltroEPaginacao(): void {
    let filtered = this.pessoas;
    
    if (this.filtroNome) {
      filtered = this.pessoas.filter(p => 
        p.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    }

    this.totalPaginas = Math.ceil(filtered.length / this.registrosPorPagina);
    if (this.paginaAtual > this.totalPaginas) {
      this.paginaAtual = 1;
    }

    const inicio = (this.paginaAtual - 1) * this.registrosPorPagina;
    const fim = inicio + this.registrosPorPagina;
    this.pessoasFiltradas = filtered.slice(inicio, fim);
  }

  filtrarPorNome(): void {
    this.paginaAtual = 1;
    this.aplicarFiltroEPaginacao();
  }

  mudarPagina(direcao: number): void {
    this.paginaAtual += direcao;
    if (this.paginaAtual < 1) this.paginaAtual = 1;
    if (this.paginaAtual > this.totalPaginas) this.paginaAtual = this.totalPaginas;
    this.aplicarFiltroEPaginacao();
  }
}