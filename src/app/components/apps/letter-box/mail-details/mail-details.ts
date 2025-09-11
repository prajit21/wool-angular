import { Component, input, output } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { SvgIcon } from '../../../../shared/components/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-mail-details',
  imports: [NgbModule, FeatherIcons, SvgIcon, AngularEditorModule],
  templateUrl: './mail-details.html',
  styleUrls: ['./mail-details.scss'],
})
export class MailDetails {
  public readonly isShowMail = input<boolean>(false);

  readonly showMail = output<boolean>();

  public favorites = false;

  openMailBox() {
    this.showMail.emit(this.isShowMail());
  }

  favorite() {
    this.favorites = !this.favorites;
  }
}
