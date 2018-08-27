import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { routes } from './app.routing';

@Component({
  selector: '#victoria',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = []

  constructor(private router: Router) {
    this.items = [...routes]

    router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.items.map((item) => {
          let root = event.state['_root'].children["0"].value.routeConfig;

          if (item.path === root.path && root._loadedConfig) {
            item.children = [...root._loadedConfig.routes]
          }
        })
      }
    });

    window['CorporateUi'].baseComponents();
  }
}
