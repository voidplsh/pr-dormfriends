import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceLink {
  label: string;
  url: string;
  note?: string;
  offline?: boolean;
  host?: 'jasper' | 'basalt';
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
    { label: 'git.elrant.team', url: 'https://git.elrant.team', note: 'forgejo', host: 'jasper', status: 'active' },
    { label: 'radio.dorm.social', url: 'https://radio.dorm.social/public/radio', note: 'azuracast', host: 'jasper', status: 'active' },
    { label: 'dorm.social', url: 'https://dorm.social', note: 'our turtkey/fediverse instance', host: 'basalt', status: 'active' },
    { label: 'cloud.dorm.social', url: 'https://cloud.dorm.social', note: 'nextcloud', host: 'jasper', status: 'active' },
    { label: 'updog.dorm.social', url: 'https://updog.dorm.social', note: 'uptime kuma', host: 'jasper', status: 'active' },
    { label: 'friends.dorm.social', url: 'https://friends.dorm.social', note: '> You are Here', host: 'jasper', status: 'active' },
    { label: 'irc.dorm.social', url: 'https://irc.dorm.social', note: 'not up yet', offline: true },
    { label: 'xmpp.dorm.social', url: 'https://xmpp.dorm.social', note: 'ejabberd, no web gui', host: 'basalt', status: 'active' },
    { label: 'matrix.dorm.social', url: 'https://matrix.dorm.social', note: 'tuwunel, no web gui', host: 'basalt', status: 'active' },
    { label: 'mumble.dorm.social', url: 'https://mumble.dorm.social', note: 'murmurd, no web gui', host: 'basalt', status: 'active' },
  ];
}
