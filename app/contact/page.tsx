export default function Contact() {
  return (
    <main className="container flex flex-col gap-4 md:py-16 md:flex-row">
      <h2 className="text-2xl font-bold md:basis-1/2">
        Let's work together to bring your ideas to life. <br /> Contact me
        today!
      </h2>
      <form
        name="contact"
        method="POST"
        action="/success"
        className="basis-1/2 mt-8 md:mt-0"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className="block mb-4">
          <span className="block text-sm font-medium text-slate-700 dark:text-palenight-text">
            Your Name:
          </span>
          <input
            type="text"
            name="name"
            className="mt-2 block w-full px-3 py-2 border rounded-md text-sm shadow-sm bg-white border-slate-300 dark:bg-palenight-background dark:border-palenight-text"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-slate-700 dark:text-palenight-text">
            Your Email:
          </span>
          <input
            type="email"
            name="email"
            className="mt-2 block w-full px-3 py-2 border rounded-md text-sm shadow-sm bg-white border-slate-300 dark:bg-palenight-background dark:border-palenight-text"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-slate-700 dark:text-palenight-text">
            Message:
          </span>
          <textarea
            name="message"
            rows={5}
            className="mt-2 block w-full px-3 py-2 border rounded-md text-sm shadow-sm bg-white border-slate-300 dark:bg-palenight-background dark:border-palenight-text"
          ></textarea>
        </label>
        <button
          type="submit"
          className="block mx-auto md:mr-0 md:ml-auto mt-2 px-8 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-md dark:bg-palenight-background dark:border-palenight-text"
        >
          Send
        </button>
      </form>
    </main>
  );
}
