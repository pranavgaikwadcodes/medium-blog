import Quote from '../components/Quote'
import AuthHeader from '../components/AuthHeader'
import LabelledInputBox from '../components/LabelledInputBox'
import { ChangeEvent, useState } from 'react'
import { SignupInput } from '@100xdevs/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const SignUpInputs = [
  {
    id: 1,
    name: "name",
    label: 'Name',
    placeholder: 'Jhon Doe',
  },
  {
    id: 2,
    name: "username",
    label: 'email',
    placeholder: 'jhondoe@gmail.com',
  },
  {
    id: 3,
    name: "password",
    label: 'Password',
    placeholder: '******',
    type: "password"
  },
]

const Signup = () => {
  const navigate = useNavigate()
  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  })

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target
    setSignupInputs({...signupInputs, [name]: value})
  }

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupInputs)
      const jwt = response.data as string;
      localStorage.setItem("token", jwt);
      navigate("/blogs")
    } catch (error) {
      console.log(error);      
    }
  }

  return (
    <>
      <div className="grid lg:grid-cols-2">

        <div className='h-screen flex justify-center items-center flex-col'>
          <div className="w-96">
            <div className="flex justify-center items-center flex-col">
              <AuthHeader type='signup' />
            </div>
            <div className="w-full pt-10">
              {SignUpInputs.map((input, index) => <LabelledInputBox label={input.label} placeholder={input.placeholder} name={input.name} onChange={ (e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e) } key={index} type={input.type}/>)}
            </div>

            <button type="button" className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={sendRequest}
            >
              Sign up
            </button>
          </div>

        </div>

        <div className='invisible lg:visible'>
          <Quote />
        </div>
      </div>
    </>
  )
}

export default Signup