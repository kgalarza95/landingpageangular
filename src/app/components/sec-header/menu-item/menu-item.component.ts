import { Component, input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../../util/menu_item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {

  public menuItems = input<MenuItem[]>();

  
}
