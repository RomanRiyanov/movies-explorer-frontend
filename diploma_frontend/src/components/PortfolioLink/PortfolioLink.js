import arrowLinkPath from '../../images/arrowLink.svg'

function PortfolioLink({text}) {
    return (
    <div>
        <div className="container_portfolioLink">
            <h2 className='tittle_portfolioLink'>{text}</h2>
            {/* <img className='arrowLink' src={arrowLinkPath} alt='Иконка стрелки'/> */}
            <a className='arrowLink' href=''>&#8599;</a>
        </div>
        <div className='portfolio_line'></div>
    </div>
    );
  }
  
  export default PortfolioLink;