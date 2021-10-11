import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() receipe : Receipe
  @Output() selectedReceipe = new EventEmitter<void>()

  constructor() { }

  onSelected(){
    this.selectedReceipe.emit()
  }

  ngOnInit(): void {
  }

}
