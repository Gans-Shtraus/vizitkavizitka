import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-black/60 border-t border-white/10 py-12 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-400">
            © 2026 NeWeb Company. Все права защищены.
          </p>
        </div>

        <div className="flex space-x-8">
          {/* Telegram */}
          <a
            href="https://t.me/Darkness_Project?text=Здравствуйте!%20Хочу%20задать%20вопрос"
            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener"
            aria-label="Написать в Telegram"
          >
            <Image
              src="/images/tgIcon.png"
              alt="Telegram"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </a>

          {/* Email */}
          <a
            href="mailto:pugachev.2013@yandex.ru?subject=Вопрос по проекту&body=Здравствуйте, у меня есть вопрос..."
            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener"
            aria-label="Отправить email"
          >
            <Image
              src="/images/pochta.png"
              alt="Email"
              width={50}
              height={50}
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+79185374922?text=Здравствуйте, у меня есть вопрос..."
            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener"
            aria-label="Написать в WhatsApp"
          >
            <Image
              src="/images/WUIcon.png"
              alt="Email"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
