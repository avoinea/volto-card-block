import { CardViewBlock, CardEditBlock } from './components';
import iconSVG from '@plone/volto/icons/images.svg';

const customBlocks = {
  cardBlock: {
    id: 'cardBlock',
    title: 'Card',
    icon: iconSVG,
    group: 'common',
    view: CardViewBlock,
    edit: CardEditBlock,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

const applyConfig = (config) => {
  return {
    ...config,
    blocks: {
      ...config.blocks,
      blocksConfig: {
        ...config.blocks.blocksConfig,
        ...customBlocks,
      },
    },
  };
};

export default applyConfig;
