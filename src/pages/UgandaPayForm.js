import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Grid,
  Container,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Select,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getPayContract, getBankContract, getEntityContract, getReconcileContract } from '../common';

import ugandaflag from './ugandaflag.jpeg';
function UgandaPayForm({ profile }) {
  var commission = 2500;

  const [customerNo, setCustomerNo] = useState('');
  const [propertyNo, setPropertyNo] = useState('');
  const [meterNo, setMeterNo] = useState('');
  const [pin, setPIN] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [account, setAccount] = useState('');
  const [message, setMessage] = useState('');

  const [validation, setValidation] = useState('');
  const [service, setService] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [method, setMethod] = useState('');
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  };

  const getCurrentTime = () => {
    let today = new Date();
    let time =
      String(parseInt(today.getHours()) >= 10 ? today.getHours() : '0' + today.getHours()) +
      ':' +
      String(parseInt(today.getMinutes()) >= 10 ? today.getMinutes() : '0' + today.getMinutes());
    return time;
  };
  const clearFields = () => {
    setService('');
    setAmount('');
    setMethod('');
    setAccount('');
    setPIN('');
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(true);

    if (!service || !amount || !method || !account || !pin) {
      console.log(service, amount, method, account, pin);
      return toast.error('Please fill in all required fields');
    } else if (parseInt(amount) < 1000 || parseInt(amount) > 10000000) {
      return toast.error('Amount is Invalid');
    }

    setLoading(true);

    //******************UG PAY ***************** */
    const transaction = await getPayContract().stampTransaction(
      amount,
      service,
      getCurrentDate(),
      profile.email,
      method,
      profile.tin,
      commission,
      getCurrentTime()
    );
    const txreceipt = await transaction.wait(1);
    //****************SAVE DATA IN VARIABLES****************
    let account_tp = account;
    let bank_tp = method;
    let ammount_tp = amount;
    let serv_tp = service;

    setMessage('');
    setLoading(false);
    clearFields();
    setValidation(false);
    toast.success('Your Payment Was Successful');

    // ***************BANK STAMPS TX***********************
    const bankTx = await getBankContract().stampTransaction(
      profile.tin,
      profile.email,
      account_tp,
      bank_tp,
      serv_tp,
      commission,
      getCurrentDate(),
      ammount_tp,
      getCurrentTime()
    );
    const banktxreceipt = await bankTx.wait(1);
    console.log('******BANK STAMP******', banktxreceipt.transactionHash);
    // ****************GET BANK COUNTER****************
    getBankContract()
      .getCounter()
      .then(async (count) => {
        console.log('-----', parseInt(count.toString()) - 1);
        const bankUpdTx = await getBankContract().updateTxHash(
          parseInt(count.toString()) - 1,
          banktxreceipt.blockNumber.toString(),
          banktxreceipt.transactionHash
        );
        const bankUpdReceipt = await bankUpdTx.wait(1);
        console.log('******BANK UPDATE HASH******', bankUpdReceipt.transactionHash);

        // ***************ENTITY STAMPS TX***********************
        const entityTx = await getEntityContract().stampTransaction(
          profile.tin,
          serv_tp,
          profile.email,
          profile.name,
          account_tp,
          bank_tp,
          getCurrentDate(),
          ammount_tp,
          getCurrentTime()
        );
        const entitytxreceipt = await entityTx.wait(1);
        console.log('******ENTITY STAMP******', entitytxreceipt.transactionHash);
        // ****************GET ENTITY COUNTER****************
        getEntityContract()
          .getCounter()
          .then(async (count) => {
            console.log('-----', parseInt(count.toString()) - 1);
            const entityUpdTx = await getEntityContract().updateTxHash(
              parseInt(count.toString()) - 1,
              entitytxreceipt.blockNumber.toString(),
              entitytxreceipt.transactionHash
            );
            const entityUpdReceipt = await entityUpdTx.wait(1);
            console.log('******ENTITY UPDATE HASH******', entityUpdReceipt.transactionHash);

            // ***************ADD RECONCILED***********************
            const reconcileTx = await getReconcileContract().addReconciled(
              ammount_tp,
              commission,
              profile.tin,
              txreceipt.transactionHash,
              banktxreceipt.transactionHash,
              entitytxreceipt.transactionHash,
              bank_tp,
              service,
              getCurrentDate(),
              getCurrentTime()
            );
            const reconciletxreceipt = await reconcileTx.wait(1);
            console.log('******RECONCILE STAMP******', reconciletxreceipt.transactionHash);

            // *************UPDATE UGANDA PAY=====
            getPayContract()
              .getCounter()
              .then(async (counter) => {
                console.log('NUM', parseInt(counter.toString()) - 1);
                // ****************UPDATE STATUS UGANDA PAY****************

                // ========updating hash and block number=======
                getPayContract()
                  .updateTxHash(
                    parseInt(counter.toString()) - 1,
                    txreceipt.blockNumber.toString(),
                    txreceipt.transactionHash
                  )
                  .then(async (upd) => {
                    console.log('******UPDATE UGANDA PAY******');
                  })
                  .catch((er) => {
                    console.log(er);
                  });
              })
              .catch((err) => {
                setLoading(false);
                setValidation(false);
                console.log(err);
              });
          })
          .catch((err) => {
            console.log('******', err);
          });
      })
      .catch((err) => {
        console.log('******', err);
      });
  };

  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={service}
                label="Service"
                onChange={handleServiceChange}
              >
                <MenuItem value={'umeme'}>Electricity Bills</MenuItem>
                <MenuItem value={'water'}>Water Bills</MenuItem>
                <MenuItem value={'police'}>Traffic Fines</MenuItem>
                <MenuItem value={'internal'}>Passport</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mt-3">
            <TextField
              id="amount"
              label="Amount."
              fullWidth
              value={amount}
              onChange={(e) => {
                const re = /^[1-9]\d*(\d+)?$/i;
                if (e.target.value === '' || re.test(e.target.value)) {
                  setAmount(e.target.value);
                }
              }}
              error={validation && amount === ''}
              helperText={validation && amount === '' ? 'Amount cant be zero' : ''}
            />
          </div>

          <div className="form-group mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Financial Institution</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={method}
                label="Financial Institution"
                onChange={handleChange}
              >
                <MenuItem value={'stanbic'}>Stanbic</MenuItem>
                <MenuItem value={'dfcu'}>DFCU</MenuItem>
                <MenuItem value={'equity'}>Equity</MenuItem>
                <MenuItem value={'centenary'}>Centenary</MenuItem>
              </Select>
            </FormControl>
          </div>
          <p className="commission"> Bank Charges:{commission}</p>

          <div className="mt-3">
            <TextField
              id="account"
              label="Account No."
              fullWidth
              value={account}
              onChange={(e) => {
                const re = /^[1-9]\d*(\d+)?$/i;
                if (e.target.value === '' || re.test(e.target.value)) {
                  setAccount(e.target.value);
                }
              }}
              error={validation && account === ''}
              helperText={validation && account === '' ? 'Account No. is Ivalid' : ''}
            />
          </div>

          <div className="mt-3">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">PIN</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={pin}
                error={validation && pin === ''}
                onChange={(e) => {
                  const re = /^[1-9]\d*(\d+)?$/i;
                  if (e.target.value === '' || re.test(e.target.value)) {
                    setPIN(e.target.value);
                  }
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="PIN"
              />
            </FormControl>
          </div>
          <div className="form-group mt-3">
            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
              Submit Payment
            </LoadingButton>
            <p>{message}</p>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <img src={ugandaflag} alt="..." className="uganda-flag" />
      </div>
    </div>
  );
}

export default UgandaPayForm;
