import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  optionSelector: boolean[];
  currentOptionIndex: number;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.optionSelector = [true, false, false, false, false];
    this.currentOptionIndex = 0;
  }

  menuSelectorHandler(optionSelected: number): void {
    this.optionSelector[this.currentOptionIndex] = false;
    this.optionSelector[optionSelected] = true;
    this.currentOptionIndex = optionSelected;
    // console.log(this.optionSelector);
  }
}
