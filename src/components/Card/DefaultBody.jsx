import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import imageBlockSVG from '@plone/volto/components/manage/Blocks/Image/block-image.svg';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getCardImageURL } from './utils';
import { MaybeWrap } from '@plone/volto/components';
import { UniversalLink } from '@plone/volto/components';
import { Card, Image } from 'semantic-ui-react';
import cx from 'classnames';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const CardDefaultTemplate = (props) => {
  const { data, isEditMode } = props;
  const intl = useIntl();
  const href = data.href?.[0];
  const image = data.preview_image?.[0];

  return (
    <>
      {!href && isEditMode && (
        <Message>
          <div className="block align center">
            <img src={imageBlockSVG} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {href && (
        <Card fluid={true}>
          <MaybeWrap
            condition={!isEditMode}
            as={UniversalLink}
            href={href['@id']}
            target={data.openLinkInNewTab ? '_blank' : null}
          >
            {(href.hasPreviewImage || href.image_field || image) && (
              <Image
                src={flattenToAppURL(getCardImageURL(href, image))}
                wrapped
                ui={false}
                alt="card image"
              />
            )}
            <Card.Content>
              {data?.head_title && <h2>{data?.head_title}</h2>}
              <Card.Header>{data?.title}</Card.Header>
              {!data.hide_description && (
                <Card.Description>{data?.description}</Card.Description>
              )}
            </Card.Content>
          </MaybeWrap>
        </Card>
      )}
    </>
  );
};

CardDefaultTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default CardDefaultTemplate;
