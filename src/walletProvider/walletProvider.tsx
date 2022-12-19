import "./wallet.scss";
import React, {FC} from 'react';

interface face {
  
}

const WalletProvider: FC = (onChange: any) => {
  return (
    <div className="connect-btn rightPinImage" data-scroll data-scroll-sticky data-scroll-speed="-9" data-scroll-target="#js-scroll" onClick={() => onChange()}>
      <div>connect wallet</div>
    </div>
  );
};

export default WalletProvider;
