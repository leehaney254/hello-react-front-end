import { useSelector } from "react-redux";


const Greeting = () => {


  const { greetingReducer } = useSelector((state) => state);
  return (
    <>
      {greetingReducer.loading && <h1>loading....</h1>}
      {!greetingReducer.loading && (Object.keys(greetingReducer.payload).length > 0) ? <p>{greetingReducer.payload.greeting}</p> : null}
    </>
  );
}

export default Greeting