export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-400">
            © 2026 MyPortfolio. Все права защищены.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://t.me/Darkness_Project?text=Здравствуйте!%20Хочу%20задать%20вопрос"
            className="text-gray-400 hover:text-neon-pink"
            target="_blank"
            rel="noopener"
          >
            Telegram
          </a>

          <a
            href="mailto:pugachev.2013@yandex.ru?subject=Вопрос по проекту&body=Здравствуйте, у меня есть вопрос..."
            target="_blank"
            rel="noopener"
          >
            Мыло
          </a>

          <a
            href="https://wa.me/+79185374922?text=Здравствуйте, у меня есть вопрос..."
            className="text-gray-400 hover:text-neon-pink"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
