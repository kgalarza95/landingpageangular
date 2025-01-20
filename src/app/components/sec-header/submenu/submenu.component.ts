import { Component } from '@angular/core';
import { Item } from '../../util/item';
import { SubmenuItemComponent } from "../submenu-item/submenu-item.component";

@Component({
  selector: 'app-submenu',
  imports: [SubmenuItemComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {

  public icon: string = './assets/images/icon-navbar/chevron-right.svg';

  public submenuItems1: Item[] = [
    new Item('Product Analytics', this.icon, 'Navigate to Product Analytics', 'Measure & optimize products'),
    new Item('Warehouse Connectors', this.icon, 'Arrow pointing right', 'Sync trusted data'),
    new Item('Session Replay', this.icon, 'Arrow pointing right', 'Watch user journeys'),
    new Item('Integrations', this.icon, 'Arrow pointing right', 'Connect the tools you love'),
    new Item('Security & Privacy', this.icon, 'Arrow pointing right', 'Protect customer data'),
  ];
}
