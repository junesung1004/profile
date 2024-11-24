const Contact: React.FC = () => {
  return (
    <section className="flex flex-col  justify-center items-center gap-16 w-full mb-32  m-auto pb-16 p-10">
      <h1 className="text-2xl sm:text-6xl font-bold mb-0 sm:mb-20 hide w-[330px] text-center ">📧 Contact</h1>

      <article className="flex flex-wrap items-center gap-16">
        <div className="flex-1 flex flex-col items-center gap-3 p-10 sm:p-20 border shadow-lg min-w-[330px] sm:min-w-[360px]">
          <h3 className="font-light text-3xl">C O N T A C T</h3>
          <p className="text-neutral-400">Thank you : )</p>
          <img src={process.env.PUBLIC_URL + "/images/contact.jpg"} alt="이메일 송부 이미지" width={350} />
        </div>

        <div className="flex-1 min-w-[260px] sm:min-w-[360px]">
          <form className="flex flex-col gap-6" action="MAILTO:junesung1004@gmail.com" method="post" encType="text/plain">
            <input name="name" id="name" className="border-2 border-gray-400 p-3 pl-6 w-full" type="text" placeholder="Name" autoComplete="on" />
            <input name="title" id="title" className="border-2 border-gray-400 p-3 pl-6 w-full" type="text" placeholder="Title" autoComplete="on" />
            <textarea name="contant" id="contant" className="border-2 border-gray-400 p-3 pl-6 w-full" rows={17} placeholder="Message..."></textarea>
            <button className="w-full bg-sky-800 text-white text-lg h-20 transition duration-300 hover:bg-sky-950" type="submit">
              S E N D
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
