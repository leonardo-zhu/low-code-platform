import Page from "./Page";
import Navigation from "./Navigation";
import Button from "./Button";

export interface BaseComponent {
  $class: string,
  elementId: string,
  [prop: string]: any
}

export default {
  Page,
  Navigation,
  Button,
}
