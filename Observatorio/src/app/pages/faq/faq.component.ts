import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faqList: Question[];

  constructor(private faqService: FaqService) { 
    this.faqList = [];
  }

  ngOnInit(): void {
    this.loadFAQs();
  }

  loadFAQs(){
    this.faqService.getQuestionList().subscribe(
      (question: Question[]) =>{
        this.faqList.push(...question);
    });
  }

  //Implementar markdownToHtml() para acomodar mejor el contenido
  //markdownToHtml(){}

}
