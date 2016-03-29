import React, { PropTypes } from 'react';
import {reduxForm} from 'redux-form';

let DateSelectionForm = (props) => (
  <form className='date-selection--form' onSubmit={props.handleSubmit(onSubmit(formDefaults(props)))}>
    <select value={defaultOption(props.dates)} onChange={props.onSelect} {...props.fields.date} required>
      { showOptions(props.dates) }
    </select>
    <input type="submit" className='button secondary hollow' />
  </form>
);

function showOptions(dates) {
  return dates.map(obj => (
    <option key={obj.time} value={obj.time}>{obj.display}</option>
  ));
}

function formDefaults(props) {
  return {
    defaultDate: defaultOption(props.dates)
  };
}

function defaultOption(dates) {
  return dates[5].time;
}

function onSubmit({ defaultDate }) {
  return function(fields) {
    let selectedDate = fields.date || defaultDate;
    console.log(selectedDate);
  }
}

DateSelectionForm = reduxForm({
  form: 'DateSelectionForm',
  fields: ['date']
})(DateSelectionForm);

DateSelectionForm.displayName = 'DateSelectionForm';
DateSelectionForm.propTypes = {
  dates: PropTypes.array.isRequired
};

export default DateSelectionForm;
