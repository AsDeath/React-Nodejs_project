import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RouteLink from '../../../elements/RouteLink/RouteLink';
import { checkValidLogin } from '../Validator/Validator';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from '../../../Redux/Actions/setMessage.action';
import { postSignup } from '../../../Redux/Actions/postSignup.action';

export const Registration = () => {
    const {t} = useTranslation();
    const [textColor, setTextColor] = useState("text-white-400");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const message = useSelector(state => {
        console.log(state.message.message);
      return state.message.message;
    })

    const dispatchMessage = (mes) => {
      dispatch(setMessage(mes))
    }

    const onClickSubmit = (event) => {
        event.preventDefault();
        let errors = checkValidLogin({email: email, password: password, confirmPassword: confirmPassword});
        //setTextColor("text-white-400");
        if(errors.length > 0){
            dispatchMessage(errors);
            return;
        }
        if(password !== confirmPassword){
            dispatchMessage(["The confirm password field does not match the password field."]);
            return;
        }
        dispatch(postSignup({email: email, password: password}));
    }

    return localStorage.getItem("login") === "false" &&  (
        <div className="registration mt-48">
            <div className="bg-grey-500 flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className='show-message mt-5 text-center'>
                        {message.map((e) => {
                            return(
                                <p key={e} className={textColor + " font-bold text-lg"}>{e}</p>
                            )
                        })}
                </div>

                <form action='#' method='POST' className="px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-yellow-300">{t("Registration")}</h1>
                    <input onInput={(event) => {setEmail(event.target.value)}}
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder={t("Email address")}  required/>

                    <input onInput={(event) => {setPassword(event.target.value)}}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder={t("Password")} required/>
                    <input onInput={(event) => {setConfirmPassword(event.target.value)}}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder={t("Confirm")+ " " + t("Password")} required/>

                    <button onClick={onClickSubmit}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                    >
                        {t("Create account")}
                    </button>

                    <div className="text-center text-sm text-white mt-4">
                        {t("By signing up, you agree to the")}
                        <a className="no-underline border-b border-grey-dark text-indigo-700 ml-1 mr-1" href="#">
                            {t("Terms of Service")}
                        </a> {t("and")} 
                        <a className="no-underline border-b border-grey-dark text-indigo-700 ml-2 mr-1" href="#">
                            {t("Privacy Policy")}
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    {t("Already have an account?")}
                    <RouteLink to="/login" className="ml-2" inner={
                        <button type='button' onClick={ () => { dispatchMessage([""]) } } className='text-center py-1 px-2 rounded bg-indigo-500 text-white hover:bg-indigo-600' >
                            {t("Log in")}
                        </button>
                    } />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Registration;