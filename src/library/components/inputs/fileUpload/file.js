import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../../constants/styles'
import { Flex } from '@chakra-ui/react'
import { BsDownload, FiDownload, ImAttachment, MdClose } from 'react-icons/all'
import { Text } from '../../typography/typography'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 2.5rem;
  border: 1px solid #e4e4e4;
  border-radius: 1.6rem;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const FileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.5rem;
  background-color: #faf9f9;
  border-radius: 8px;
`

const Action = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: 0.3s all;

  &:hover {
    color: ${colors.hover};
  }

  svg {
    margin-right: 0.8rem;
  }
`

const File = ({ file, downloadable, onRemove }) => {
  return (
    <Container>
      <Flex align={'center'}>
        <FileIcon>
          <ImAttachment fontSize={20} color={'#96A1A8'} />
        </FileIcon>
        <Text weight={600}>
          file 1.png
          {/*{file.path}*/}
        </Text>
      </Flex>
      {!!downloadable && (
        // <Action as={'a'} href={file.url} target={'_blank'} onClick={onRemove}>
        <Action as={'a'} href={'#'} target={'_blank'} onClick={onRemove}>
          <FiDownload fontSize={24} color={colors.primary} />
          <span>Download</span>
        </Action>
      )}
      {!!onRemove && (
        <Action type={'button'} onClick={onRemove}>
          <MdClose />
          <span>Remove</span>
        </Action>
      )}
    </Container>
  )
}

export default File
