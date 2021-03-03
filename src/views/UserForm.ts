import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps>{

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.OnSetAgeClick,
      'click:.set-name': this.OnSetNameClick,
      'click:.save-model': this.OnSaveClick,
    };
  }

  OnSaveClick = (): void => {
    this.model.save();
  }

  OnSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({name});
    }

  };

  OnSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div>
                <input placeholder="${this.model.get('name')}" />   
                <button class="set-name">Change name</button>
                <button class="set-age">Set random age</button>
                <button class="save-model">Save</button>
            </div>
            `;
  }

}
