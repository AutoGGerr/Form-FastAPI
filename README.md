<h1>FormAPI</h1>

<p>Веб-форма для отправки заявок в Telegram через FastAPI.</p>

<h2>Технологии</h2>

<p>HTML, CSS, JavaScript, Python, FastAPI, aiogram.</p>

<h2>Установка</h2>

<pre><code>cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install fastapi uvicorn aiogram python-dotenv</code></pre>

<p>Создайте файл <code>.env</code> в папке <code>backend</code>:</p>

<pre><code>BOT_TOKEN=ваш_токен_бота
BOT_CHAT_ID=id_чата</code></pre>

<h2>Запуск</h2>

<p>Запустите сервер из папки <code>backend</code>:</p>

<pre><code>uvicorn main:app --reload --port 8000</code></pre>

<p>Откройте <code>frontend/index.html</code> через расширение Live Server в VS Code.</p>

<h2>Использование</h2>

<ol>
<li>Откройте веб-форму.</li>
<li>Заполните поля и отправьте заявку.</li>
<li>Получите данные в указанном Telegram-чате.</li>
</ol>

<p>API-документация: <a href="http://127.0.0.1:8000/docs">127.0.0.1:8000/docs</a></p>

<p><strong>Важно:</strong> не публикуйте файл <code>.env</code> и токен бота.</p>
