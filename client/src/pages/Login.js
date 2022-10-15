import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();

  const url = "http://localhost:8000/api/signin";

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios({
      method: "POST",
      url: url,
      responseType: "json",
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        window.location.reload();
      })
      .catch((err) => {
        setErr(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-100 m-auto text-center" style={{ paddingTop: "40px" }}>
      <form
        onSubmit={onSubmit}
        className="container"
        style={{ maxWidth: "330px" }}
      >
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        {err && <p>{err}</p>}
        <div className="form-floating">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="email@example.com"
            style={{
              marginBottom: "-1px",
              borderBottomRightRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            ref={emailRef}
            required
          />
          <label for="email">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="yourpass123"
            style={{
              borderTopRightRadius: "0",
              borderTopLeftRadius: "0",
            }}
            ref={passwordRef}
            required
          />
          <label for="password">Password</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3 w-100 btn-lg"
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
