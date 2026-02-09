export default function About() {
  return (
    <div  className="p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold neon-text mb-6 text-center mt-10">
        Обо мне
      </h1>
      
      <div className="neon-border p-4 sm:p-6 rounded-lg bg-opacity-10 bg-accent/5 space-y-4">
        <p className="text-base sm:text-lg leading-relaxed">
          Привет! Меня зовут Влад, и я занимаюсь <span className="text-neon-blue font-semibold">разработкой уже 5 лет</span>.
        </p>
        
        <p className="leading-relaxed">
          За это время я реализовал <span className="text-neon-pink font-semibold">десятки успешных проектов</span> —
          от небольших сайтов до сложных веб‑приложений. Каждый кейс — это не просто код,
          а решение реальной задачи клиента.
        </p>

        <p className="leading-relaxed">
          Работаю <span className="text-neon-blue font-semibold">в одиночку</span>, что позволяет:
        </p>
        
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Оперативно реагировать на правки</li>
          <li>Держать цены <span className="text-neon-pink font-semibold">демократичными</span></li>
          <li>Гарантировать личную ответственность за результат</li>
        </ul>

        <p className="leading-relaxed">
          Мой подход — <span className="text-neon-blue font-semibold">фокус на результат</span>.
          Я не просто пишу код: я помогаю бизнесу расти. Хотите увидеть, как это работает?
          Ознакомьтесь с <span className="text-neon-pink font-semibold">кейсами на главной странице</span> —
          там реальные проекты с измеримыми итогами.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contacts"
          className="inline-block px-6 py-3 sm:px-8 sm:py-3 bg-accent text-white rounded-full font-semibold
                   hover:bg-neon-blue hover:scale-105 transition-all duration-300
                   shadow-lg hover:shadow-neon-blue/50 text-sm sm:text-base"
        >
          Обсудить проект
        </a>
      </div>
    </div>
  );
}
