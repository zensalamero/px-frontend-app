import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

function Projects(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 19.5C3 20.3284 3.67157 21 4.5 21H21.5C22.3284 21 23 20.3284 23 19.5V8.5C23 7.67157 22.3284 7 21.5 7H11L8.43934 4.43934C8.15804 4.15804 7.7765 4 7.37868 4H4.5C3.67157 4 3 4.67157 3 5.5V19.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17.5C1 18.3284 1.67157 19 2.5 19H19.5C20.3284 19 21 18.3284 21 17.5V6.5C21 5.67157 20.3284 5 19.5 5H9L6.43934 2.43934C6.15804 2.15804 5.7765 2 5.37868 2H2.5C1.67157 2 1 2.67157 1 3.5V17.5Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default Projects;
