import React from 'react';
import './AssetSwitchButton.scss';
import SwapArrow from '../../assets/swap-arrow.svg';

interface AssetSwitchButtonProps {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const AssetSwitchButton = ({
  disabled = false,
  size = 'medium',
  ...props
}: AssetSwitchButtonProps) => {
  const mode = disabled ? 'asset-switch-button--disabled' : '';
  return (
    <div
      className={['asset-switch-button', `asset-switch-button--${size}`, mode].join(' ')}
      {...props}
    >
      <img alt={'swapArrow'} src={SwapArrow}/>
    </div>
  );
};
