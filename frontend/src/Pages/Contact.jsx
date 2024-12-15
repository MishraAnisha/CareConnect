const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md bg-[#00004d] text-white py-8 rounded-lg">
        <h2 className="heading text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1 bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you."
              className="form__input mt-1 bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label text-white">
              Your Message
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Leave a comment."
              className="form__input mt-1 bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="btn rounded sm:w-fit bg-white text-[#00004d] hover:bg-gray-200 px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
