import React, { useState } from 'react';
import { FunnelPlotOutlined } from '@ant-design/icons';
import styles from './style.less';

const Index = () => {
  const [siwtch, setSwitch] = useState(false);
  return (
    <div className={styles.container}>
      <div style={{ position: 'relative' }}>
        {siwtch && <div className={styles.filterContent}></div>}
        <FunnelPlotOutlined
          className={styles.switchIcon}
          onClick={() => setSwitch((prev) => !prev)}
        />
      </div>
      <div className={styles.canvesContent}>图里区域</div>
      <div>
        {' '}
        <FunnelPlotOutlined />
      </div>
    </div>
  );
};

export default Index;
