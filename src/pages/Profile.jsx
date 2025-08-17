// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // make sure you already have firebase.js
import { signOut } from "firebase/auth";

export default function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
            } else {
                navigate("/login"); // redirect if not logged in
            }
        });
        return unsubscribe;
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <section className="flex flex-col items-center justify-center p-8 space-y-4">
            <h1 className="text-3xl font-semibold">Profile</h1>
            {user ? (
                <div className="card p-6 space-y-3 w-full max-w-md text-center">
                    <p className="text-lg font-medium">Welcome, {user.displayName || user.email}</p>
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                    )}
                    <button
                        onClick={handleLogout}
                        className="btn btn-primary w-full"
                    >
                        Log out
                    </button>
                </div>
            ) : (
                <p className="text-gray-400">Loading...</p>
            )}
        </section>
    );
}
