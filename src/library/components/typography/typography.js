import styled from '@emotion/styled'
import { colors, mq } from '../../constants/styles'

export const Text = styled.p`
  color: ${(props) => props.color || colors.text};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 500};
  line-height: ${(props) => props.lineHeight || 1.4};
`

export const SectionTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  line-height: 5rem;

  ${mq.xs} {
    font-size: 2.5rem;
    line-height: 1;
  }
`

export const SettingsPageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 4rem;
`

export const SettingsSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.5rem;
  margin-bottom: 3rem;
`
