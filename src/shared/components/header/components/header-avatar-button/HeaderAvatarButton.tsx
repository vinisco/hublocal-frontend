import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useState } from 'react';
import { StyledArrowDropDown, StyledAvatar, StyledButton } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/user/userSlice';
import { logout as logoutAuth } from '../../../../redux/auth/authSlice';

interface IHeaderButtonProps {
  userName: string;
}

export const HeaderAvatarButton: React.FC<IHeaderButtonProps> = ({
  userName,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutAuth());
  };

  return (
    <>
      <StyledButton
        color="info"
        variant="contained"
        endIcon={<StyledArrowDropDown />}
        startIcon={
          <StyledAvatar color="primary">
            {userName?.slice(0, 1) ?? ''}
          </StyledAvatar>
        }
        onClick={handleClick}
      >
        {userName}
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
