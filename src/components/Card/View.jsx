import React from 'react';
import CardBody from './Body';
import { withBlockExtensions } from '@plone/volto/helpers';

const CardView = (props) => {
  return <CardBody {...props} />;
};

export default withBlockExtensions(CardView);
