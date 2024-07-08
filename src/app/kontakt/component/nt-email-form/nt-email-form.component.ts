import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {EmailConfig, SendEmailService} from '../../service/send-email.service';

@Component({
  selector: 'nt-email-form',
  templateUrl: './nt-email-form.component.html',
  styleUrls: ['./nt-email-form.component.scss']
})
export class NtEmailFormComponent {

  emailForm = this.formBuilder.group({
    senderName: new FormControl<string>('Adaś', [Validators.required]),
    toEmail: new FormControl<string>('smieci.adam@gmail.com', [Validators.required, Validators.email]),
    subject: new FormControl<string>('elo', [Validators.required]),
    content: new FormControl<string>('eloelo', [Validators.required]),
  })

  constructor(private emailService: SendEmailService,
              private formBuilder: FormBuilder) {
  }

  submit() {
    const emailConfig: EmailConfig = {
      subject: this.emailForm.controls.subject.value ?? '',
      content: this.emailForm.controls.content.value ?? '',
      toEmail: this.emailForm.controls.toEmail.value ?? '',
      senderName: this.emailForm.controls.senderName.value ?? '',
    }
    if (this.emailForm.valid) {
      this.emailService.sendEmail(emailConfig).subscribe();
    }
  }
}
