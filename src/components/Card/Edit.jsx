import React from 'react';
import CardBody from './Body';
import { SidebarPortal } from '@plone/volto/components';
import CardData from './Data';
import { withBlockExtensions } from '@plone/volto/helpers';

const CardEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <>
      <CardBody {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <CardData
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(CardEdit);
