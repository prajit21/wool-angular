import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { contact } from '../../../../shared/data/data/contact';
import { Contact, ContactDetails } from '../../../../shared/interface/contact';
import { ContactHistory } from '../contact-history/contact-history';
import { ContactPrintModal } from '../contact-print-modal/contact-print-modal';
import { EditContactDetails } from '../edit-contact-details/edit-contact-details';

@Component({
  selector: 'app-contact-details',
  imports: [EditContactDetails, ContactHistory, CommonModule],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetail {
  private modal = inject(NgbModal);

  readonly activeTab = input<string>();

  public contact = contact;
  public contactDetails: ContactDetails[];
  public editContactDetails: ContactDetails;
  public contactData: Contact;
  public contactTitle: string;

  public edit: boolean = false;
  public history: boolean = false;

  ngOnChanges() {
    this.contact.filter(data => {
      if (data.value == this.activeTab()) {
        if (data.data) {
          this.contactDetails = data.data;
          this.contactData = data;
        }
      }
    });
  }

  changeDetails(details: ContactDetails) {
    this.editContactDetails = details;
    if (!details.active) {
      this.contact.filter(data => {
        data.data?.forEach(subData => {
          if (data.data?.includes(details)) {
            subData.active = false;
          }
        });
      });
      details.active = !details.active;
    }
  }

  editForm(details: ContactDetails) {
    this.edit = true;
    this.editContactDetails = details;
  }

  editValue(value: boolean) {
    this.edit = value;
  }

  deleteContact(value: ContactDetails, index: number) {
    Swal.fire({
      text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#EFEFEE !important',
      confirmButtonColor: 'var(--theme-deafult)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
        this.contactDetails.splice(this.contactDetails.indexOf(value), 1);
        if (index == this.contactDetails.length) {
          if (this.contactDetails.length > 0) {
            this.contactDetails[0].active = true;
          }
        }
        if (this.contactDetails.length != index) {
          this.contactDetails[index].active = true;
        }
      } else {
        Swal.fire('', 'Your contact is safe!');
      }
    });
  }

  openHistory() {
    this.history = !this.history;
  }

  getHistory(value: boolean) {
    this.history = value;
  }

  printContact(details: ContactDetails) {
    const print = this.modal.open(ContactPrintModal, {
      size: 'm',
      centered: true,
      windowClass: 'modal-bookmark',
    });
    print.componentInstance.printDetails = details;
  }
}
