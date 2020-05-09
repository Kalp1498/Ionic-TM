import { NgForm, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor() { }

  messageValue = '';

  ngOnInit() {
  }

  feedbackForm() {
    console.log(this.messageValue)
  }

}
