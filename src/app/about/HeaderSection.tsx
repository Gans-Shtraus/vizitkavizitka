export default function HeaderSection() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-8 text-center mt-20">
        О компании NeWeb Solution
      </h1>

      <p className="text-base sm:text-lg leading-relaxed">
        Привет! Мы — команда{" "}
        <span className="text-accent font-semibold">NeWeb Solution</span>,
        и мы занимаемся{" "}
        <span className="text-accent-light font-semibold">веб‑разработкой уже 7 лет</span>.
      </p>

      <p className="leading-relaxed">
        За это время мы реализовали{" "}
        <span className="text-accent-light font-semibold">более 200 успешных проектов</span> —
        от корпоративных сайтов до высоконагруженных веб‑приложений. Каждый проект — это
        решение конкретной бизнес‑задачи с измеримыми результатами.
      </p>
    </>
  );
}
