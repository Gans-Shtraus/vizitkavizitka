"use client";

import {
  CodeBracketIcon,
  ServerIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

export default function OnlineLearningPlatform() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8" style={{ marginTop: 40 }}>
        Этапы создания платформы онлайн‑курсов
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
            Определение сущностей: курсы, уроки, пользователи, платежи.
            Проектирование ER‑диаграммы для PostgreSQL. Планирование API для:
            <ul className="list-disc pl-6 mt-2">
              <li>управления контентом курсов</li>
              <li>прогресса учащихся</li>
              <li>платежных интеграций</li>
              <li>аналитики обучения</li>
            </ul>
          </div>
        </section>

        {/* Этап 2: Бэкенд (Express + PostgreSQL) */}
        <section className="border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <ServerIcon className="w-8 h-8 text-green-500" />
            <h2 className="text-xl font-semibold">2. Настройка бэкенда</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Инициализация Express-сервера</li>
            <li>ORM (Sequelize/TypeORM) для работы с PostgreSQL</li>
            <li>
              Настройка <code>.env</code> для секретных ключей
            </li>
            <li>
              Создание моделей: <code>Course</code>, <code>Lesson</code>,{" "}
              <code>User</code>, <code>Payment</code>
            </li>
            <li>Миграции и сеятели данных</li>
          </ul>
        </section>

        {/* Этап 3: Аутентификация и доступ */}
        <section className="border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <LockClosedIcon className="w-8 h-8 text-purple-500" />
            <h2 className="text-xl font-semibold">
              3. Система аутентификации и ролей
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>JWT для сессий пользователей</li>
            <li>bcrypt для хеширования паролей</li>
            <li>Роли: ученик, преподаватель, администратор</li>
            <li>Защита маршрутов по ролям</li>
            <li>Восстановление доступа</li>
          </ul>
        </section>

        {/* Этап 4: Админ-панель */}
        <section className="border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <ChartBarIcon className="w-8 h-8 text-orange-500" />
            <h2 className="text-xl font-semibold">4. Админ-панель</h2>
          </div>
          <div className="text-gray-700">
            Интерфейс для:
            <ul className="list-disc pl-6 mt-2">
              <li>создания и редактирования курсов/уроков</li>
              <li>управления пользователями</li>
              <li>просмотра статистики обучения</li>
              <li>обработки платежей</li>
            </ul>
            Реализуется через:
            <ul className="list-disc pl-6 mt-2">
              <li>отдельные API‑маршруты для админа</li>
              <li>RBAC (Role-Based Access Control)</li>
              <li>валидацию действий</li>
            </ul>
          </div>
        </section>

        {/* Этап 5: Фронтенд (Next.js + RTK) */}
        <section className="border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <CloudArrowUpIcon className="w-8 h-8 text-red-500" />
            <h2 className="text-xl font-semibold">5. Фронтенд платформы</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>SSR/SSG для SEO курсов</li>
            <li>Redux Toolkit для глобального состояния</li>
            <li>интеграция с API бэкенда</li>
            <li>адаптивный дизайн (Tailwind CSS)</li>
            <li>плеер видеоуроков</li>
            <li>прогресс-трекер ученика</li>
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
            <li>E2E‑тесты фронтенда (Cypress)</li>
            <li>нагрузочное тестирование (курсы + платежи)</li>
            <li>проверка безопасности аутентификации</li>
            <li>оптимизация загрузки медиа</li>
          </ul>
        </section>

        {/* Итоговый результат */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Результат</h2>
          <div className="text-gray-700">
            Готовая платформа онлайн‑курсов с:
          </div>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>управлением контентом курсов и уроков</li>
            <li>персональным прогрессом учащихся</li>
            <li>безопасной аутентификацией (JWT + bcrypt)</li>
            <li>масштабируемой БД (PostgreSQL)</li>
            <li>админ‑панелью для преподавателей и модераторов</li>
            <li>платежными интеграциями</li>
            <li>производительным фронтендом (Next.js)</li>
            <li>аналитикой обучения</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
