// src/pages/Signup.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <div className="card p-6 w-full max-w-md space-y-4">
                <h1 className="text-2xl font-semibold text-center">Sign up</h1>
                {error && <p className="text-red-400 text-sm">{error}</p>}

                <form onSubmit={handleSignup} className="space-y-3">
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
                    <button type="submit" className="btn btn-primary w-full">Sign up</button>
                </form>

                <p className="text-center text-gray-400 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-emerald-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </section>
    );
}
