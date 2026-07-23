import {
  Button,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeviceType } from '@/hooks'
import { fetchIgnoredUsers, removeIgnoredUser } from '@/services'
import { IgnoredUser } from '@/types'
import { getRelativeTimeString } from '@/utils'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.paper
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`& .${tableCellClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.background.default}`
  },
  '&:nth-of-type(even)': {
    border: `1px solid ${theme.palette.divider}`
  }
}))

export function IgnoredUsers() {
  const navigate = useNavigate()
  const { isMobile } = useDeviceType()
  const [ignoredUsers, setIgnoredUsers] = useState<IgnoredUser[]>([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchIgnoredUsers()
        setIgnoredUsers(data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [navigate])

  const handleRemove = async (id: string) => {
    try {
      const data = await removeIgnoredUser({ id })
      setIgnoredUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ borderRadius: '12px' }} aria-label='customized table'>
        <TableHead sx={{ display: { xs: 'none', sm: 'table-header-group' } }}>
          <TableRow>
            <StyledTableCell align='left'>
              <Typography color='secondary'>Username</Typography>
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Typography color='secondary'>Last Used</Typography>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <Typography color='secondary'>Action</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ignoredUsers.map(row => (
            <StyledTableRow key={row._id}>
              {isMobile ? (
                <StyledTableCell>
                  <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack>
                      <Typography color='default'>{row.user.username}</Typography>
                      <Typography color='grey'>{getRelativeTimeString(row.createdAt)}</Typography>
                    </Stack>
                    <Button>
                      <Typography color='primary'>Remove</Typography>
                    </Button>
                  </Stack>
                </StyledTableCell>
              ) : (
                <>
                  <StyledTableCell component='th' scope='row'>
                    <Typography color='default'>{row.user.username}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='left' sx={{ width: '170px' }}>
                    <Typography color='grey'>{getRelativeTimeString(row.createdAt)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='right' sx={{ width: '170px' }}>
                    <Button onClick={e => handleRemove(row._id)}>
                      <Typography color='primary'>Remove</Typography>
                    </Button>
                  </StyledTableCell>
                </>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
