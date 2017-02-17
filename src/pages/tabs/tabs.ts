import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = HomePage;
tab1Root: any = FavoritesPage;
tab2Root: any = MapPage;
tab3Root: any = SearchPage;

  constructor() {

  }
}
