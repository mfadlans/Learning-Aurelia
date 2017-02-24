import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-framework';

@inject (DialogController)
export class Prompt {
  constructor(controller) {
    this.controller = controller;
    this.answer = null;

    controller.settings.centerHorizontalOnly = true;
  }

  activace(message) {
    this.message = message;
  }
}
