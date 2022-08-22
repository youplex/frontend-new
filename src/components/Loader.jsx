
const  Loader = ({ message = 'Loading please wait'}) => {
  return (
    <>
      <div id="spinner" className="loader-container">
        <div className="loading" />
      </div>
      <p>{message}</p>
    </>
  );
}
export default Loader;