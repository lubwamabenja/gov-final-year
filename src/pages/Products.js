import { useState, useEffect } from 'react';

// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import User from './User';
import { getUmemeContract } from '../common';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [umemePayments, setUmemePayments] = useState([]);

  const getUmemePayments = () => {
    getUmemeContract()
      .getUmemePayments()
      .then((res) => {
        const payments = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < res.length; i++) {
          payments.push({
            id: res[i][0].toString(),
            customerNo: res[i][1],
            propertNo: res[i][2],
            meterNo: res[i][3],
            nin: res[i][4],
            email: res[i][5],
            amount: res[i][6].toString(),
          });
          setUmemePayments(payments);
          console.log(payments);
        }
        // console.log(res[0][1]);
        // console.log(res[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUmemePayments();
  }, []);

  return (
    <Page title="Dashboard: UMEME Payments">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          UMEME Payments
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        <ProductList products={PRODUCTS} />

        <User umemePayments={umemePayments} />
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
