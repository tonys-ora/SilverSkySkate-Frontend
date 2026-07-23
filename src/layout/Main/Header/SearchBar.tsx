import { InputBase, styled } from '@mui/material'

import AppIcon from '@/components/Core/AppIcon'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  border: '1px solid',
  borderColor: theme.palette.divider,
  display: 'flex',
  paddingLeft: '10px',
  width: '100%',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flex: 1,
  '& .MuiInputBase-input': {
    padding: '10px 0px',
    transition: theme.transitions.create('width'),
    width: '100%',
    lineHeight: '20px'
  }
}))

export default function SearchBar() {
  return (
    <Search>
      <AppIcon name='search' color='grey' />
      <StyledInputBase placeholder='Search' />
    </Search>
  )
}
