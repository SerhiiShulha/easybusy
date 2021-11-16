import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'
import { Button, Stack } from '@chakra-ui/react'
import { FaRegUser } from 'react-icons/all'
import {
  deleteCurrentUserPhoto,
  updateCurrentUserPhoto,
} from '../../../../features/profile/userSlice'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-grid-system'
import { SettingsSubtitle } from '../../typography/typography'
import { toast } from 'react-toastify'

const Container = styled.div`
  width: 20rem;
`

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
  margin-bottom: 2rem;
  background-color: #fbfbfb;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  color: #838383;
  overflow: hidden;

  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    object-position: center;
  }
`

const PhotoUpload = ({ currentPhoto }) => {
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState(currentPhoto)
  const [isBase64, setIsBase64] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    try {
      window.atob(currentPhoto)
    } catch {
      setIsBase64(false)
    }
  }, [currentPhoto])

  const { acceptedFiles, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'image/*',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setPhoto(URL.createObjectURL(acceptedFiles[0]))
      setIsBase64(false)
      setIsSubmitted(false)
    },
  })

  const onDelete = async () => {
    try {
      setIsDeleting(true)
      await dispatch(deleteCurrentUserPhoto())
      setIsDeleting(false)
      setPhoto(null)
      toast.success('Photo deleted')
    } catch (e) {
      console.log(e)
    }
  }

  const onSubmit = async () => {
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])

    try {
      if (acceptedFiles.length) {
        setIsSubmitting(true)
        await dispatch(updateCurrentUserPhoto(formData))
        setIsSubmitting(false)
        setIsSubmitted(true)
        toast.success('Photo updated')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const src = isBase64 ? `data:image/jpeg;base64,${photo}` : photo

  return (
    <Col md={8} className={'mb-32'}>
      <SettingsSubtitle>Photo</SettingsSubtitle>
      <Row>
        <Col>
          <Container>
            <PhotoContainer>
              {photo ? (
                <img src={src} alt={'Avatar'} />
              ) : (
                <FaRegUser fontSize={80} />
              )}
            </PhotoContainer>
            <Stack spacing={6}>
              <Button
                type={'button'}
                variant={'action'}
                size={'m'}
                isFullWidth
                onClick={open}
              >
                Change Photo
              </Button>
              <Button
                type={'button'}
                variant={'action'}
                size={'m'}
                isFullWidth
                onClick={onDelete}
                disabled={isDeleting || !currentPhoto}
                isLoading={isDeleting}
                loadingText="Deleting"
              >
                Delete Photo
              </Button>
              <Button
                type={'button'}
                size={'m'}
                isFullWidth
                onClick={onSubmit}
                isLoading={isSubmitting}
                loadingText="Saving"
                disabled={photo === currentPhoto || isSubmitting || isSubmitted}
              >
                Save
              </Button>
            </Stack>
            <input {...getInputProps()} />
          </Container>
        </Col>
      </Row>
    </Col>
  )
}

export default PhotoUpload
