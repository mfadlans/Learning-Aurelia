// import {DialogService} from 'aurelia-dialog';
// import {inject} from 'aurelia-framework';
// import {Prompt} from './converter/modal/my-modal';

// @inject(DialogService)

export class Login {
    header = "Login Page";
    email = '';
    password = '';
    isChecked = false;

    signup() {
        var user = { email: this.email, password: this.password, isChecked: this.isChecked }
        console.log(user);
    };

  constructor(DialogService) {
    this.DialogService = DialogService;
  }

  // openModal() {
  //   this.DialogService.open({viewModel: Prompt, model: 'Are you done ?'}).then(response => {
  //     console.log(response);

  //     if (!response.wasCancelled) {
  //       console.log('Ok');
  //     } else {
  //       console.log('Cancelled');
  //     }
  //     console.log(response.output);
  //   });
  // }






    // constructor() {
    //     this.isChecked = false;
    // }

    // submit() {
    //     console.log("isChecked: " + this.isChecked);
    // }
}
