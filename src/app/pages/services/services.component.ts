import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceLink {
  label: string;
  url?: string;
  note?: string;
  offline?: boolean;
  host?: 'jasper' | 'basalt' | 'enterprise' | 'pages';
  status?: 'active';
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: ServiceLink[] = [
    {
      label: 'dorm.social',
      url: 'https://dorm.social',
      note: 'our turtkey/fediverse instance',
      host: 'basalt',
      status: 'active',
    },
    { label: 'git.elrant.team', url: 'https://git.elrant.team', note: 'forgejo', host: 'jasper', status: 'active' },
    {
      label: 'radio.dorm.social',
      url: 'https://radio.dorm.social/public/radio',
      note: 'azuracast',
      host: 'jasper',
      status: 'active',
    },

    {
      label: 'cloud.dorm.social',
      url: 'https://cloud.dorm.social',
      note: 'nextcloud',
      host: 'jasper',
      status: 'active',
    },
    {
      label: 'updog.dorm.social',
      url: 'https://updog.dorm.social',
      note: 'uptime kuma',
      host: 'jasper',
      status: 'active',
    },
    {
      label: 'friends.dorm.social',
      url: 'https://friends.dorm.social',
      note: '> You are Here',
      host: 'pages',
      status: 'active',
    },

    {
      label: 'xmpp.dorm.social',
      url: '',
      note: 'ejabberd, no web gui',
      host: 'basalt',
      status: 'active',
    },
    {
      label: 'matrix.dorm.social',
      url: '',
      note: 'tuwunel, no web gui',
      host: 'basalt',
      status: 'active',
    },
    {
      label: 'mumble.dorm.social',
      url: '',
      note: 'murmurd, no web gui',
      host: 'basalt',
      status: 'active',
    },
    { label: 'irc.dorm.social', url: '', note: 'not up yet', host: 'enterprise', offline: true },
  ];
}
