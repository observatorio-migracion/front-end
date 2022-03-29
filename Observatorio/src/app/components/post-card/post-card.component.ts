/* eslint class-methods-use-this: ["error", { "exceptMethods": ["parseString",] }] */
import { Component, OnInit, Input } from '@angular/core';
import { Categoria, Post } from 'src/app/models/Post';
import { parseURLImage } from '../../helpers/URLparser';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  id: string | undefined;

  title: string | undefined;

  description: string | undefined;

  image: string | undefined;

  categories: Categoria[] | undefined;

  date: Date | undefined;

  @Input() post: Post | undefined;

  ngOnInit(): void {
    this.id = this.post?.id;
    this.title = this.post?.titulo;
    this.description = this.post?.descripcion;

    // TODO: Revisar cual es la resolucion mas adecuada
    this.image = parseURLImage(this.post?.miniatura?.formats?.medium?.url);
    this.categories = this.post?.categorias;
    this.date = this.post?.published_at;
  }

  // cut a string defining a delimiter position an adds an ... at the end
  parseString(delimiter: number, str: string | undefined) {
    let result = '';
    if (str) {
      result = str.length > delimiter ? `${str.substr(0, delimiter)} ...` : str;
    }
    return result;
  }
}
