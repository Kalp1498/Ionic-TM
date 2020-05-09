import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input('header') header: any;

  lastX: any;
  email: string;
  userName: string;

  constructor(
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {

  }

  // handle scrolling event
  logScrolling(event) {
    if (event.detail.scrollTop > Math.max(0, this.lastX)) { // hide header
      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
    } else { // show header
      this.renderer.setStyle(this.header, 'margin-top', '0');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
    }
    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }
}