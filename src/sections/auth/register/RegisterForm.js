import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, TextField, OutlinedInput, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { v4 as uuidv4 } from 'uuid';
import { getAuthContract } from '../../../common';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const md5 = require('md5');

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidation(true);

    if (fname === '' || lname === '' || password === '' || email === '') {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    //=================AUTH CONTRACT =================
    getAuthContract()
      .registerUser(fname, lname, md5(password), email, 'user')
      .then((res) => {
        let myuuid = uuidv4();
        console.log(res);
        getAuthContract()
          .updateTin(myuuid, email)
          .then((res) => {
            localStorage.setItem('i_email', email);
            localStorage.setItem('token', 'vG7d5npE5H');
            localStorage.setItem('i_tin', myuuid);
            setLoading(false);
            toast.success('Registration Successfully');
            navigate('/dashboard/ugandapay');
          })
          .catch((err) => {
            console.log(err);
            // toast.error(error.error.reason);
          });

        // navigate('/dashboard/app', { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.error.reason);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
            helperText={validation && fname === '' ? 'Please enter your first name' : ''}
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
            helperText={validation && lname === '' ? 'Please enter a valid email' : ''}
          />
        </Stack>
      </div>
      <div className="mt-3">
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
        </Stack>
      </div>
      <div className="mt-3">
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
      </div>
      <div className="mt-2">
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
          Register
        </LoadingButton>
      </div>
    </form>
  );
}
