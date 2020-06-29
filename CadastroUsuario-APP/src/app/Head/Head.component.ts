import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-Head',
  templateUrl: './Head.component.html',
  styleUrls: ['./Head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
