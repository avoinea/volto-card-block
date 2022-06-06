import React from 'react';
import PropTypes from 'prop-types';
import DefaultBody from './DefaultBody';

const CardBody = (props) => {
  const { variation } = props;

  const BodyComponent = variation?.template || DefaultBody;

  return <BodyComponent {...props} />;
};

CardBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default CardBody;
