import React from 'react';

import IconWithBadge from '../IconWithBadge';
import IconBullet from '../Icon/IconBullet';
import IconCup from '../Icon/IconCup';
import IconLightning from '../Icon/IconLightning';
import IconRabbit from '../Icon/IconRabbit';
import IconCalendar from '../Icon/IconCalendar';
import IconChessClock from '../Icon/IconChessClock';
import IconShield from '../Icon/IconShield';
import IconKnockout from '../Icon/IconKnockout';

export default function getTournamentIcon(tournamentType, ratingType, size) {
  switch (tournamentType) {
    case 'swiss':
      switch (ratingType) {
        case 'bullet':
          return (
            <IconWithBadge size={size}>
              <IconBullet />
              <IconCup />
            </IconWithBadge>
          );
        case 'blitz':
          return (
            <IconWithBadge size={size}>
              <IconLightning />
              <IconCup />
            </IconWithBadge>
          );
        case 'rapid':
          return (
            <IconWithBadge size={size}>
              <IconRabbit />
              <IconCup />
            </IconWithBadge>
          );
        case 'offline':
          return (
            <IconWithBadge size={size}>
              <IconCalendar />
              <IconCup />
            </IconWithBadge>
          );
        case 'classic':
          return (
            <IconWithBadge size={size}>
              <IconChessClock />
              <IconCup />
            </IconWithBadge>
          );
        default:
          return null;
      }
    case 'round_robin':
      switch (ratingType) {
        case 'bullet':
          return (
            <IconWithBadge size={size}>
              <IconBullet />
              <IconShield />
            </IconWithBadge>
          );
        case 'blitz':
          return (
            <IconWithBadge size={size}>
              <IconLightning />
              <IconShield />
            </IconWithBadge>
          );
        case 'rapid':
          return (
            <IconWithBadge size={size}>
              <IconRabbit />
              <IconShield />
            </IconWithBadge>
          );
        case 'offline':
          return (
            <IconWithBadge size={size}>
              <IconCalendar />
              <IconShield />
            </IconWithBadge>
          );
        case 'classic':
          return (
            <IconWithBadge size={size}>
              <IconChessClock />
              <IconShield />
            </IconWithBadge>
          );
        default:
          return null;
      }
    case 'knock_out':
      switch (ratingType) {
        case 'bullet':
          return (
            <IconWithBadge size={size}>
              <IconBullet />
              <IconKnockout />
            </IconWithBadge>
          );
        case 'blitz':
          return (
            <IconWithBadge size={size}>
              <IconLightning />
              <IconKnockout />
            </IconWithBadge>
          );
        case 'rapid':
          return (
            <IconWithBadge size={size}>
              <IconRabbit />
              <IconKnockout />
            </IconWithBadge>
          );
        case 'offline':
          return (
            <IconWithBadge size={size}>
              <IconCalendar />
              <IconKnockout />
            </IconWithBadge>
          );
        case 'classic':
          return (
            <IconWithBadge size={size}>
              <IconChessClock />
              <IconKnockout />
            </IconWithBadge>
          );
        default:
          return null;
      }
    default:
      return null;
  }
}
