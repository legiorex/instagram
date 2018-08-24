import photo_1 from './photo-1';
import photo_2 from './photo-2';
import photo_3 from './photo-3';
import photo_4 from './photo-4';
import photo_5 from './photo-5';
import photo_6 from './photo-6';
import photo_7 from './photo-7';
import photo_8 from './photo-8';
import photo_9 from './photo-9';
import photo_10 from './photo-10';
import photo_11 from './photo-11';
import photo_12 from './photo-12';
import photo_13 from './photo-13';
import photo_14 from './photo-14';
import photo_15 from './photo-15';
import photosData from './data';

const photosMap = {
    photo_1,
    photo_2,
    photo_3,
    photo_4,
    photo_5,
    photo_6,
    photo_7,
    photo_8,
    photo_9,
    photo_10,
    photo_11,
    photo_12,
    photo_13,
    photo_14,
    photo_15,
};

export const photos = photosData.map((photo) => ({
    ...photo,
    src: photosMap[photo.name],
}));
