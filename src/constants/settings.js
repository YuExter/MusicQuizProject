import { GROUP } from './GROUP';

export const QUEST_DATA = {
  [GROUP.VAN_CANTO.label]: {
    audio: GROUP.VAN_CANTO.audio,
    variants: [
      { image: GROUP.POWER_WOLF.image, value: GROUP.POWER_WOLF.label },
      { image: GROUP.FIVE_FINGER_DEATH.image, value: GROUP.FIVE_FINGER_DEATH.label },
      { image: GROUP.VAN_CANTO.image, value: GROUP.VAN_CANTO.label },
      { image: GROUP.ENSIFERUM.image, value: GROUP.ENSIFERUM.label },
    ],
  },
  [GROUP.ENSIFERUM.label]: {
    audio: GROUP.ENSIFERUM.audio,
    variants: [
      { image: GROUP.IN_EXTREMO.image, value: GROUP.IN_EXTREMO.label },
      { image: GROUP.KORPIKLAANI.image, value: GROUP.KORPIKLAANI.label },
      { image: GROUP.ENSIFERUM.image, value: GROUP.ENSIFERUM.label },
      { image: GROUP.RAMMSTEIN.image, value: GROUP.RAMMSTEIN.label },
    ],
  },
  [GROUP.POWER_WOLF.label]: {
    audio: GROUP.POWER_WOLF.audio,
    variants: [
      { image: GROUP.RAMMSTEIN.image, value: GROUP.RAMMSTEIN.label },
      { image: GROUP.VAN_CANTO.image, value: GROUP.VAN_CANTO.label },
      { image: GROUP.FIVE_FINGER_DEATH.image, value: GROUP.FIVE_FINGER_DEATH.label },
      { image: GROUP.POWER_WOLF.image, value: GROUP.POWER_WOLF.label },
    ],
  },
  [GROUP.FIVE_FINGER_DEATH.label]: {
    audio: GROUP.FIVE_FINGER_DEATH.audio,
    variants: [
      { image: GROUP.FIVE_FINGER_DEATH.image, value: GROUP.FIVE_FINGER_DEATH.label },
      { image: GROUP.KORPIKLAANI.image, value: GROUP.KORPIKLAANI.label },
      { image: GROUP.IN_EXTREMO.image, value: GROUP.IN_EXTREMO.label },
      { image: GROUP.ENSIFERUM.image, value: GROUP.ENSIFERUM.label },
    ],
  },
  [GROUP.IN_EXTREMO.label]: {
    audio: GROUP.IN_EXTREMO.audio,
    variants: [
      { image: GROUP.RAMMSTEIN.image, value: GROUP.RAMMSTEIN.label },
      { image: GROUP.IN_EXTREMO.image, value: GROUP.IN_EXTREMO.label },
      { image: GROUP.POWER_WOLF.image, value: GROUP.POWER_WOLF.label },
      { image: GROUP.VAN_CANTO.image, value: GROUP.VAN_CANTO.label },
    ],
  },
  [GROUP.KORPIKLAANI.label]: {
    audio: GROUP.KORPIKLAANI.audio,
    variants: [
      { image: GROUP.KORPIKLAANI.image, value: GROUP.KORPIKLAANI.label },
      { image: GROUP.FIVE_FINGER_DEATH.image, value: GROUP.FIVE_FINGER_DEATH.label },
      { image: GROUP.IN_EXTREMO.image, value: GROUP.IN_EXTREMO.label },
      { image: GROUP.ENSIFERUM.image, value: GROUP.ENSIFERUM.label },
    ],
  },
  [GROUP.RAMMSTEIN.label]: {
    audio: GROUP.RAMMSTEIN.audio,
    variants: [
      { image: GROUP.VAN_CANTO.image, value: GROUP.VAN_CANTO.label },
      { image: GROUP.RAMMSTEIN.image, value: GROUP.RAMMSTEIN.label },
      { image: GROUP.KORPIKLAANI.image, value: GROUP.KORPIKLAANI.label },
      { image: GROUP.POWER_WOLF.image, value: GROUP.POWER_WOLF.label },
    ],
  },
};
