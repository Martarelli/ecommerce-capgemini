import { NotificacaoService } from './../notificacao.service';
import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr)=> prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    this.notificacaoService.notificar("Parabéns, você finalizou a compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
