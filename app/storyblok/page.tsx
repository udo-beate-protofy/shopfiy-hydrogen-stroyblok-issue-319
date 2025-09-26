import {StoryblokComponent} from '@storyblok/react';
import {FC} from 'react';

import {Page} from '.storyblok/types/storyblok-components';

interface StoryblokPageProps {
  blok: Page;
}

export const StoryblokPage: FC<StoryblokPageProps> = ({blok}) => (
  <main key={blok._uid} className="px-4">
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
