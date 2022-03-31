import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

function Website(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill="white"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7357 20.9962C6.8874 20.8564 3 16.8822 3 12C3 11.9168 3.00113 11.8339 3.00337 11.7513C3.66233 11.8143 4.85637 11.9574 4.91263 12.4204C4.99049 13.0609 4.91263 13.8616 5.45805 14.1018C6.00346 14.3419 6.15932 13.1409 6.62675 13.4613C7.09418 13.7816 8.34087 14.0899 8.34087 14.6562C8.34087 15.2224 8.10715 16.1035 8.34087 16.2636C8.57458 16.4238 9.50897 17.5447 9.50921 17.7048C9.50957 17.865 9.83857 18.6794 9.7404 18.9907C9.65905 19.2487 9.24858 20.0502 8.8506 20.4146C9.75315 20.7621 10.7236 20.9659 11.7357 20.9962ZM8.28273 3.80112C9.41584 3.28656 10.6745 3 12 3C15.5115 3 18.5532 5.01097 20.0364 7.94408C20.0697 8.72412 20.0638 9.39135 20.2361 9.63274C21.1132 10.8601 18.0995 11.7043 18.5573 13.5605C18.759 14.3795 16.5528 14.1197 16.014 14.8864C15.4748 15.6527 14.1575 15.1378 13.852 14.9905C13.5466 14.8432 12.3766 15.3342 12.4789 14.4995C12.5806 13.6646 13.2923 13.6156 14.0556 13.272C14.8185 12.9287 15.9189 11.7872 15.3782 11.638C12.8323 10.9362 11.9638 8.47852 11.9638 8.47852C11.811 8.44901 11.8494 6.74109 11.1884 6.69207C10.5267 6.6428 10.1705 6.88841 9.20436 6.69207C8.23765 6.49573 8.44144 5.85744 8.28872 4.48256C8.25454 4.17416 8.25619 3.95717 8.28273 3.80112ZM20.9992 11.877C20.9997 11.918 21 11.9589 21 12C21 16.9407 17.0188 20.9515 12.0895 20.9996C16.9702 20.9503 20.9337 16.8884 20.9992 11.877Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default Website;
