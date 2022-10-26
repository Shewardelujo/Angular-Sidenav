import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut, INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <!-- if you don't want to use the whole animation, [@submenu] trigger, you can
    take it off and write line *ngIf="expanded && collapsed && data.items &&
    data.items.length > 0"... notice with expanded included, so if expanded is
    true, it shows and vice versa -->

    <ul
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.7, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.7, 1)',
                height: '0'
              }
            }
      "
      *ngIf="collapsed && data.items && data.items.length > 0"
      class="sublevel-nav"
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <!-- for sub menu with sub menus -->
        <a
          class="sublevel-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length > 0"
        >
          <i class="sublevel-link-icon fas fa-circle"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{
            item.label
          }}</span>
          <i
            *ngIf="item.items && collapsed"
            class="menu-collapse-icon"
            [ngClass]="
              !item.expanded ? 'fas fa-angle-right' : 'fas fa-angle-down'
            "
          ></i>
        </a>
        <!-- for sub menu without sub menus -->

        <a
          class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routerLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <i class="sublevel-link-icon fas fa-circle"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{
            item.label
          }}</span>
        </a>
        <!-- the sub menu sub menus -->

        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({ height: '0', overflow: 'hidden' })),

      state('visible', style({ height: '*' })),
      transition('visible <=> hidden', [
        style({ overflow: 'hidden' }),
        animate('{{transitionParams}}'),
      ]),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class SublevelMenuComponent implements OnInit {
  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: [],
  };
  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  handleClick(item: any): void {
    if (!this.multiple) {
      // for sub menus
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
