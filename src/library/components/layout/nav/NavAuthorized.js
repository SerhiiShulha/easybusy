import React from 'react'
import NavContainer, { MobileNavLink } from './NavContainer'
import { Hidden, Visible } from 'react-grid-system'
import ProfileNavDropdown, {
  UserAvatar,
} from '../ui/profileNavDropdown/profileNavDropdown'
import {
  CALENDAR,
  CHILDREN_ENROLLMENT,
  PROFILE_SETTINGS,
} from '../../../constants/routes'
import { Divider, Flex } from '@chakra-ui/react'
import { Text } from '../../typography/typography'
import { useSelector } from 'react-redux'
import { colors } from '../../../constants/styles'
import ErrorBoundary from '../../errorBoundary/ErrorBoundary'

const MobileMenuItems = () => {
  const { userName, userPhoto } = useSelector(({ user }) => {
    return {
      userName: user.data.firstName + ' ' + user.data.lastName[0] + '.',
      userPhoto: user.data.photo,
    }
  })
  return (
    <>
      <Flex justify={'space-between'} align={'center'} pl={8} mb={10}>
        <Text weight={600} size={'2.4rem'} lineHeight={1} color={colors.text50}>
          {userName}
        </Text>
        <UserAvatar userPhoto={userPhoto} />
      </Flex>
      <MobileNavLink to={PROFILE_SETTINGS}>Profile</MobileNavLink>
      <MobileNavLink to={''}>Notifications</MobileNavLink>
      <MobileNavLink to={CHILDREN_ENROLLMENT}>
        Children Enrollment
      </MobileNavLink>
      <MobileNavLink to={CALENDAR}>Camps Calendar</MobileNavLink>
      <MobileNavLink to={''}>Support</MobileNavLink>
      <Divider mb={10} />
      <MobileNavLink to={''}>Log Out</MobileNavLink>
    </>
  )
}

const NavAuthorized = () => {
  return (
    <NavContainer mobileMenu={<MobileMenuItems />}>
      <Hidden xs>
        {/*<ErrorBoundary>*/}
        <ProfileNavDropdown />
        {/*</ErrorBoundary>*/}
      </Hidden>
    </NavContainer>
  )
}

export default NavAuthorized
