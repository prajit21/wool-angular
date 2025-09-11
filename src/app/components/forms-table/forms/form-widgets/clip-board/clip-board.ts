import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clip-board',
  imports: [FormsModule],
  templateUrl: './clip-board.html',
  styleUrl: './clip-board.scss',
})
export class ClipBoard {
  public copyText: string = '';
  public clipboardExample1: string = '';
  public highLightText: string = 'Web design is the process of creating websites';
  public copyHighlightTxt: string =
    'that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design,there are degree, diploma, postgraduate degree, and certificate programmes.A web designer is responsible for a website`s look, feel, and occasionally even content.';
  public clipboardExample2: string =
    'A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.';
  public paragraphData =
    'On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn`t, at which point all of the aspirations and dreams collapsed.';
  public basic = false;

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert('Copied');
  }

  cutFunction(id: string) {
    switch (id) {
      case 'clipboardExample1':
        navigator.clipboard.writeText(this.clipboardExample1);
        this.clipboardExample1 = '';
        break;
      case 'clipboardExample2':
        navigator.clipboard.writeText(this.clipboardExample2);
        this.clipboardExample2 = '';
        break;
      default:
        break;
    }
  }
}
