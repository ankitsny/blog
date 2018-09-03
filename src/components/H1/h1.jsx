import React from 'react';

import { PropTypes } from 'prop-types';

// class H1 extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { value } = this.props || '';
//     return (
//       <h1>{value}</h1>
//     );
//   }
// }

const H1 = (props) => {
  const { value, className } = props;
  return (
    <h1 className={className}>{value}</h1>
  );
};


H1.prototype.isPureReactComponent = true;

H1.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default H1;
