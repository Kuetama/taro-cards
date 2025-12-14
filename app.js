let savedDecks = JSON.parse(localStorage.getItem('metaphorDecks')) || [];
let currentDeck = null;
let isBackVisible = true;
let shuffledDeck = [];

const defaultDeck = {
  name: "Таро Райдера Уэйта",
  backImage: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/back.webp",
  cards: [
    { title: "Туз кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups1.webp", description: "" },
{ title: "Двойка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups2.webp", description: "" },
{ title: "Тройка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups3.webp", description: "" },
{ title: "Четверка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups4.webp", description: "" },
{ title: "Пятерка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups5.webp", description: "" },
{ title: "Шестерка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups6.webp", description: "" },
{ title: "Семерка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups7.webp", description: "" },
{ title: "Восьмерка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups8.webp", description: "" },
{ title: "Девятка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups9.webp", description: "" },
{ title: "Десятка кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups10.webp", description: "" },
{ title: "Паж кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups11.webp", description: "" },
{ title: "Рыцарь кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups12.webp", description: "" },
{ title: "Королева кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups13.webp", description: "" },
{ title: "Король кубков", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/cups14.webp", description: "" },
{ title: "Туз мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords1.webp", description: "" },
{ title: "Двойка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords2.webp", description: "" },
{ title: "Тройка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords3.webp", description: "" },
{ title: "Четверка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords4.webp", description: "" },
{ title: "Пятерка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords5.webp", description: "" },
{ title: "Шестерка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords6.webp", description: "" },
{ title: "Семерка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords7.webp", description: "" },
{ title: "ЗВосьмерка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords8.webp", description: "" },
{ title: "Девятка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords9.webp", description: "" },
{ title: "Десятка мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords10.webp", description: "" },
{ title: "Паж мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords11.webp", description: "" },
{ title: "Рыцарь мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords12.webp", description: "" },
{ title: "Королева мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords13.webp", description: "" },
{ title: "Король мечей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/swords14.webp", description: "" },
{ title: "Туз жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands1.webp", description: "" },
{ title: "Двойка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands2.webp", description: "" },
{ title: "Тройка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands3.webp", description: "" },
{ title: "Четверка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands4.webp", description: "" },
{ title: "Пятерка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands5.webp", description: "" },
{ title: "Шестерка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands6.webp", description: "" },
{ title: "Семерка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands07.webp", description: "" },
{ title: "Восьмерка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands8.webp", description: "" },
{ title: "Девятка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands9.webp", description: "" },
{ title: "Десятка жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands10.webp", description: "" },
{ title: "Паж жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands11.webp", description: "" },
{ title: "Рыцарь жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands12.webp", description: "" },
{ title: "Королева жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands13.webp", description: "" },
{ title: "Король жезлов", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/wands14.webp", description: "" },
{ title: "Туз пентаклей", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents1.webp", description: "" },
{ title: "Двойка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents2.webp", description: "" },
{ title: "Тройка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents3.webp", description: "" },
{ title: "Четверка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents4.webp", description: "" },
{ title: "Пятерка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents5.webp", description: "" },
{ title: "Шестерка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents6.webp", description: "" },
{ title: "Семерка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents7.webp", description: "" },
{ title: "Восьмерка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents8.webp", description: "" },
{ title: "Девятка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents9.webp", description: "" },
{ title: "Десятка пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents10.webp", description: "" },
{ title: "Паж пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents11.webp", description: "" },
{ title: "Рыцарь пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents12.webp", description: "" },
{ title: "Королева пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents13.webp", description: "" },
{ title: "Король пентакле", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/pents14.webp", description: "" },
{ title: "Шут", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/0.webp", description: "" },
{ title: "Маг", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/1.webp", description: "" },
{ title: "Верховная жрица", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/2.webp", description: "" },
{ title: "Императрица", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/3.webp", description: "" },
{ title: "Император", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/4.webp", description: "" },
{ title: "Папа", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/5.webp", description: "" },
{ title: "Влюбленные", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/6.webp", description: "" },
{ title: "Колесница", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/7.webp", description: "" },
{ title: "Сила", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/8.webp", description: "" },
{ title: "Отшельник", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/9.webp", description: "" },
{ title: "Колесо фортуны", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/10.webp", description: "" },
{ title: "Справедливость", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/11.webp", description: "" },
{ title: "Повешенный", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/12.webp", description: " " },
{ title: "Смерть", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/13.webp", description: " " },
{ title: "Умеренность", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/14.webp", description: " " },
{ title: "Дьявол", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/15.webp", description: " " },
{ title: "Башня", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/16.webp", description: " " },
{ title: "Звезда", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/17.webp", description: " " },
{ title: "Луна", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/18.webp", description: " " },
{ title: "Солнце", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/19.webp", description: " " },
{ title: "Страшный суд", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/20.webp", description: " " },
{ title: "Мир", image: "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/21.webp", description: " " }
  ]
};

if (savedDecks.length === 0) {
  savedDecks = [defaultDeck];
  localStorage.setItem('metaphorDecks', JSON.stringify(savedDecks));
}

function renderDeckList() {
  const container = document.getElementById("decksList");
  if (!container) return;

  container.innerHTML = savedDecks.map((deck, index) => `
    <div class="deck-item">
      <span class="deck-name">${deck.name}</span>
      <br>
      <button class="button">Выбрать</button>
      ${index > 0 ? '<button class="delete-btn danger">Удалить</button>' : ''}
    </div>
  `).join('');

  container.querySelectorAll('.button').forEach((btn, i) => {
    btn.onclick = () => selectDeck(i);
  });
  container.querySelectorAll('.delete-btn').forEach((btn, i) => {
    btn.onclick = () => deleteDeck(i + 1);
  });
}

function selectDeck(index) {
  currentDeck = savedDecks[index];
  shuffledDeck = [...currentDeck.cards].sort(() => Math.random() - 0.5);
  document.getElementById("deckInfo").textContent = `Активна: ${currentDeck.name}`;
  showAllCards(); // ← остаётся!
}

function deleteDeck(index) {
  if (index === 0) return;
  if (!confirm("Удалить колоду?")) return;
  savedDecks.splice(index, 1);
  localStorage.setItem('metaphorDecks', JSON.stringify(savedDecks));
  renderDeckList();
  if (currentDeck === savedDecks[index]) {
    currentDeck = null;
    clearTable();
  }
}

// ОСТАВЛЯЕМ ЭТУ ФУНКЦИЮ — она нужна!
function showAllCards() {
  if (!currentDeck) return;
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  shuffledDeck.forEach(card => {
    if (isBackVisible) {
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      cardEl.style.position = "relative";
      cardEl.style.perspective = "1000px";

      const inner = document.createElement("div");
      inner.style.transition = "transform 0.6s";
      inner.style.transformStyle = "preserve-3d";
      inner.style.position = "absolute";
      inner.style.width = "100%";
      inner.style.height = "100%";
      inner.style.top = "0";
      inner.style.left = "0";

      const front = document.createElement("div");
      front.style.position = "absolute";
      front.style.width = "100%";
      front.style.height = "100%";
      front.style.backfaceVisibility = "hidden";
      front.style.borderRadius = "8px";
      front.style.overflow = "hidden";

      const backImg = document.createElement("img");
      backImg.src = currentDeck.backImage || "https://raw.githubusercontent.com/Kuetama/taro-cards/main/RyderWaite/back.webp";
      backImg.alt = "Рубашка";
      backImg.style.width = "100%";
      backImg.style.height = "100%";
      backImg.style.objectFit = "cover";
      front.appendChild(backImg);

      const back = document.createElement("div");
      back.style.position = "absolute";
      back.style.width = "100%";
      back.style.height = "100%";
      back.style.backfaceVisibility = "hidden";
      back.style.transform = "rotateY(180deg)";
      back.style.borderRadius = "8px";
      back.style.overflow = "hidden";
      back.innerHTML = `<img src="${card.image}" alt="${card.title}" style="width:100%;height:100%;object-fit:cover;">`;

      inner.appendChild(front);
      inner.appendChild(back);
      cardEl.appendChild(inner);

      cardEl.onclick = () => {
        if (!cardEl.dataset.flipped) {
          cardEl.dataset.flipped = "true";
          inner.style.transform = "rotateY(180deg)";
          setTimeout(() => showCardModal(card), 300);
        } else {
          showCardModal(card);
        }
      };

      container.appendChild(cardEl);
    } else {
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `<img src="${card.image}" alt="${card.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
      el.style.cursor = "pointer";
      el.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      el.onclick = () => showCardModal(card);
      container.appendChild(el);
    }
  });
}

// function showCardModal(card) {
//   document.getElementById("modalTitle").textContent = card.title;
//   document.getElementById("modalImage").src = card.image;
//   document.getElementById("modalDesc").textContent = card.description;
//   document.getElementById("modal").classList.remove("hidden");
// }

function showCardModal(card) {
  const modalImage = document.getElementById("modalImage");
  const modalDesc = document.getElementById("modalDesc");
  const modalTitle = document.getElementById("modalTitle");

  modalTitle.textContent = card.title;
  modalImage.src = card.image;
  modalImage.style.display = "block"; // ← КЛЮЧЕВАЯ СТРОКА: восстанавливаем видимость
  modalDesc.textContent = card.description; // заменяет любой HTML на чистый текст

  document.getElementById("modal").classList.remove("hidden");
}




function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}


function showRandomCard() {
  if (!currentDeck) return alert("Нет активной колоды!");
  const card = currentDeck.cards[Math.floor(Math.random() * currentDeck.cards.length)];
  showCardModal(card);
}

function showThreeRandomCards() {
  if (!currentDeck) return alert("Нет активной колоды!");
  const cards = currentDeck.cards;
  const unique = [...new Set(Array.from({length: 100}, () => Math.floor(Math.random() * cards.length)))].slice(0, 3);
  let html = unique.map(i => {
    const c = cards[i];
    return `<div style="display:inline-block;margin:10px;text-align:center;max-width:250px;">
      <img src="${c.image}" style="width:100%;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.2);">
      <div>${c.title}</div>
      <div>${c.description}</div>
    </div>`;
  }).join('');
  document.getElementById("modalTitle").textContent = "Три карты";
  document.getElementById("modalImage").style.display = "none";
  document.getElementById("modalDesc").innerHTML = html;
  document.getElementById("modal").classList.remove("hidden");
}

function shuffleOnTable() {
  const container = document.getElementById("cardsContainer");
  const cards = Array.from(container.children);
  if (cards.length === 0) return alert("Нет карт!");

  if (container.classList.contains('shuffling')) return;
  container.classList.add('shuffling');

  const firstRects = cards.map(card => card.getBoundingClientRect());
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  container.replaceChildren(...shuffled);
  const lastRects = cards.map(card => card.getBoundingClientRect());

  cards.forEach((card, i) => {
    const dx = firstRects[i].left - lastRects[i].left;
    const dy = firstRects[i].top - lastRects[i].top;
    card.style.transform = `translate(${dx}px, ${dy}px)`;
    card.style.transition = 'none';
  });

  container.offsetHeight;

  cards.forEach(card => {
    card.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.transform = 'translate(0, 0)';
  });

  setTimeout(() => {
    cards.forEach(card => {
      card.style.transition = '';
      card.style.transform = '';
    });
    container.classList.remove('shuffling');
  }, 700);
}

function clearTable() {
  document.getElementById("cardsContainer").innerHTML = "";
  document.getElementById("deckInfo").textContent = "Стол очищен";
}

function toggleBack() {
  isBackVisible = !isBackVisible;
  document.getElementById("toggleBackBtn").textContent = 
    isBackVisible ? "Рубашка: ВКЛ" : "Рубашка: ВЫКЛ";
  if (currentDeck) showAllCards(); // ← остаётся!
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderDeckList();

  // Кнопки
  document.getElementById('loadDeckBtn')?.addEventListener('click', () => {
    document.getElementById('fileInput')?.click();
  });
  document.getElementById('howToBtn')?.addEventListener('click', () => {
    window.location.href = 'how-to.html';
  });
  document.getElementById('show1Btn')?.addEventListener('click', showRandomCard);
  document.getElementById('show3Btn')?.addEventListener('click', showThreeRandomCards);
  // УДАЛЕНА СЛЕДУЮЩАЯ СТРОКА:
  // document.getElementById('showAllBtn').addEventListener('click', showAllCards);
  document.getElementById('shuffleBtn')?.addEventListener('click', shuffleOnTable);
  document.getElementById('clearBtn')?.addEventListener('click', clearTable);
  document.getElementById('toggleBackBtn')?.addEventListener('click', toggleBack);
  document.getElementById('closeModal')?.addEventListener('click', closeModal);

  // Загрузка файла
  document.getElementById('fileInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const deck = JSON.parse(event.target.result);
        if (!deck.name || !Array.isArray(deck.cards) || deck.cards.length === 0) {
          throw new Error("Неверный формат");
        }
        savedDecks.push(deck);
        localStorage.setItem('metaphorDecks', JSON.stringify(savedDecks));
        renderDeckList();
        alert("Колода добавлена!");
      } catch (err) {
        alert("❌ Ошибка: " + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });
});