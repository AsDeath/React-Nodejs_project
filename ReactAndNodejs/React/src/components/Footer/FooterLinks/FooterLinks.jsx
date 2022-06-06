import FooterColumns from "./FooterColumns/FooterColumns";

export const FooterLinks = (data) => {
    const {values} = data;
    return(
        <div className="footer-links w-2/5 pr-3">
            <FooterColumns values={values} />
        </div>
    )
}

export default FooterLinks;