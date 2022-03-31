import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

function EditorDownload(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g opacity="0.5">
        <path
          d="M2 12.999C2 12.499 2.5 11.999 3 11.999C3.5 11.999 4 12.499 4 12.999C4 13.499 4 17.999 4 17.999C4 19.1036 4.89543 19.999 6 19.999H18C19.1046 19.999 20 19.1036 20 17.999V12.999C20 12.4467 20.4477 11.999 21 11.999C21.5523 11.999 22 12.4467 22 12.999V17.999C22 20.2082 20.2091 21.999 18 21.999H6C3.79086 21.999 2 20.2082 2 17.999C2 17.999 2 13.499 2 12.999Z"
          fill="white"
        />
        <path
          d="M13 13.999C13 14.5513 12.5523 14.999 12 14.999C11.4477 14.999 11 14.5513 11 13.999V1.99902C11 1.44674 11.4477 0.999023 12 0.999023C12.5523 0.999023 13 1.44674 13 1.99902V13.999Z"
          fill="white"
        />
      </g>
      <path
        d="M16.2929 9.29191C16.6834 8.90139 17.3166 8.90139 17.7071 9.29191C18.0976 9.68244 18.0976 10.3156 17.7071 10.7061L12.7071 15.7061C12.331 16.0822 11.7264 16.0981 11.331 15.7423L6.33104 11.2423C5.92053 10.8729 5.88725 10.2406 6.25671 9.83006C6.62617 9.41955 7.25845 9.38627 7.66896 9.75573L11.9638 13.621L16.2929 9.29191Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default EditorDownload;
