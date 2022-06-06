import { useTranslation } from 'react-i18next'

export const Span = (data) => {
    const {t} = useTranslation();
    const {value, className} = data;
    return(
        <span className={className}>{t(value)}</span>
    )
}

export default Span;