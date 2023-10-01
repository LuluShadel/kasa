import "./tags.scss"

import React from 'react';

function Tags(props) {
  const tagsList = props.tags.map((tag, index) => (
    <div className="tags-only" key={index}>
      {tag}
    </div>
  ));

  return (
    <div className="tags">
      {tagsList}
    </div>
  );
}

export default Tags;
