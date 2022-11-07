
function PortfolioLink({text, link}) {
    return (
    <div>
        <div className="container__portfolioLink">
            <a target="_blank" rel="noopener noreferrer" className='tittle__portfolioLink' href={link}>{text}</a>
            <a target="_blank" rel="noopener noreferrer" className='arrowLink' href={link}>&#8599;</a>
        </div>
        <div className='portfolio__line'></div>
    </div>
    );
  }
  
  export default PortfolioLink;