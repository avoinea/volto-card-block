import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
  imageOverride: {
    id: 'Image override',
    defaultMessage: 'Image override',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  extra: {
    id: 'Extra info',
    defaultMessage: 'Extra info',
  },
  card: {
    id: 'Card',
    defaultMessage: 'Card',
  },
});

export const CardSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.card),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'href',
          'title',
          'description',
          'preview_image',
          'extra',
          'openLinkInNewTab',
        ],
      },
    ],

    properties: {
      href: {
        title: intl.formatMessage(messages.Source),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: [
          'Title',
          'Description',
          'hasPreviewImage',
          'image_field',
        ],
        allowExternals: true,
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      description: {
        title: intl.formatMessage(messages.description),
      },
      extra: {
        title: intl.formatMessage(messages.extra),
      },
      preview_image: {
        title: intl.formatMessage(messages.imageOverride),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
      },
      openLinkInNewTab: {
        title: intl.formatMessage(messages.openLinkInNewTab),
        type: 'boolean',
      },
    },
    required: [],
  };
};
