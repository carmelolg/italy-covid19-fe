import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Italia', type: 'link', icon: 'outlined_flag' },
  { state: 'region', name: 'Regioni', type: 'link', icon: 'domain' },
  { state: 'district', name: 'Province', type: 'link', icon: 'location_city' },
  { state: 'vaccine', name: 'Vaccini', type: 'link', icon: 'filter_vintage' },
  { state: 'info', name: 'Info', type: 'link', icon: 'info' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
