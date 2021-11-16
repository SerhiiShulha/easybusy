import React, { useEffect, useState } from 'react'
import { SettingsPageTitle } from '../../../../library/components/typography/typography'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-grid-system'
import { getCurrentUser } from '../../userSlice'
import PhotoUpload from '../../../../library/components/inputs/fileUpload/photoUpload'
import Spinner from '../../../../library/components/spinner/spinner'
import AddressSettings from './components/addressSettings'
import ProfileInfoSettings from './components/profileInfoSettings'

const ProfileSettings = () => {
  const dispatch = useDispatch()
  const { isParent, isOrganizer } = useSelector(({ auth }) => auth)
  const { data: userData } = useSelector(({ user }) => user)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      await dispatch(getCurrentUser())
      setIsLoading(false)
    }

    getData()
  }, [])

  const role = isParent ? 'Parent' : isOrganizer ? 'Organizer' : ''
  return (
    <Row>
      {!isLoading ? (
        <>
          <Col md={12} className={'mb-24'}>
            <SettingsPageTitle>{role} Profile Information</SettingsPageTitle>
          </Col>
          <PhotoUpload currentPhoto={userData.photo} />
          <ProfileInfoSettings />
          {isParent && <AddressSettings />}
        </>
      ) : (
        <Spinner />
      )}
    </Row>
  )
}

export default ProfileSettings
