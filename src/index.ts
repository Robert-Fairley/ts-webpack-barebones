/**
 * Import the `Home` page from the module `App`
 */
import { Home } from './App'

/** Declare the application root element */
const APP_ROOT: HTMLElement = document.querySelector('#root');

/** Instantiate the Home page object */
const homePage = new Home();

/** Mount the App */
APP_ROOT.appendChild(homePage.render());
