import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;

  constructor() { }

  upvote() {
    console.log("Called upvote")
    this.article.voteUp();
  }
  downvote() {
    console.log("Called downvote")
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
