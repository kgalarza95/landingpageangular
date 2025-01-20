import { Component, input } from '@angular/core';
import { Item } from '../../util/item';

@Component({
  selector: 'app-submenu-item',
  imports: [],
  templateUrl: './submenu-item.component.html',
  styleUrl: './submenu-item.component.scss'
})
export class SubmenuItemComponent {

  public subItems = input<Item[]>();
  
}
