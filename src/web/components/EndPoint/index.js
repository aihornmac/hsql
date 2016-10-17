import React, { Component, PropTypes } from 'react';
import { Affix } from 'antd';

import styles from './styles.scss';

export default class EndPoint extends Component {
  render () {
    return (
      <div>
        <Affix>
          <div className={styles.nav}>
            123
          </div>
        </Affix>
        {this.props.children}
      </div>
    );
  }
}

export class Nav extends Component {
  static contextTypes = {
    endPoint: PropTypes.object
  }

  componentWillMount () {
    this.context.endPoint.setChildren(this.props.children);
  }

  componentWillReceiveProps (props) {
    this.context.endPoint.setChildren(props.children);
  }
}
