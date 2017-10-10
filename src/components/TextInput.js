import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import cns from 'classnames';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.showLabel = this.showLabel.bind(this);
    this.hideLabel = this.hideLabel.bind(this);
    this.state = {
      isFocused: props.initFocus,
      isChanged: false,
    }
  }
  render() {
    const { showingDisabledText, isFocused } = this.state;
    const { disabled, disabledClickText, errors, focusText, initFocus,
            label, persistLabel, placeholder, property, type, unit,
            value, ...other } = this.props;

    const show = cns('TextInput', property, {
                         'error': errors,
                         'populated': value,
                         'disabled': disabled,
                         'focused': isFocused
                          });

    const magic = cns('magic-label', {
                        'populated': value || persistLabel,
                        'focused': isFocused
                                              });

    const backupName = property ? (property[0].toUpperCase() + property.slice(1)) : null;

    return (
      <div className={ show }>
        <div className='relative w-100'>
          <p className={ magic }>{ label || backupName }</p>
          <input required className='w-90 mt2 mb5'
            type={ type || 'text' }
            value={ value }
            name={ this.props.name}
            placeholder={ placeholder || label || backupName }
            disabled={ disabled }
            id={ property }
            onFocus={ this.showLabel }
            onBlur ={ this.hideLabel }
            ref={(input) => { this.fancyInput = input }}
            { ...other } />
            { unit ? this.renderUnitComponent() : null }
        </div>
      </div>
    )
  }

  showLabel() {
    this.setState({ isFocused: true });
  }

  hideLabel() {
    this.setState({ isFocused: false });
  }

}

TextInput.propTypes = {
  property: PropTypes.string,
  updateChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
  unit: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  initFocus: PropTypes.bool,
  persistLabel: PropTypes.bool,
  focusText: PropTypes.string
}

export default TextInput;