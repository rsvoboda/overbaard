import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HeaderState} from '../../../../../model/board/header/header.state';
import {Header} from '../../../../../model/board/header/header';
import {List} from 'immutable';

@Component({
  selector: 'app-kanban-view-headers',
  templateUrl: './kanban-view-headers.component.html',
  styleUrls: ['./kanban-view-headers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanViewHeadersComponent implements OnInit {

  @Input()
  headers: List<List<Header>>;

  @Input()
  boardLeftOffset = 0;

  constructor() { }

  ngOnInit() {
  }

}
