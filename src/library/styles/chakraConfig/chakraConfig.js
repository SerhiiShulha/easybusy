import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { AlertConfig } from './components/alertConfig'
import { EditableConfig } from './components/editableConfig'
import { MenuConfig } from './components/menuConfig'
import { SliderConfig } from './components/sliderConfig'
import { NumberInputConfig } from './components/numberInputConfig'
import { ModalConfig } from './components/modalConfig'
import { InputConfig } from './components/inputConfig'
import { LinkConfig } from './components/linkConfig'
import { ButtonConfig } from './components/buttonConfig'
import { TabsConfig } from './components/tabsConfig'
import { ProgressConfig } from './components/progressConfig'
import { TextareaConfig } from './components/textareaConfig'

export const theme = extendTheme({
  sizes: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1110px',
  },
  breakpoints: createBreakpoints({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }),
  fonts: {
    body: 'Inter',
    heading: 'Rota',
  },
  colors: {
    primary: {
      10: 'rgba(12, 206, 107, 0.1)',
      20: 'rgba(12, 206, 107, 0.2)',
      30: 'rgba(12, 206, 107, 0.3)',
      40: 'rgba(12, 206, 107, 0.4)',
      50: 'rgba(12, 206, 107, 0.5)',
      60: 'rgba(12, 206, 107, 0.6)',
      70: 'rgba(12, 206, 107, 0.7)',
      80: 'rgba(12, 206, 107, 0.8)',
      90: 'rgba(12, 206, 107, 0.9)',
      100: 'rgba(12, 206, 107, 1)',
    },
    hover: '#09B65F',
    accent: '#fffc52',
    text: {
      10: 'rgba(44, 66, 81, 0.1)',
      20: 'rgba(44, 66, 81, 0.2)',
      30: 'rgba(44, 66, 81, 0.3)',
      40: 'rgba(44, 66, 81, 0.4)',
      50: 'rgba(44, 66, 81, 0.5)',
      60: 'rgba(44, 66, 81, 0.6)',
      70: 'rgba(44, 66, 81, 0.7)',
      80: 'rgba(44, 66, 81, 0.8)',
      90: 'rgba(44, 66, 81, 0.9)',
      100: 'rgba(44, 66, 81, 1)',
    },
  },
  shadows: {
    outline: '0',
  },
  styles: {
    global: {
      'html, body': {
        color: 'text.100',
        fontWeight: 500,
      },
      body: {
        minHeight: '100vh',
      },
    },
  },
  components: {
    Alert: AlertConfig,
    Button: ButtonConfig,
    Editable: EditableConfig,
    Input: InputConfig,
    Link: LinkConfig,
    Menu: MenuConfig,
    Modal: ModalConfig,
    NumberInput: NumberInputConfig,
    Progress: ProgressConfig,
    Slider: SliderConfig,
    Tabs: TabsConfig,
    Textarea: TextareaConfig,
  },
})
