import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <div>
            <Alert key={'success'} variant={'success'}>
                Deseas conocer mas sobre world of warcraft? Haz click en el siguiente {' '}
                <Alert.Link  href="https://worldofwarcraft.com/" target="_blank">enlace.</Alert.Link>
            </Alert>
            <div className='footer'>Powered By ProgramaThor</div>
        </div>
    );
};

export default Footer;
