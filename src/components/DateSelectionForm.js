import React, { PropTypes } from 'react';
import {reduxForm} from 'redux-form';

let DateSelectionForm = (props) => (
  <form className='date-selection--form' onSubmit={props.handleSubmit(onSubmit(props, formDefaults(props)))}>
    <select value={defaultOption(props.dates)} onChange={props.onSelect} {...props.fields.date} required>
      { showOptions(props.dates) }
    </select>
    <input type="submit" className='button secondary hollow' value={props.buttonText} />
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
  return dates[4].time;
}

function onSubmit({ onDateSelected }, { defaultDate }) {
  return function(fields) {
    let selectedDate = fields.date || defaultDate;
    onDateSelected(selectedDate);
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
