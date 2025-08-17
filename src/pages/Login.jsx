// src/pages/Login.jsx
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <div className="card p-6 w-full max-w-md space-y-4">
                <h1 className="text-2xl font-semibold text-center">Log in</h1>
                {error && <p className="text-red-400 text-sm">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded bg-white/10 border border-white/20 outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-white/10 border border-white/20 outline-none"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-full">Log in</button>
                </form>

                <button onClick={handleGoogleLogin} className="btn w-full">
                    Continue with Google
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-emerald-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
}
