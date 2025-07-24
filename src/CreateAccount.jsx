import { Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateAccount = () => {
    console.log('RENDERING...');

    const schema = Yup.object({
        name: Yup.string().required('Name is required'),
        age: Yup.number().typeError('Age must be number').integer().positive().required('Age is required').min(18, 'Age must be 18 to 30').max(30, 'Age must be 18 to 30'),
        email: Yup.string().required('Email is required').matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,5}$/, 'Invalid email'),
        password: Yup.string().required('Password is required'),
        cPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must be match')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    console.log('schema:', schema)

    const createAccountForm = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '500px',
        padding: '25px'
    }
    const handleData = (data) => {
        console.log('data:', data);
    }

    console.log('errors:', errors);

    return (
        <Paper component='form' className='create-contact-form' style={createAccountForm} elevation={3} onSubmit={handleSubmit(handleData)} >
            {/* <Typography variant='h4' textAlign='center'>Create Tag</Typography> */}
            <TextField
                label='Name'
                {...register('name')}
                helperText={errors?.name?.message}
                error={!!errors?.name}
            ></TextField>
            <TextField
                label='Age'
                {...register('age')}
                helperText={errors?.age?.message}
                error={!!errors?.age}
            ></TextField>
            <TextField
                label='Email'
                {...register('email')}
                helperText={errors?.email?.message}
                error={!!errors?.email}
            ></TextField>
            <TextField
                label='Password'
                {...register('password')}
                helperText={errors?.password?.message}
                error={!!errors?.password}
            ></TextField>
            <TextField
                label='Confirm Password'
                {...register('cPassword')}
                helperText={errors?.cPassword?.message}
                error={!!errors?.cPassword}
            ></TextField>
            <Button type='submit' variant='contained'>Sumbit</Button>
        </Paper>
    )

}
export default CreateAccount;