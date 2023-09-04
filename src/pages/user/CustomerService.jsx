import Rating from "../../components/Rating";

function CustomerService() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  return (
    <main className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center gap-10 border rounded p-16 w-2/5">
        <h2 className="text-4xl font-bold">Feedback</h2>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center items-center gap-6 w-full"
        >
          <div className="flex flex-col justify-center items-start gap-2  w-full">
            <label htmlFor="name" className="text-lg font-semibold">
              Name
            </label>
            <div className="flex w-full gap-4">
              <input
                type="text"
                name="name"
                id="name"
                className="border rounded p-2 w-full"
              />
              <button
                type="button"
                className="py-2 px-4 min-w-max border rounded bg-red-500 text-white font-semibold hover:scale-110 transition hover:shadow-lg shadow-black"
              >
                Use my name
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start gap-2  w-full">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <div className="flex w-full gap-4">
              <input
                type="text"
                name="email"
                id="email"
                className="border rounded p-2 w-full"
              />
              <button
                type="button"
                className="py-2 px-4 min-w-max border rounded bg-red-500 text-white font-semibold hover:scale-110 transition hover:shadow-lg shadow-black"
              >
                Use my email
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start gap-2   w-full">
            <label htmlFor="subject" className="text-lg font-semibold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="border rounded p-2  w-full"
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-2 w-full">
            <label htmlFor="message" className="text-lg font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="border rounded p-2 w-full "
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-2 w-full">
            <label className="text-lg font-semibold">Rate us</label>
            <Rating />
          </div>
          <button className="py-2 px-4 mt-10 border rounded bg-red-500 text-white font-semibold hover:scale-110 transition hover:shadow-lg shadow-black">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default CustomerService;
