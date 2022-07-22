import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// form

// @mui
import { Stack, IconButton, InputAdornment, TextField, OutlinedInput, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getAuthContract } from '../../../common';

// ----------------------------------------------------------------------
const md5 = require('md5');

export default function RegisterForm() {
  const navigate = useNavigate();

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState('individual');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [tin, setTin] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [nin, setNin] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(true);
    if (value === 'company') {
      if (tin === '' || companyName === '' || phone === '' || email === '' || password === '') {
        toast.error('Please fill in all required fields');
        return;
      }
    } else if (nin === '' || fname === '' || lname === '' || phone === '' || email === '' || password === '') {
      toast.error('Please fill in all required fields');

      return;
    }
    setLoading(true);

    if (value === 'individual') {
      getAuthContract()
        .registerUser(nin, fname, lname, email, phone, md5(password))
        .then((res) => {
          localStorage.setItem('i_email', email);
          localStorage.setItem('token', 'vG7d5npE5H');
          setLoading(false);
          toast.success('Registration Successfully');

          navigate('/dashboard/app', { replace: true });
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.error.reason);
        });
    } else {
      getAuthContract()
        .registerCompany(tin, companyName, email, phone, md5(password))
        .then((res) => {
          console.log(res);
          setLoading(false);
          localStorage.setItem('i_email', email);
          localStorage.setItem('token', 'vG7d5npE5H');
          toast.success('Registration Successfully');
          navigate('/dashboard/app', { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          toast.error(error.error.reason);
        });
    }

    // setLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl style={{ width: '100%', marginTop: '-20px' }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className="row mb-2"
        >
          <div className="row mb-2">
            <div className="col-md-6">
              <FormControlLabel value="individual" control={<Radio />} label="Individual" />
            </div>
            <div className="col-md-6">
              <FormControlLabel value="company" control={<Radio />} label="Company" />
            </div>
          </div>
        </RadioGroup>
      </FormControl>

      {value === 'company' ? (
        <>
          <div className="form-group mb-3">
            <TextField
              id="tin"
              label="TIN"
              fullWidth
              value={tin}
              onChange={(e) => {
                setTin(e.target.value);
              }}
              error={validation && tin === ''}
              helperText={validation && tin === '' && value === 'company' ? 'Please enter a valid TIN' : ''}
            />
          </div>
          <div className="form-group mb-3">
            <TextField
              id="company_name"
              label="Company Name"
              fullWidth
              value={companyName}
              error={validation && companyName === ''}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              helperText={validation && companyName === '' && value === 'company' ? 'Company Name is Invalid' : ''}
            />
          </div>
        </>
      ) : (
        <>
          <div className="form-group mb-3">
            <TextField
              id="nin"
              label="NIN"
              fullWidth
              error={validation && nin === ''}
              value={nin}
              onChange={(e) => {
                setNin(e.target.value);
              }}
              helperText={validation && nin === '' && value === 'individual' ? 'NIN is Invalid' : ''}
            />
          </div>
          <div className="mb-3">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                id="fname"
                label="First Name"
                fullWidth
                value={fname}
                error={validation && fname === ''}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                helperText={validation && fname === '' && value === 'individual' ? 'Please enter your first name' : ''}
              />
              <TextField
                id="lname"
                label="Last Name"
                fullWidth
                value={lname}
                error={validation && lname === ''}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                helperText={validation && lname === '' && value === 'individual' ? 'Please enter a valid email' : ''}
              />
            </Stack>
          </div>
        </>
      )}

      <Stack spacing={3}>
        <TextField
          id="email"
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={validation && email === ''}
          helperText={validation && email === '' ? 'Please enter a valid email' : ''}
        />

        <TextField
          id="phone"
          label="Phone"
          fullWidth
          placeholder="e.g 754000000"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          error={validation && phone === ''}
          helperText={validation && phone === '' ? 'Please enter a valid Phone Number' : ''}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            error={validation && password === ''}
            onChange={(e) => setPassword(e.target.value)}
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
            label="Password"
          />
        </FormControl>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
          Register
        </LoadingButton>
      </Stack>
    </form>
  );
}
