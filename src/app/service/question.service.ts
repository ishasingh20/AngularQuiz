import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private htpp : HttpClient ) { }

  getQuestionJson(){
    return this.htpp.get<any>("assets/question.json");
  }
}
