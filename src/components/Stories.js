import React from 'react';

import Story from './Story';

const Stories = (props) => {
  const { stories, loadMore } = props;

	return (
		<div className="">
			{
        stories.map((story, count) => {
          return (
            <Story 
              key={`story-${count}`} 
              title={story.title} 
              url={story.url} 
            />
          ) 
        })
      }
		</div>
	);
};

export default Stories;
