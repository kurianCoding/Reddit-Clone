System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Article, ArticleComponent, RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Data Structure to represent Article
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        return link.split('/')[0];
                    }
                    catch (err) {
                        return null;
                    }
                };
                return Article;
            })();
            // Declaration of Reddit Article Component
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.new_article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.new_article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['new_article'],
                        host: {
                            class: 'row'
                        },
                        templateUrl: 'partials/article.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            // Declaration of Reddit App Component
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 10),
                        new Article('Foundation 6', 'http://zurb.com/article/1416/foundation-6-is-here', 80),
                        new Article('Greensock', 'http://greensock.com', 40),
                        new Article('Rxjs', 'http://reactivejs.com', 10)
                    ];
                }
                //Again, it’s important to realize that title and link are both objects of type HTMLInputElement and not the input values directly”
                RedditApp.prototype.addArticle = function (title, link) {
                    this.articles.push(new Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent],
                        templateUrl: 'partials/reddit-app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map