import React from 'react';
import { Button, Drawer } from 'antd';
    import { useState } from 'react';

const Setting = () => {
    const [open, setOpen] = useState(false);
      const [childrenDrawer, setChildrenDrawer] = useState(false);
      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const showChildrenDrawer = () => {
        setChildrenDrawer(true);
      };
      const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
      };
  return (
    <div>
<Button type="primary" onClick={showDrawer}>
            Open drawer
          </Button>
          <Drawer title="Multi-level drawer" width={520} closable={false} onClose={onClose} open={open}>
            <Button type="primary" onClick={showChildrenDrawer}>
              Two-level drawer
            </Button>
            <Drawer
              title="Two-level Drawer"
              width={320}
              closable={false}
              onClose={onChildrenDrawerClose}
              open={childrenDrawer}
            >
              This is two-level drawer
            </Drawer>
          </Drawer>
    </div>
  )
};
export default Setting