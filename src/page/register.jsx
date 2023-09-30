import {
  Card,
  Input,
  // Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);

    const userNameValue = formData.get('userName');
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    console.log(userNameValue, emailValue, passwordValue);
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
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              name="userName"
              placeholder="user Name"
              type="text"
            />
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
          {/* <Checkbox
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
          /> */}
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
          {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{' '}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>
    </div>
  );
};

export default Register;
