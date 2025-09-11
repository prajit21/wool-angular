import { Component } from '@angular/core';

import { AppIdeas } from './app-ideas/app-ideas';
import { AudioTesting } from './audio-testing/audio-testing';
import { Designer } from './designer/designer';
import { MeetUp } from './meet-up/meet-up';
import { Resolutions } from './resolutions/resolutions';
import { YoutubeBlog } from './youtube-blog/youtube-blog';

@Component({
  selector: 'app-timeline',
  imports: [AppIdeas, AudioTesting, Designer, MeetUp, YoutubeBlog, Resolutions],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {}
