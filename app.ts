import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

// Data Structure to represent Article
class Article {
  
  link  : string;
  title : string;
  votes : number;

  constructor( title: string, link: string, votes?: number) {
    this.title  = title;
    this.link   = link;
    this.votes  = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try{
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }catch(err) {
      return null;
    }
  }

}

// Declaration of Reddit Article Component
@Component({
  selector: 'reddit-article',
  inputs: ['new_article'],
  host: {
    class: 'row'
  },
  templateUrl: 'partials/article.html'
})
// Defination of reddit-article component
class ArticleComponent {
  
  new_article: Article;   // article is of Class Article Type

  voteUp(): boolean {
    this.new_article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.new_article.voteDown();
    return false;
  }

}


// Declaration of Reddit App Component
@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  templateUrl: 'partials/reddit-app.html'
})
// Component Defination
class RedditApp {
  articles: Article[];  // articles is typed and it will only hold objects of type Article

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Foundation 6', 'http://zurb.com/article/1416/foundation-6-is-here', 80),
      new Article('Greensock', 'http://greensock.com', 40),
      new Article('Rxjs', 'http://reactivejs.com', 10)
    ];
  }

  //Again, it’s important to realize that title and link are both objects of type HTMLInputElement and not the input values directly”
  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }

  sortedArticles(): Article[] {
    return this.articles.sort(
      (a: Article, b: Article) => b.votes - a.votes
    );
  }
}


bootstrap(RedditApp);



