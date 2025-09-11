import { Component } from '@angular/core';

import { JobEducationDetails } from './job-education-details/job-education-details';
import { JobExperienceDetails } from './job-experience-details/job-experience-details';
import { JobPersonalDetails } from './job-personal-details/job-personal-details';
import { JobUploadFiles } from './job-upload-files/job-upload-files';
import { JobSearchFilter } from '../job-search-filter/job-search-filter';

@Component({
  selector: 'app-job-apply',
  imports: [
    JobPersonalDetails,
    JobExperienceDetails,
    JobEducationDetails,
    JobUploadFiles,
    JobSearchFilter,
  ],
  templateUrl: './job-apply.html',
  styleUrl: './job-apply.scss',
})
export class JobApply {}
