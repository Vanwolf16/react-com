import './footer.styles.scss';

export const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <div className='footer'>
            {year} copyright: NOMAD Store
        </div>
    )
}