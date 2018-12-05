import React from 'react';

import '../styles/css/story.css';

const Story = (props) => {
  const { title, url } = props;

  if(!url) {
    return false;
  }

	return (
		<div className="story">
      <a href={url} target="_blank">
  			{ title }
  		</a>
    </div>
	);
};

export default Story;
