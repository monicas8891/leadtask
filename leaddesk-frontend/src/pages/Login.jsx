import { useState } from "react";
import api from "../services/api.js";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {
                username,
                password
            });

            localStorage.setItem("token", response.data.token);

        //    alert("Login Successful!");
            window.location.href = "/admin";

        } catch (error) {

            alert("Invalid Username or Password");

        }
    };

    return (

        <div className="container mt-5">

            <div className="card p-4 shadow">

                <h2 className="text-center mb-4">
                    Admin Login
                </h2>

                <form onSubmit={login}>

                    <input
                        className="form-control mb-3"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="btn btn-primary w-100">
                        Login
                    </button>

                </form>

            </div>
            <footer className="text-center mt-5 py-3 border-top">
                <p className="mb-0">
                    Built for{" "}
                    <a
                        href="https://digitalheroesco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Digital Heroes Training Task
                    </a>
                </p>
            </footer>
        </div>

    );
}

export default Login;