import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard' },
  { state: 'region', name: 'Regioni', type: 'link', icon: 'domain' },
  { state: 'district', name: 'Province', type: 'link', icon: 'domain' },
  { state: 'info', name: 'Info', type: 'link', icon: 'domain' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
