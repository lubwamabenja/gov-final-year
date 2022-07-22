import * as Yup from 'yup';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { ABI, address } from '../../../ABI';

// ----------------------------------------------------------------------
const md5 = require('md5');

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation(true);
    console.log(email, password);
    if (email === '' || password === '') {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    const provider = new ethers.providers.JsonRpcProvider(
      'https://rinkeby.infura.io/v3/9121f4f2d407459fae297e052b1e022b'
    );
    const signer = new ethers.Wallet('ab6e71c8c01939f49eb256be099b70ea8793f7093903cb1e731b6b62049d4a24', provider);

    const contract = new ethers.Contract(address, ABI, signer);
    console.log(contract);

    contract
      .login(email, md5(password))
      .then((res) => {
        console.log(res);
        localStorage.setItem('i_email', email);
        localStorage.setItem('token', 'vG7d5npE5H');
        setIsSubmitting(false);
        navigate('/dashboard', { replace: true });
      })
      .catch((error) => {
        setIsSubmitting(false);
        // console.log(error.reason);
        toast.error(error.reason);
      });
  };

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </form>
  );
}
