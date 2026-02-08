"use client";

import {
  CodeBracketIcon,
  ServerIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  PhotoIcon, // вместо ScreenshotIcon
  CubeIcon, // вместо DatabaseIcon
} from "@heroicons/react/24/outline";

export default function InternetMagazine() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8" style={{ marginTop: 40 }}>
        Этапы создания интернет‑магазина
      </h1>

      <div className="space-y-12">
        {/* Этап 1: Проектирование архитектуры */}
        <section className="border-l-4 border-blue-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <CodeBracketIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-xl font-semibold">
              1. Проектирование архитектуры
            </h2>
          </div>
          <div className="text-gray-700">
            Определение структуры БД, API-маршрутов, пользовательских ролей.
            Создание ER‑диаграммы для PostgreSQL. Планирование взаимодействия
            фронтенда (Next.js) и бэкенда (Express).
          </div>
          {/* Условная "диаграмма БД" через иконки */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
            <CubeIcon className="w-5 h-5 inline mr-1" />
            <span>ER-диаграмма (таблицы: Users, Products, Orders, Cart)</span>
          </div>
        </section>

        {/* Этап 2: Настройка бэкенда */}
        <section className="border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <ServerIcon className="w-8 h-8 text-green-500" />
            <h2 className="text-xl font-semibold">
              2. Настройка бэкенда (Express + PostgreSQL)
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Инициализация Express-сервера</li>
            <li>Подключение к PostgreSQL через Sequelize/TypeORM</li>
            <li>
              Настройка переменных окружения через <code>.env</code>
            </li>
            <li>Создание миграций и моделей БД</li>
          </ul>
          {/* Placeholder для скриншота БД */}
          <div className="mt-4 p-4 bg-gray-100 rounded border border-gray-200">
            <PhotoIcon className="w-6 h-6 text-gray-400 inline mr-2" />
            <span className="text-sm text-gray-600">
              Скриншот: Структура таблиц в PostgreSQL (пример)
            </span>
          </div>
        </section>

        {/* Этап 3: Аутентификация */}
        <section className="border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <LockClosedIcon className="w-8 h-8 text-purple-500" />
            <h2 className="text-xl font-semibold">3. Система аутентификации</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Реализация JWT для сессий</li>
            <li>Хеширование паролей через bcrypt</li>
            <li>Защита маршрутов middleware</li>
            <li>Восстановление паролей</li>
          </ul>
        </section>

        {/* Этап 4: Админ-панель */}
        <section className="border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <ChartBarIcon className="w-8 h-8 text-orange-500" />
            <h2 className="text-xl font-semibold">4. Админ-панель</h2>
          </div>
          <div className="text-gray-700">
            Интерфейс для управления товарами, заказами и пользователями.
            Реализация через:
            <ul className="list-disc pl-6 mt-2">
              <li>Отдельные маршруты API для админа</li>
              <li>Ролевая система доступа (RBAC)</li>
              <li>Валидация действий через middleware</li>
            </ul>
          </div>
          {/* Блок с метриками */}
          <div className="mt-6 p-4 bg-orange-50 rounded border border-orange-100">
            <h3 className="text-lg font-medium text-orange-800 mb-3">
              Ключевые метрики админ‑панели
            </h3>
          </div>
        </section>

        {/* Этап 5: Фронтенд на Next.js */}
        <section className="border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <CloudArrowUpIcon className="w-8 h-8 text-red-500" />
            <h2 className="text-xl font-semibold">
              5. Фронтенд (Next.js + RTK)
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>SSR/SSG для SEO-оптимизации</li>
            <li>Управление состоянием через Redux Toolkit</li>
            <li>Интеграция с API бэкенда</li>
            <li>Адаптивный дизайн (Tailwind CSS)</li>
          </ul>
        </section>

        {/* Этап 6: Интеграция и тестирование */}
        <section className="border-l-4 border-yellow-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <ArrowPathIcon className="w-8 h-8 text-yellow-500" />
            <h2 className="text-xl font-semibold">
              6. Интеграция и тестирование
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Тестирование API (Jest/Supertest)</li>
            <li>E2E-тесты фронтенда (Cypress)</li>
            <li>Нагрузочное тестирование</li>
            <li>Исправление багов и оптимизация</li>
          </ul>
          {/* График тестирования */}
          <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-100">
            <h3 className="text-lg font-medium text-yellow-800 mb-3">
              Результаты нагрузочного теста
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span>
                  Пиковая нагрузка: <strong>1 250 RPS</strong>
                </span>
              </li>
              <li className="flex items-center">
                <span>
                  Время отклика: <strong>&lt; 300 мс</strong> (95% запросов)
                </span>
              </li>
              <li className="flex items-center">
                <span>
                  Ошибки: <strong>0.02%</strong> при пиковой нагрузке
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Раздел с отзывами клиентов */}
        <section className="border-l-4 border-gray-400 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold">5. Отзывы клиентов</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded bg-white">
              <div className="flex items-center mb-2"></div>
              <p className="text-gray-700 italic">
                «Удобный интерфейс, быстрая загрузка страниц. Особенно
                понравилось, что корзина сохраняется при перезагрузке».
              </p>
              <p className="text-sm text-gray-500 mt-2">— Анна, 28 лет</p>
            </div>
            <div className="p-4 border border-gray-200 rounded bg-white">
              <p className="text-gray-700 italic">
                «Отличная система фильтров! Нашёл нужный товар за 2 минуты.
                Оплата прошла мгновенно».
              </p>
              <p className="text-sm text-gray-500 mt-2">— Дмитрий, 35 лет</p>
            </div>
          </div>
        </section>

        {/* Итоговый результат */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Результат</h2>
          <div className="text-gray-700">Готовый интернет‑магазин с:</div>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>Безопасной аутентификацией (JWT + bcrypt)</li>
            <li>Масштабируемой БД (PostgreSQL)</li>
            <li>Удобной админ‑панелью с метриками</li>
            <li>Производительным фронтендом (Next.js)</li>
            <li>Предсказуемым состоянием (RTK)</li>
            <li>Надёжной системой тестирования и мониторинга</li>
            <li>Позитивными отзывами пользователей</li>
          </ul>
          {/* Финальный блок с ключевыми показателями */}
          <div className="mt-6 p-4 bg-green-50 rounded border border-green-100">
            <h3 className="text-lg font-medium text-green-800 mb-3">
              Ключевые показатели эффективности
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <ChartBarIcon className="w-4 h-4 text-green-600 mr-2" />
                <span>
                  Рост выручки: <strong>+45%</strong> за 3 месяца
                </span>
              </li>
              <li className="flex items-center">
                <ChartBarIcon className="w-4 h-4 text-green-600 mr-2" />
                <span>
                  Удержание клиентов: <strong>68%</strong> повторных покупок
                </span>
              </li>
              <li className="flex items-center">
                <ChartBarIcon className="w-4 h-4 text-green-600 mr-2" />
                <span>
                  NPS: <strong>72</strong> (высокий уровень лояльности)
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
