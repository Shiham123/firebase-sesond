import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../context/userContext';

const Register = () => {
  const authInfo = useContext(AppContext);
  const { createUser } = authInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    createUser(emailValue, passwordValue)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        {/*  */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              name="email"
              placeholder="email here"
              type="email"
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              name="password"
              placeholder="password here"
            />
          </div>
          {/*  */}
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          {/*  */}
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
