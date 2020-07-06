import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Menu,
  Container,
  Image,
  Icon,
  Input,
  Label,
  Modal,
  Header,
  Button,
  Form,
  Message,
  Segment,
} from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

import catchErrors from "../utils/catchErrors";
import { login } from "../components/helpers/user/UserActions";
import ShopBanner from "../components/helpers/utils/ShopBanner";

const INITIAL_USER = {
  email: "a@a.com",
  password: "a@a.com",
};

const Login = ({ login }) => {
  const router = useRouter();
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("user", user);
    const payload = { ...user };
    setLoading(true);
    setError("");

    try {
      await login(payload, router);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Container>
        <ShopBanner />
      </Container>

      <Container text style={{ marginTop: "2rem" }}>
        <Segment padded style={{ width: "50rem" }}>
          <Header as="h2" content="Login" />
          <Message
            attached
            icon="lock"
            header="Login"
            content="Login with email and password"
            color="blue"
          />
          <Form
            onSubmit={handleLogin}
            loading={loading}
            error={Boolean(error)}
            style={{ marginTop: "1rem" }}
          >
            <Message error header="Oops!" content={error} negative />
            <Form.Input
              label="Email"
              placeholder="a@a.com"
              icon="envelope"
              iconPosition="left"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
            <Form.Input
              label="Password"
              type="password"
              icon="lock"
              iconPosition="left"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Button
              disabled={disabled}
              type="submit"
              style={{
                backgroundColor: "#ff5555",
                color: "white",
              }}
            >
              <Icon name="sign in" />
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    </>
  );
};

export default connect(null, { login })(Login);
