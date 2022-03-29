import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api.url;
  }

  getQuestionList(){
    return this.http.get<Question[]>(`${this.url}/faqs`);
  }

}
