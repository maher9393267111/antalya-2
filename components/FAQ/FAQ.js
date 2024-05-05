const FAQ = ({ question, answer }) => {
  return (
    <div className="">
      <hr />
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-10 p-10">
        <div className="w-full whitespace-pre-line">
          <p className="text-xl font-bold w-[100%] text-primarylight">
            {question}
          </p>
        </div>
        <div className="w-full whitespace-pre-wrap">
          <p className="">{answer}</p>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
