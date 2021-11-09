import React from 'react'
import styled from '@emotion/styled'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { colors } from '../../../../library/constants/styles'
import {
  CALENDAR,
  CHILDREN_ENROLLMENT,
  CHILDREN_LIST,
  POSTED_CAMPS,
  PROFILE_SETTINGS,
  SUPPORT,
} from '../../../../library/constants/routes'
import {
  FaRegUser,
  FaUmbrellaBeach,
  FiLogOut,
  HiOutlineSupport,
  IoCalendarOutline,
  MdChildCare,
} from 'react-icons/all'
import { useSelector } from 'react-redux'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 2.5rem;
  padding-left: 2rem;
  border-left: 4px solid rgba(196, 196, 196, 0.2);
`

const NavItem = styled.li`
  position: relative;
  display: flex;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &::before {
    position: absolute;
    content: '';
    left: calc(-2rem - 4px);
    top: 0;
    height: 100%;
    width: 4px;
    background-color: ${(props) =>
      props.isActive ? colors.primary : 'transparent'};
  }
`

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${colors.text50};
  transition: 0.2s all;

  &:hover,
  &.active {
    color: ${colors.text};
  }

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 1.5rem;
  }
`

const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  color: ${colors.text50};
  font-weight: 500;
  transition: 0.2s all;

  &:hover {
    color: ${colors.text};
  }

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 1.5rem;
  }
`

const SidebarNav = () => {
  const match = useRouteMatch()
  const { isOrganizer, isParent } = useSelector(({ auth }) => auth)

  return (
    <div>
      <NavList>
        <NavItem isActive={match.path === PROFILE_SETTINGS}>
          <Link exact to={PROFILE_SETTINGS} activeClassName={'active'}>
            <FaRegUser />
            <span>Profile</span>
          </Link>
        </NavItem>
        {isOrganizer && (
          <NavItem isActive={match.path === POSTED_CAMPS}>
            <Link exact to={POSTED_CAMPS} activeClassName={'active'}>
              <FaUmbrellaBeach />
              <span>Posted Camps</span>
            </Link>
          </NavItem>
        )}
        {isOrganizer && (
          <NavItem isActive={match.path === CHILDREN_LIST}>
            <Link exact to={CHILDREN_LIST} activeClassName={'active'}>
              <MdChildCare />
              <span>Children</span>
            </Link>
          </NavItem>
        )}
        {isParent && (
          <NavItem isActive={match.path === CHILDREN_ENROLLMENT}>
            <Link exact to={CHILDREN_ENROLLMENT} activeClassName={'active'}>
              <FaUmbrellaBeach />
              <span>Children Enrollment</span>
            </Link>
          </NavItem>
        )}
        <NavItem isActive={match.path === CALENDAR}>
          <Link exact to={CALENDAR} activeClassName={'active'}>
            <IoCalendarOutline />
            <span>{isParent && 'Camps'} Calendar</span>
          </Link>
        </NavItem>
        <NavItem isActive={match.path === SUPPORT}>
          <Link exact to={SUPPORT} activeClassName={'active'}>
            <HiOutlineSupport />
            <span>Support</span>
          </Link>
        </NavItem>
      </NavList>
      <LogOutButton onClick={() => alert('fdg')}>
        <FiLogOut />
        <span>Log Out</span>
      </LogOutButton>
    </div>
  )
}

export default SidebarNav
