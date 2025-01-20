import { Component, Input, input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../util/menu_item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent /* implements OnInit */{

  //public menuItems = input<MenuItem[]>();
  /* @Input() menuItems: MenuItem[] = [];

  @Input() label: string = '';
  @Input() iconSrc: string = './assets/images/chevron.svg';

  ngOnInit() {
    console.log('HeaderComponent initialized');
    const menuItems = document.querySelectorAll<HTMLElement>('.menu-item--dropdown');
    const subMenus = document.querySelectorAll<HTMLElement>('.menu__submenu');

    function showSubmenu(index: number) {
      subMenus.forEach((submenu, i) => {
        submenu.style.display = i === index ? 'block' : 'none';
      });
    }

    menuItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        showSubmenu(index);
      });

      item.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!item.matches(':hover') && !subMenus[index]?.matches(':hover')) {
            subMenus[index].style.display = 'none';
          }
        }, 300);
      });
    });

    subMenus.forEach((submenu) => {
      submenu.addEventListener('mouseleave', () => {
        setTimeout(() => {
          const menuIndex = parseInt(submenu.getAttribute('data-submenu') || '0', 10);
          if (!submenu.matches(':hover') && !menuItems[menuIndex]?.matches(':hover')) {
            submenu.style.display = 'none';
          }
        }, 300);
      });
    });
  } */
}
