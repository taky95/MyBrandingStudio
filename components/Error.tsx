import style from '../styles/error.module.scss'

const Error = () :React.JSX.Element => {
  return (
    <div className={style.errorContainer}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we&apos;re currently experiencing technical difficulties.</p>
        <p>Please reload the page or try again later.</p>
    </div>
  );    
}

export default Error