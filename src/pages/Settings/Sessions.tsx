import {
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

import { IP_ADDRESS } from '@/configs'
import { useDeviceType } from '@/hooks'
import { fetchSessions, removeSession } from '@/services'
import { SessionType } from '@/types'
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

export function Sessions() {
  const { isMobile } = useDeviceType()
  const [sessionData, setSessionData] = useState<SessionType[]>([])

  const handleRemove = async (current: boolean, id: string) => {
    if (current) return
    try {
      const data = await removeSession({ id })
      setSessionData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchSessions()
        setSessionData(data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ borderRadius: '12px' }} aria-label='customized table'>
        <TableHead sx={{ display: { xs: 'none', sm: 'table-header-group' } }}>
          <TableRow>
            <StyledTableCell align='left'>
              <Typography color='grey'>Browser</Typography>
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Typography color='grey'>Near</Typography>
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Typography color='grey'>IP address</Typography>
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Typography color='grey'>Last Used</Typography>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <Typography color='grey'>Status</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessionData.map(row => (
            <StyledTableRow key={row._id}>
              {isMobile ? (
                <StyledTableCell>
                  <Typography color='default'>{row.browser}</Typography>
                  <Typography color='grey'>{row.near}</Typography>
                  <Stack direction='row' justifyContent='space-between' gap='8px'>
                    <Typography color='grey' flexGrow={1}>
                      {row.ipAddress}
                    </Typography>
                    <Typography color='grey'>{getRelativeTimeString(new Date(row.createdAt))}</Typography>
                    <Typography color={row.ipAddress === IP_ADDRESS ? 'default' : 'red'}>
                      · {row.ipAddress === IP_ADDRESS ? 'Current' : 'Remove'}
                    </Typography>
                  </Stack>
                </StyledTableCell>
              ) : (
                <>
                  <StyledTableCell component='th' scope='row'>
                    <Typography color='default'>{row.browser}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Typography color='grey'>{row.near}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Typography color='grey'>{row.ipAddress}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Typography color='grey'>{getRelativeTimeString(new Date(row.createdAt))}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Typography
                      color={row.ipAddress === IP_ADDRESS ? 'default' : 'red'}
                      sx={{ cursor: row.ipAddress === IP_ADDRESS ? 'default' : 'pointer' }}
                      onClick={() => handleRemove(row.ipAddress === IP_ADDRESS, row._id)}
                    >
                      {row.ipAddress === IP_ADDRESS ? 'Current' : 'Remove session'}
                    </Typography>
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
