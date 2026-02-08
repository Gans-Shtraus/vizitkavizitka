"use client";

import {
  CodeBracketIcon,
  ServerIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

export default function HotelBookingPlatform() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8" style={{ marginTop: 40 }}>
        Этапы создания сервиса бронирования отелей
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
            Определение ключевых сущностей: отели, номера, бронирования,
            пользователи. Проектирование ER‑диаграммы для PostgreSQL.
            Планирование API для:
            <ul className="list-disc pl-6 mt-2">
              <li>поиска и фильтрации отелей</li>
              <li>управления бронированиями</li>
              <li>работы с платежами</li>
              <li>отзывов и рейтингов</li>
              <li>интеграции с картографическими сервисами</li>
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
              Настройка <code>.env</code> для секретных ключей и API-ключей карт
            </li>
            <li>
              Создание моделей: <code>Hotel</code>, <code>Room</code>,{" "}
              <code>Booking</code>, <code>User</code>, <code>Review</code>
            </li>
            <li>Миграции и сеятели тестовых данных</li>
            <li>Интеграция с геоданными (например, OpenStreetMap API)</li>
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
            <li>
              Роли: гость, зарегистрированный пользователь, менеджер отеля,
              администратор
            </li>
            <li>Защита маршрутов по ролям</li>
            <li>Восстановление доступа и двухфакторная аутентификация</li>
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
              <li>управления списком отелей и номеров</li>
              <li>обработки бронирований и отмен</li>
              <li>просмотра статистики загрузки отелей</li>
              <li>модерации отзывов и рейтингов</li>
              <li>настройки тарифов и акций</li>
            </ul>
            Реализуется через:
            <ul className="list-disc pl-6 mt-2">
              <li>отдельные API‑маршруты для админа и менеджеров</li>
              <li>RBAC (Role-Based Access Control)</li>
              <li>валидацию действий и логирование изменений</li>
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
            <li>SSR/SSG для SEO отелей и направлений</li>
            <li>Redux Toolkit для глобального состояния (корзина, фильтры)</li>
            <li>интеграция с API бэкенда и картографическими сервисами</li>
            <li>адаптивный дизайн (Tailwind CSS)</li>
            <li>интерактивная карта с отелями</li>
            <li>календарь бронирований и калькулятор цен</li>
            <li>форма отзывов и рейтингов</li>
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
            <li>нагрузочное тестирование (поиск + бронирования)</li>
            <li>проверка безопасности платежей и аутентификации</li>
            <li>тестирование отзывчивости карты и фильтров</li>
            <li>оптимизация загрузки изображений отелей</li>
          </ul>
        </section>

        {/* Итоговый результат */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Результат</h2>
          <div className="text-gray-700">
            Готовый сервис бронирования отелей с:
          </div>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>поиском и фильтрацией отелей по параметрам</li>
            <li>интерактивной картой размещения</li>
            <li>системой онлайн‑бронирования и оплат</li>
            <li>личным кабинетом пользователя</li>
            <li>безопасной аутентификацией (JWT + bcrypt)</li>
            <li>масштабируемой БД (PostgreSQL)</li>
            <li>админ‑панелью для управления контентом</li>
            <li>системой отзывов и рейтингов</li>
            <li>производительным фронтендом (Next.js)</li>
            <li>аналитикой загрузки и доходов</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
