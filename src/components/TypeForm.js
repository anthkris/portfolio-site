import React from 'react';
import * as typeformEmbed from '@typeform/embed';

class TypeForm extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, this.props.formLink, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '500px'}} />
    )
  }
}

export default TypeForm;
