import story_1 from './story-1';
import story_2 from './story-2';
import story_3 from './story-3';
import story_4 from './story-4';
import story_5 from './story-5';
import story_6 from './story-6';
import story_7 from './story-7';
import storiesData from './data';

const storiesMap = {
    story_1,
    story_2,
    story_3,
    story_4,
    story_5,
    story_6,
    story_7,
};

export const stories = storiesData.map((story) => ({
    ...story,
    src: storiesMap[story.name],
}));
