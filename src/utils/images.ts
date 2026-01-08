import bbg1 from '@/assets/top/bbq1.png';
import bbg2 from '@/assets/top/bbq2.png';
import bbg3 from '@/assets/top/bbq3.jpg';
import begginershack1 from '@/assets/top/begginershack1.png';
import begginershack2 from '@/assets/top/begginershack2.jpg';
import benkyokai from '@/assets/top/benkyokai.png';
import bowling from '@/assets/top/bowling.JPG';
import soukai from '@/assets/top/soukai.JPG';
import syscat from '@/assets/top/syscat.png';
import undokai1 from '@/assets/top/undokai1.jpg';

const defaultThumbnail = bbg1;

export const PRELOAD_IMAGE_MAP = {
  hero: '/hero.webp',
  setIcon: '/set.webp',
};

export const IMAGE_MAP = {
  undokai1,
  benkyokai,
  bowling,
  bbg1,
  bbg2,
  bbg3,
  begginershack1,
  begginershack2,
  soukai,
  syscat,
} as const;
export const IMAGES = Object.values(IMAGE_MAP);

export const DEFAULT_POST_THUMBNAIL = defaultThumbnail;
export const DEFAULT_PRODUCT_THUMBNAIL = defaultThumbnail;

export const FOOTER_IMAGE = syscat;
