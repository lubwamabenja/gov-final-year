import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { getReconcileContract } from '../common';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp({ profile }) {
  const theme = useTheme();

  const [loadingRevenue, setLoadingRevenue] = useState(false);
  const [loadingRecon, setLoadingRecon] = useState(false);
  const [revenue, setRevenue] = useState('');
  const [recon, setRecon] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoadingRevenue(true);
    setLoadingRecon(true);
    getReconcileContract()
      .getTotalRevenue()
      .then((res) => {
        setLoadingRevenue(false);
        setRevenue(parseInt(res.toString()));
        console.log(parseInt(res.toString()));
      })
      .catch((err) => {
        consolelog(err);
      });

    //===========get Reconciled Revenue =================
    getReconcileContract()
      .getReconciled()
      .then((res) => {
        setLoadingRecon(false);
        setRecon(parseInt(res.toString()));
        console.log(res);
      })
      .catch((err) => {
        setLoadingRecon(false);
        consolelog(err);
      });
  };

  //

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi <span style={{ color: 'green' }}>{profile.name} </span>, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Revenue"
              money={true}
              total={loadingRevenue ? 0 : revenue}
              icon={'ant-design:android-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Reconciled Transactions"
              total={loadingRecon ? 0 : recon}
              color="info"
              icon={'ant-design:apple-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Today Transactions"
              total={172 + recon}
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Failed Transactions" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Transactions Trend"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/08/2022',
                '02/08/2022',
                '03/08/2022',
                '04/08/2022',
                '05/08/2022',
                '06/08/2022',
                '07/08/2022',
                '08/08/2022',
                '09/08/2022',
                '10/08/2022',
                '11/08/2022',
              ]}
              chartData={[
                {
                  name: 'Reconciled',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Failed',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Pending',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Transaction Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
