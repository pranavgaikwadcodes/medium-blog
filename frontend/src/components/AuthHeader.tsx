import { NavLink } from 'react-router-dom'
import LabelledInputBox from './LabelledInputBox'

const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
    return (
    <>
        <div className='text-4xl font-bold'>
            {type === "signup" ? "Create an account" : "Welcome back"}
        </div>
        <div className='text-xl font-normal text-slate-500'>
            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
            <NavLink to={type === "signup" ? "/signin" : "/signup"} className={'pl-2 underline'}>{type === "signup" ? "Sign in" : "Sign up"}</NavLink>
        </div>
    </>
    )
}

export default AuthHeader