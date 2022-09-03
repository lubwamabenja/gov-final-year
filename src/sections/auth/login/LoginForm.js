import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// components
import Iconify from '../../../components/Iconify';
import { getAuthContract } from '../../../common';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------
const md5 = require('md5');

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [tin, setTin] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidation(true);

    if (tin === '' || password === '') {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);

    getAuthContract()
      .login(tin, md5(password))
      .then((res) => {
        localStorage.setItem('i_tin', tin);
        localStorage.setItem('token', 'vG7d5npE5H');
        setLoading(false);

        navigate('/dashboard/app');
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error.reason);
        toast.error(error.reason);
      });
    // navigate('/dashboard', { replace: true });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          id="tin"
          label="TIN"
          fullWidth
          value={tin}
          onChange={(e) => {
            setTin(e.target.value);
          }}
          error={validation && tin === ''}
          helperText={validation && tin === '' ? 'Please enter a valid tin' : ''}
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
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <RHFCheckbox name="remember" label="Remember me" /> */}
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
        Login
      </LoadingButton>
    </form>
  );
}
