import React from 'react'
import {
  FaRegBell,
  FaRegUser,
  HiChevronDown,
  HiChevronRight,
} from 'react-icons/all'
import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { colors } from '../../../../constants/styles'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../../../features/auth/authSlice'
import {
  BASE,
  CALENDAR,
  CHILDREN_ENROLLMENT,
  PROFILE_SETTINGS,
  SUPPORT,
} from '../../../../constants/routes'
import { useGetCurrentUserQuery } from '../../../../../features/profile/userAPI'

const NotificationsIcon = styled(FaRegBell)`
  margin-right: 2rem;
  font-size: 1.8rem;
`

const DropdownBtn = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isLight ? '#fff' : colors.text)};
`

const UserName = styled.span`
  //color: ${colors.text};
  margin-right: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
`

const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  border-radius: 50%;
  height: 3.4rem;
  width: 3.4rem;
  background-color: #eaeeec;
  color: #838383;
`

const UserAvatarPhoto = styled.img`
  object-fit: cover;
  object-position: center;
`

const CurrentValue = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.text30};

  span {
    margin-right: 1.5rem;
  }
`

export const UserAvatar = ({ userPhoto }) => {
  return (
    <UserAvatarContainer>
      {userPhoto ? <UserAvatarPhoto src={userPhoto} /> : <FaRegUser />}
    </UserAvatarContainer>
  )
}

const MenuTrigger = ({ isLight = true, userName, userPhoto }) => {
  return (
    <DropdownBtn isLight={isLight}>
      <UserAvatar userPhoto={userPhoto} />
      <UserName>{userName || ''}</UserName>
      <HiChevronDown fontSize={14} />
    </DropdownBtn>
  )
}

const ProfileNavDropdown = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { userName, userPhoto } = useSelector(({ user }) => {
    return {
      userName: user.data?.firstName + ' ' + user.data?.lastName,
      userPhoto: user.data?.photo,
    }
  })

  const handleSignOut = () => {
    dispatch(signOut())
  }

  const isLight = location.pathname === BASE

  return (
    <Flex alignItems={'center'}>
      <NotificationsIcon style={{ color: isLight ? '#fff' : colors.text }} />
      <Menu>
        <MenuButton>
          <MenuTrigger
            isLight={location.pathname === '/'}
            userName={userName}
            userPhoto={userPhoto}
          />
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem as={Link} to={PROFILE_SETTINGS}>
              Profile
            </MenuItem>
            <MenuItem as={Link} to={CHILDREN_ENROLLMENT}>
              Children Enrollment
            </MenuItem>
            <MenuItem as={Link} to={CALENDAR}>
              Camps Calendar
            </MenuItem>
            <MenuItem as={Link} to={SUPPORT}>
              Support
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem>
              <Flex
                flex={1}
                alignItems={'baseline'}
                justifyContent={'space-between'}
              >
                <span>Language</span>
                <CurrentValue>
                  <span>English</span>
                  <HiChevronRight />
                </CurrentValue>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex
                flex={1}
                alignItems={'baseline'}
                justifyContent={'space-between'}
              >
                <span>Currency</span>
                <CurrentValue>
                  <span>USD</span>
                  <HiChevronRight />
                </CurrentValue>
              </Flex>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem onClick={handleSignOut}>Log out</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ProfileNavDropdown
