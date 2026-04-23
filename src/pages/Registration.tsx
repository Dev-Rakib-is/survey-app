import { useState } from "react"
import { useNavigate } from "react-router"
import api from "../app/api"
import { setCrediantial } from "../feature/auth/AuthSlice"
import { useAppDispatch } from "../app/hooks"
import { AxiosError } from 'axios';


const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await api.post('/auth/registration', formData)
            if (res.data.success) {
                dispatch(setCrediantial({
                    user: res.data.data.user,
                    token: res.data.data.token
                }))
            }
            localStorage.setItem('token', res.data.data.token);
            alert("Registration Successfull");
            navigate('/')
        } catch (error: unknown) {
            const err = error as AxiosError<{ message: string }>;
            console.error("Error", err.response?.data?.message || "Something went wrong");
        }

    }

    return (
        <div className="container mx-auto">
            <h1 className="text-black/90 dark:text-white/80 font-semibold ">Create Your Account </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className=" border-b-2 outline-0 width: '100%', marginBottom: '10px' "
                />
            </form>
        </div>

    )
}

export default Registration