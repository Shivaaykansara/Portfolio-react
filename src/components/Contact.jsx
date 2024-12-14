const Contact = () => {
  return (
    <section id="Contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white text-center">
          Contact
        </h1>

        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium  text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none bg-blue-800 rounded-lg border border-gray-200 hover:bg-[#1e2b5c] text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
