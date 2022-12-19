import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

  }

}
