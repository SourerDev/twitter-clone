import { type NextPage } from "next";
import { NewTweetForm } from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <>
      <header className="z-100 sticky top-0 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">home</h1>
      </header>
      <NewTweetForm/>
    </>
  );
};

export default Home;
