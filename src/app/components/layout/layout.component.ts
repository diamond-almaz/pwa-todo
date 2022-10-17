import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  constructor(private elRef: ElementRef<HTMLElement>, private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((matches) => {
      if (matches.matches === true) {
        this.elRef.nativeElement.classList.add('XSmall');
      } else {
        this.elRef.nativeElement.classList.remove('XSmall');
      }
    })
  }


}
