abstract class EmailService {
  abstract send(message: string);
}

class smtpService extends EmailService {
  send(message: string) {
    console.log("sending via smtp: " + message);
  }
}
class mockService extends EmailService {
  send(message: string) {
    console.log("sending via mock service: " + message);
  }
}

class EmailSender {
  emailService: EmailService;

  constructor(service: EmailService) {
    this.emailService = service;
  }

  sendEmail(message: string) {
    this.emailService.send(message);
  }
}

const smtp = new smtpService();
const emailSender = new EmailSender(smtp);
emailSender.sendEmail("something");
