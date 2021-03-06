# Digpony

Angular program was used to rebuild the site of a local Portland,OR bar. 4/6/2018.

By Bryce Frazier

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5. It is a recreation of the website for a local bar, Dig A Pony, for a project. Users can view the cocktail menu, dj calendar, contact page, about page, calendar, and submit a form to request to host an event, i.e. birthday party, at the bar.  Here is the original site: http://digaponyportland.com/.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Install/Setup Instructions

(Note: you may need to install angular in the terminal)

Run git clone https://github.com/SiR-Frazier/week3review inside the terminal.

Run npm install to install necessary dependencies.

Run $ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save

Create api-keys.ts file inside of src/app folder of the project.

Copy and Paste the following inside of the api-keys.ts file:
    export const masterFirebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
    };

(Note: This will serve as a placeholder for the Firebase credentials)

Go to Firebase: https://firebase.google.com/ to acquire Firebase credentials. (Note: You may need to create an account)

Click Add Project

Enter the project name;

Click Database > Get Started;

Change ".read" and ".write" rules to "true", then click Publish.

Click on Project Overview in the navigation bar on the lefthand side;

Click Add Firebase to your web app;

Copy the code inside of the curly brackets, i.e. apiKey, authDomain, etc.

return to project and add the firebasecredentials to the api-keys.ts file inside of the var masterFirebaseConfig { }.

Run npm install again.

Run ng serve.

Go to http://localhost:4200/ in your preferred browser.

##Firebase link:

View project on Firebase here: https://code-review3-ade63.firebaseapp.com/

##Github Repository:

View the Github repository here: https://github.com/SiR-Frazier/week3review

## Technologies used

-HTML
-CSS
-Typescript/Javascript
-Angular
-jQuery
-Bootstrap
-Node

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Further Expansion
-Will look to add additional styling to the pages, specifically connect with the Instagram API for Dig A Pony and add routing to the menu page so that users can view the food, wine, etc.

## License

MIT License

Copyright (c) 2018 Bryce Frazier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
