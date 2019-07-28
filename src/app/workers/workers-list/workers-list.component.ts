import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  workers: any;
  selected = {
    id: 1,
    foto: 'foto-alberto.jpg',
    nome: 'Alberto',
    cargo: 'Presidente',
    idade: 20
  };

  constructor() { }

  ngOnInit() {
    this.workers = [
      {
        id: 1,
        foto: 'foto-alberto.jpg',
        nome: 'Alberto',
        cargo: 'Presidente',
        idade: 20
      },
      {
        id: 2,
        foto: 'foto-bruno.jpg',
        nome: 'Bruno',
        cargo: 'Diretor',
        idade: 21
      },
      {
        id: 3,
        foto: 'foto-helena.jpg',
        nome: 'Helena',
        cargo: 'Gerente',
        idade: 22
      },
      {
        id: 4,
        foto: 'foto-fernanda.jpg',
        nome: 'Fernanda',
        cargo: 'Desenvolvedor',
        idade: 23
      },
      {
        id: 5,
        foto: 'foto-diego.jpg',
        nome: 'Diego',
        cargo: 'Desenvolvedor',
        idade: 24
      },
      {
        id: 6,
        foto: 'foto-iris.jpg',
        nome: 'Iris',
        cargo: 'Desenvolvedor',
        idade: 25
      },
      {
        id: 7,
        foto: 'foto-hugo.jpg',
        nome: 'Hugo',
        cargo: 'Desenvolvedor',
        idade: 26
      },
      {
        id: 8,
        foto: 'foto-gustavo.jpg',
        nome: 'Gustavo',
        cargo: 'Desenvolvedor',
        idade: 27
      },
      {
        id: 9,
        foto: 'foto-gabriel.jpg',
        nome: 'Gabriel',
        cargo: 'Desenvolvedor',
        idade: 28
      }
    ]
    ;
  }

  toggleSelected(worker: any) {
    this.selected = worker;
  }

}