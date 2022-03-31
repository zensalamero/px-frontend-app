import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

function EditorRatio(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M19.3332 14.333H17.6665V15.9997H19.3332V14.333ZM19.3332 17.6663H17.6665V19.333H19.3332V17.6663ZM12.6665 14.333H10.9998V15.9997H12.6665V14.333ZM15.9998 14.333H14.3332V15.9997H15.9998V14.333ZM22.6665 9.33301H9.33317C8.4165 9.33301 7.6665 10.083 7.6665 10.9997V20.9997C7.6665 21.9163 8.4165 22.6663 9.33317 22.6663H22.6665C23.5832 22.6663 24.3332 21.9163 24.3332 20.9997V10.9997C24.3332 10.083 23.5832 9.33301 22.6665 9.33301ZM22.6665 20.9997H9.33317V10.9997H22.6665V20.9997Z"
        fill="white"
      />
    </SvgIcon>
  );
}

export default EditorRatio;
