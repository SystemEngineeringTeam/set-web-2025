import bbq from '@/assets/top/bbq.webp';
import budougariBbq from '@/assets/top/budougari-bbq.webp';
import gakusai3 from '@/assets/top/gakusai3.webp';
import syscat from '@/assets/top/syscat.webp';
import benkyokai from '@/assets/top/benkyokai.webp';
import budougari from '@/assets/top/budougari.webp';
import geekcampNagoya2024 from '@/assets/top/geekcamp-nagoya2024.webp';
import opencampus from '@/assets/top/opencampus.webp';
import xmas from '@/assets/top/xmas.webp';
import benkyokai2 from '@/assets/top/benkyokai2.webp';
import gakusai from '@/assets/top/gakusai.webp';
import halloween from '@/assets/top/halloween.webp';
import opencampus2 from '@/assets/top/opencampus2.webp';
import xmas2 from '@/assets/top/xmas2.webp';
import benkyokai3 from '@/assets/top/benkyokai3.webp';
import gakusai2 from '@/assets/top/gakusai2.webp';
import halloween2 from '@/assets/top/halloween2.webp';
import retoro from '@/assets/top/retoro.webp';
import xmas3 from '@/assets/top/xmas3.webp';
import defaultThumbnail from '@/assets/posts/default.webp';

export const PRELOAD_IMAGE_MAP = {
  hero: '/public/hero.webp',
  setIcon: '/public/set.webp',
};

export const IMAGE_MAP = {
  bbq,
  budougariBbq,
  gakusai3,
  syscat,
  benkyokai,
  budougari,
  geekcampNagoya2024,
  opencampus,
  xmas,
  benkyokai2,
  gakusai,
  halloween,
  opencampus2,
  xmas2,
  benkyokai3,
  gakusai2,
  halloween2,
  retoro,
  xmas3,
} as const;
export const IMAGES = Object.values(IMAGE_MAP);

export const DEFAULT_POST_THUMBNAIL = defaultThumbnail;
