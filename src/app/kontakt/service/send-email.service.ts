import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  constructor(private httpClient: HttpClient) {
  }

  sendEmail(emailConfig: EmailConfig): Observable<EmailConfig> {
    return this.httpClient.post<EmailConfig>('http://localhost:8010/send-email', emailConfig)
  }
}

export type EmailConfig = {
  subject: string;
  content: string;
  toEmail: string;
  senderName: string;
}
