import { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid2 as Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { Skeleton } from '@mui/material'

type UserStat = {
  id: string
  label: string
  value: number
}

type UserActivity = {
  id: string
  title: string
  desc: string
}

type LoadedData = {
  name: string
  role: string
  stats: UserStat[]
  activities: UserActivity[]
}

/**
 * Component ví dụ: thể hiện bố cục tương đối "nặng" với nhiều phần nội dung.
 * - Khi loading: hiển thị Skeleton theo bố cục tương ứng.
 * - Khi xong: render nội dung thật.
 */
export function ContentWithSkeleton() {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<LoadedData | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        name: 'Nguyễn Văn A',
        role: 'Product Manager',
        stats: [
          { id: 'orders', label: 'Đơn hàng', value: 128 },
          { id: 'revenue', label: 'Doanh thu', value: 57600000 },
          { id: 'customers', label: 'Khách hàng', value: 342 },
        ],
        activities: [
          { id: '1', title: 'Tạo đơn hàng mới', desc: 'Đơn #SO-10234 vừa được tạo.' },
          { id: '2', title: 'Cập nhật tồn kho', desc: 'Kho HN tăng 120 SP.' },
          { id: '3', title: 'Gửi báo giá', desc: 'Báo giá #Q-556 cho ABC Corp.' },
        ],
      })
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <Avatar>NA</Avatar>
          )
        }
        title={
          loading ? (
            <Skeleton variant="text" width={180} />
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">{data!.name}</Typography>
              <Chip size="small" label={data!.role} color="primary" />
            </Stack>
          )
        }
        subheader={loading ? <Skeleton variant="text" width={120} /> : 'Bảng điều khiển tổng quan'}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Khối biểu đồ/summary lớn */}
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={180} sx={{ borderRadius: 1 }} />
            ) : (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Hiệu suất tuần này
                </Typography>
                <LinearProgress variant="determinate" value={72} sx={{ height: 10, borderRadius: 1 }} />
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  {data!.stats.map((s) => (
                    <Box key={s.id}>
                      <Typography variant="body2" color="text.secondary">
                        {s.label}
                      </Typography>
                      <Typography variant="h6">{s.value.toLocaleString('vi-VN')}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            {/* Danh sách hoạt động gần đây */}
            {loading ? (
              <Stack spacing={1.5}>
                <Skeleton variant="text" width={160} />
                <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 1 }} />
                <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 1 }} />
                <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 1 }} />
              </Stack>
            ) : (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Hoạt động gần đây
                </Typography>
                <List>
                  {data!.activities.map((a) => (
                    <ListItem key={a.id} divider>
                      <ListItemAvatar>
                        <Avatar>{a.title.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={a.title} secondary={a.desc} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}


