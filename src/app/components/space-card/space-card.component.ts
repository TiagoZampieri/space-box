import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss']
})
export class SpaceCardComponent implements OnInit {

  @Input() worker: any;
  @Input() highlighted: boolean;
  @Input() body: boolean;

  constructor() { }

  ngOnInit() {
  }

}
