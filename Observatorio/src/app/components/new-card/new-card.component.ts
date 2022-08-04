import { Component, OnInit, Input } from '@angular/core';
import { Categoria, New } from 'src/app/models/New';
import { parseURLImage } from '../../helpers/URLparser';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  id: string | undefined;

  title: string | undefined;

  sintesis: string | undefined;

  image: string | undefined;

  categories: Categoria[] | undefined;

  date: Date | undefined;

  @Input() new: New | undefined;

  constructor() { }

  ngOnInit(): void {
    this.id = this.new?.id;
    this.title = this.new?.titulo;
    this.sintesis = this.new?.sintesis;

    this.image = parseURLImage(this.new?.miniatura?.formats?.medium?.url);
    this.categories = this.new?.categorias;
    this.date = this.new?.fecha;
  }

}
