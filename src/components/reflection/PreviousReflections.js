'use strict';

import React, { PropTypes } from 'react';
import moment from 'moment';

require('styles/reflection/PreviousReflections.scss');

let PreviousReflections = (props) => (
  <div className='mt30'>
    <h2 className='reflection--header'>Previous Reflections</h2>
    { renderCollection(props, props.reflectionCollections) }
  </div>
);

function renderCollection(props, list) {
  return list.map((collection) => {
    let showCollection = props.kvs.get('show-collection-' + collection.id);
    let buttonText = showCollection ? 'hide' : 'show';

    return <div key={collection.id}>
      <h5 className='reflection-collection--header'>
        On { moment(collection.createdAt).format('MMM Do, YYYY') }
        <a className='reflection-collection--show-body' onClick={toggleCollectionContents(props.actions.setKvp, collection, !showCollection)}>{buttonText}</a>
      </h5>

      <ul className={ showCollection ? 'unstyled' : 'unstyled callout' }>
        { collection.reflections.map((reflection) => renderReflection(reflection, showCollection)) }
      </ul>
    </div>;
  });
}

function renderReflection(reflection, showBody) {
  if (showBody) {
    return <li key={reflection.id} className='callout reflection-collection--reflection'>
      <h5>{ reflection.name }</h5>
      { <div className='reflection-collection--reflection--content' dangerouslySetInnerHTML={createMarkup(reflection.html)} /> }
    </li>;
  } else {
    return <li key={reflection.id}>{ reflection.name }</li>
  }
}

function toggleCollectionContents(setKvp, collection, value) {
  return function() {
    setKvp('show-collection-' + collection.id, value);
  };
}

function createMarkup(html) {
  return {__html: html};
}

PreviousReflections.displayName = 'PreviousReflections';

PreviousReflections.propTypes = {
  reflectionCollections: PropTypes.array.isRequired
};

export default PreviousReflections;
