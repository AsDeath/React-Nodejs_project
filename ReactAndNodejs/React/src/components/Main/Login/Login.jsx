import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RouteLink from '../../../elements/RouteLink/RouteLink';
import { checkValidLogin } from '../Validator/Validator';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from '../../../Redux/Actions/setMessage.action';
import { postSignin } from '../../../Redux/Actions/postSignin.action';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [textColor, setTextColor] = useState("text-white-400");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const message = useSelector(state => {
      console.log(state);
      return state.message.message;
    })
    const SetUserStorage = () => {
      const user = useSelector(state => {
        return state.auth.user;
      })
      function setStorage() {
        localStorage.setItem("login", true);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userRoles", user.roles)
        localStorage.setItem("userToken", user.accessToken);
        console.log(user);
        document.location.reload();
      }
      return user.id && setStorage();
    }

    const dispatchMessage = (mes) => {
      dispatch(setMessage(mes))
    }

    function checkLogin(arrayCLients) {
        if(arrayCLients.length > 0){
            let isExist = false;
            for(let i = 0; i < arrayCLients.length; i++){
                if(arrayCLients[i].email === email){
                    isExist = true;
                    if(arrayCLients[i].password === password){
                        localStorage.setItem("login", true);
                        document.location.reload();
                    }else{
                        dispatchMessage(["You entered the wrong email or password"])
                    }
                    break;
                }
            }
            if(isExist === false){
                dispatchMessage(["That account doesn't exist"]);
            }
          }
    }

    const onClickSubmit = (event) => {
        event.preventDefault();
        let errors = checkValidLogin({email: email, password: password});
        //setTextColor("text-white-400");
        if(errors.length > 0){
            dispatchMessage(errors);
            return;
        }

        dispatch(postSignin({email: email, password: password}));
    }
    if(localStorage.getItem("login") === "true"){
      navigate(location.pathname.slice(0,3));
      //window.location.href = "http://localhost:3006" + location.pathname.slice(0,3);
      return ("")
    }else{
    return localStorage.getItem("login") === "false" && (
<div className="login mt-36">
    <SetUserStorage />
                <div className='show-message mt-5 text-center'>
                        {message.map((e) => {
                            return(
                                <p key={e} className={textColor + " font-bold text-lg"}>{e}</p>
                            )
                        })}
                </div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-300">{t("Login")}</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" /* method="POST" */>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  {t("Email address")}
                </label>
                <input onInput={(event) => {setEmail(event.target.value)}}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={t("Email address")}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  {t("Password")}
                </label>
                <input onInput={(event) => {setPassword(event.target.value)}}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={t("Password")}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-yellow-300">
                  {t("Remember me")}
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  {t("Forgot your password?")}
                </a>
              </div>
            </div>

              <button onClick={onClickSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>
                    {t("Sign in")}
                </span>
              </button>
            <div>
                <div className="mt-4 mb-4 text-center text-white">
                    <span>{t("Create an account?")}</span>
                </div>
                <RouteLink to="/registration" inner={
                    <button type="button" onClick={ () => { dispatchMessage([""]) } } className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>
                            {t("Registration")}
                        </span>
                    </button>
                    } 
                />
            </div>
          </form>
        </div>
      </div>
</div>
    )
                  }
}

export default Login;