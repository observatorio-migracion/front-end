import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent implements OnInit {
  @Input() color: string;

  @Input() backgroundColor: string;

  constructor() {
    // backgroundColor="var(--fab-background-color)" color="var(--fab-color)"
    // this.color = '#FF0000';
    // this.backgroundColor = '#CFCFCF';
    this.color = 'var(--fab-color)';
    this.backgroundColor = 'var(--fab-background-color)';
  }

  ngOnInit(): void {
  }
}
