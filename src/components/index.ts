import Page from "./Page";
import Navigation from "./Navigation";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export interface BaseComponent {
  $class: string,
  elementId: string,

  [prop: string]: any
}

export default {
  Page,
  Navigation,
  Button,
  Form,
  Input
}
