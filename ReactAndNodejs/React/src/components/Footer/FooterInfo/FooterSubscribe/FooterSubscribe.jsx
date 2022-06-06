import { useTranslation } from 'react-i18next'
export const FooterSubscribe = () => {
    const {t} =  useTranslation();
    return(
        <div className="footer-subscribe min-w-fit flex flex-col items-center justify-around">
            <h2 className="footer-title mb-5 text-lg text-left">{t("Subscribe to newsletter")}</h2>
            <form className="footer-form flex justify-center mb-6">
                <input className="mr-5 p-3 outline-0 border-0 leading-6" type="text" placeholder={t("Your email")}/>
                <input className="text-sm bg-[#131213] pt-4 pb-4 pl-5 pr-5 border-2 rounded-lg border-[#706f70] cursor-pointer uppercase" type="submit" value="Subscribe" />
            </form>
        </div>
    )
}

export default FooterSubscribe;