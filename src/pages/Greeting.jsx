import { useSelector } from "react-redux"

const Greeting = () => {
  useSelector((state) => state.greeting);

  return (
    <div>greeting</div>
  );
}

export default Greeting