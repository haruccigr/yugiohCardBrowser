# YugiohCardBrowser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

# Brief summary

Given a predefined yugioh deck (a list of cards), the user can navigate through the deck and view the card's contents.
The project comprises of 2 components (the cardNavigationComponent and the cardContentComponent) and 1 service (getCardService). The cardNavigationComponent injects the previous service and uses it to GET the data of each card and store it into an array. When the user clicks on a card, the cardContentComponent displays the information of the card selected. The communication between the 2 components, since they are siblings, is assisted by their father component "appComponent". The cardNavigationComponent has an Output eventEmitter and dispatches an event to its father with the data of the card every time the user selects a card from the list. The father then passes as an Input to cardContentComponent the data of the card to be displayed. The cardNavigationComponent and the cardContentComponent are displayed in the same page.

No routing is used since the deck list is predefined and not fetched from the API. Hence, no guard is needed.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
