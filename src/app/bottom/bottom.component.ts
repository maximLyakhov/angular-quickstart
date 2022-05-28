import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
