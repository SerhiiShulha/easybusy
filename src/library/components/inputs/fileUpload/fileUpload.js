import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'
import { colors } from '../../../constants/styles'
import { Text } from '../../typography/typography'
import { Flex } from '@chakra-ui/react'
import { ImAttachment, MdClose } from 'react-icons/all'
import File from './file'

export const getColor = (props) => {
  if (props.isDragAccept) {
    return colors.primary
  }
  if (props.isDragReject) {
    return colors.error
  }
  if (props.isDragActive) {
    return colors.primary80
  }
  return '#e4e4e4'
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fbfbfb;
  border-radius: 1.6rem;
  padding: 9rem 3rem;
  border: 1px dashed ${(props) => getColor(props)};
`

export const InputTrigger = styled.button`
  color: ${colors.primary};
  text-decoration: underline;
`

const FileUpload = ({ filesLimit = 5 }) => {
  const [files, setFiles] = useState([])

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'image/*',
    maxFiles: filesLimit,
    multiple: true,
  })

  const removeFile = (i) => {
    return acceptedFiles.filter((_, idx) => i !== idx)
  }

  return (
    <div>
      <div className={'mb-8'}>
        {acceptedFiles.map((file, i) => {
          return (
            <File file={file} onRemove={() => removeFile(i)} key={file.path} />
          )
        })}
      </div>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <Text size={14} weight={600}>
          Drag & Drop or{' '}
          <InputTrigger type={'button'} onClick={open}>
            Upload
          </InputTrigger>{' '}
          attachments
        </Text>
      </Container>
    </div>
  )
}

export default FileUpload
