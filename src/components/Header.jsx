const Header = (props) => {
    return (
        <div className="title">
            <img src="favicon.ico" className="logo"/>
            <h1 className='titleColor'>{props.titulo}</h1>
            <hr/>
        </div>
    );
};

export default Header;