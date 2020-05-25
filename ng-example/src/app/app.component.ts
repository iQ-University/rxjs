import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './posts.service';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public posts;

  constructor(private postsService: PostsService) {
  }

  // Subject

  // ngOnInit() {
  //   this.postsService.getPosts()
  //     .pipe(
  //       takeUntil(this.wasDestroyed$)
  //     )
  //     .subscribe((result: any) => {
  //       this.posts = result;
  //     });
  // }

  // ngOnDestroy() {
  //   this.wasDestroyed$.next(true);
  // }

  // Take (1)
  // ngOnInit() {
  //   this.postsService.getPosts()
  //     .pipe(
  //       take(1)
  //     )
  //     .subscribe((result: any) => {
  //       this.posts = result;
  //     });
  // }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
