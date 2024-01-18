import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsDesktopGuard implements CanLoad {
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this.document.defaultView?.innerWidth ?? 0) > 576;
  }
}
