function SendEmailButton() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=truong0345218921@gmail.com&su=Hiring%20Inquiry&body=Hi,%20I'm%20interested%20in%20working%20with%20you."
      className="bg-(--highlight-color) h-10 text-(--natural-color) flex items-center justify-center px-5 rounded-4xl cursor-pointer font-semibold duration-300 hover:bg-(--accent-color) text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Hire me
    </a>
  );
}

export default SendEmailButton;
