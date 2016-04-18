'use strict';

import React, { PropTypes } from 'react';
import moment from 'moment';

require('styles/reflection/PreviousReflections.scss');

let PreviousReflections = (props) => (
  <div className='mt30'>
    <h2 className='reflection--header'>Previous Reflections</h2>
    { renderCollection(props.reflectionCollections) }
  </div>
);

function renderCollection(list) {
  return list.map((collection) => {
    let size = collection.reflections.length;

    return <div key={collection.id}>
      <h5 className='reflection-collection--header'>On { moment(collection.createdAt).format('MMM Do, YYYY') } - { size } reflections</h5>
      { collection.reflections.map((reflection) => renderReflection(reflection)) }
    </div>;
  });
}

function renderReflection(reflection) {
  return <div key={reflection.id} className='callout reflection-collection--reflection'>
    <h5>{ reflection.name }</h5>
    <div className='reflection-collection--reflection--content' dangerouslySetInnerHTML={createMarkup(reflection.html)} />
  </div>;
}

function createMarkup(html) {
  return {__html: html};
}

PreviousReflections.displayName = 'PreviousReflections';

PreviousReflections.propTypes = {
  reflectionCollections: PropTypes.array.isRequired
};

export default PreviousReflections;
