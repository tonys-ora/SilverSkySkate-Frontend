import { Stack, Tab, Tabs, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { memo } from 'react'

import AppIcon, { IconType } from '@/components/Core/AppIcon'
import { useDeviceType } from '@/hooks'
import { colors } from '@/theme'

interface TabContentProps {
  icon: IconType
  text: string
  showText: boolean
}
const TabLabel = styled(Stack)({
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center'
})

const TabContent = memo<TabContentProps>(({ icon, text, showText }) => (
  <TabLabel>
    <AppIcon name={icon} aria-hidden='true' />
    {showText && <Typography sx={{ fontSize: '16px', weight: 400, lineHeight: '20px' }}>{text}</Typography>}
  </TabLabel>
))

const StyledTabs = styled(Tabs, {
  shouldForwardProp: prop => prop !== 'isDesktop'
})<{ isDesktop: boolean }>(({ theme, isDesktop }) => ({
  '& .MuiTab-root': {
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.267)',
    border: `1px solid`,
    BorderColor: 'divider'
  },
  '& .MuiTabs-scroller': {
    overflow: 'visible !important'
  },

  ...theme.applyStyles('dark', {
    backgroundColor: colors.layer1Dark
  }),
  ...(!isDesktop && {
    '& .MuiTab-root': {
      padding: '7px 9px'
    }
  })
}))

export const ThemeTabs = () => {
  const { isDesktop } = useDeviceType()

  return (
    <StyledTabs value='casino' isDesktop={isDesktop} sx={{ alignItems: 'center' }}>
      <Tab
        value='casino'
        label={<TabContent icon='casino' text='Casino' showText={isDesktop}></TabContent>}
        sx={{ marginRight: '8px', padding: '8px 24px', bgcolor: 'background', border: '1px solid' }}
      />
      <Tab
        value='sports'
        label={<TabContent icon='sports' text='sports' showText={isDesktop}></TabContent>}
        sx={{ marginRight: '8px', padding: '8px 24px', bgcolor: 'background', border: '1px solid' }}
      />
    </StyledTabs>
  )
}
