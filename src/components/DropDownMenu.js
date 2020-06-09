import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

const DropDownMenu = ({ menuConfig }) => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <IconButton className={menuConfig.class} {...bindTrigger(popupState)}>
            {menuConfig.icon}
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            {menuConfig.items.map((item, key) => (
              <MenuItem key={key} onClick={(popupState.close, item.onClick)}>
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};
export default DropDownMenu;
