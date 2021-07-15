import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  ngOnInit() {
    this.sidenavService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.sidenav.toggle());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
