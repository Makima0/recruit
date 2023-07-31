
import React, { useEffect } from 'react';
import Offline from 'offline-js'

import  './index.less'
export default function Error() {
  useEffect(() => {
    // 在组件挂载时配置 offline-js
    Offline.options = {
      onReconnect: function() {
        // 在线时的处理逻辑
        console.log('设备已重新连接到网络');
      },
      onOffline: function() {
        // 离线时的处理逻辑
        console.log('设备已断开网络连接');
      }
    };
  }, [navigator.onLine]);

  return (
    <div>
      {/* 渲染你想要的组件内容 */}
    </div>
  );
};

