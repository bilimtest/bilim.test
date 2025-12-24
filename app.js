

// ==================== DATA STORAGE ====================
// LocalStorage keys
const STORAGE_KEYS = {
    CURRENT_USER: 'currentUser',
    USERS: 'users',
    QUESTIONS: 'questions',
    CATEGORIES: 'categories',
    RESULTS: 'results'
};

// Initialize default data
function initializeDefaultData() {
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
        const defaultCategories = [
            { id: 1, name: 'Namoz', icon: '🕌', questionCount: 0 },
            { id: 2, name: "Ro'za", icon: '☪️', questionCount: 0 },
            { id: 3, name: 'Hadis', icon: '📖', questionCount: 0 },
            { id: 4, name: 'Tawhid', icon: '✨', questionCount: 0 },
            { id: 5, name: 'Fiqh', icon: '⚖️', questionCount: 0 },
            { id: 6, name: 'Tarix', icon: '📜', questionCount: 0 },
            { id: 7, name: 'Axloq', icon: '💎', questionCount: 0 },
            { id: 8, name: 'Qur\'on', icon: '📕', questionCount: 0 }
        ];
        localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(defaultCategories));
    }

    if (!localStorage.getItem(STORAGE_KEYS.QUESTIONS)) {
        const defaultQuestions = [
            // Namoz (5 ta)
            {
                id: 1,
                categoryId: 1,
                text: "Kunlik nechta farz namoz bor?",
                answers: ["3 ta", "4 ta", "5 ta", "6 ta"],
                correctAnswer: 2
            },
            {
                id: 2,
                categoryId: 1,
                text: "Bomdod namozi necha rakat?",
                answers: ["2 rakat", "3 rakat", "4 rakat", "5 rakat"],
                correctAnswer: 0
            },
            {
                id: 3,
                categoryId: 1,
                text: "Peshin namozi necha rakat?",
                answers: ["2 rakat", "3 rakat", "4 rakat", "6 rakat"],
                correctAnswer: 2
            },
            {
                id: 4,
                categoryId: 1,
                text: "Namozning asosiy shartlari nechta?",
                answers: ["5 ta", "7 ta", "9 ta", "12 ta"],
                correctAnswer: 1
            },
            {
                id: 5,
                categoryId: 1,
                text: "Namozda birinchi o'qiladigan surа?",
                answers: ["Fotiha", "Ixlos", "Kavsar", "Nas"],
                correctAnswer: 0
            },
            // Ro'za (3 ta)
            {
                id: 6,
                categoryId: 2,
                text: "Ramazon oyi nechanchi hijriy oyda?",
                answers: ["7-oy", "8-oy", "9-oy", "10-oy"],
                correctAnswer: 2
            },
            {
                id: 7,
                categoryId: 2,
                text: "Ro'zaning farz bo'lishi qaysi yilda?",
                answers: ["1-yil", "2-yil", "3-yil", "5-yil"],
                correctAnswer: 1
            },
            {
                id: 8,
                categoryId: 2,
                text: "Saharlik qaysi vaqtda iste'mol qilinadi?",
                answers: ["Bomdoddan oldin", "Peshindan oldin", "Shomdan oldin", "Xuftondan oldin"],
                correctAnswer: 0
            },
            // Hadis (2 ta)
            {
                id: 9,
                categoryId: 3,
                text: "Eng ko'p hadis rivoyat qilgan sahoba?",
                answers: ["Abu Huroyra", "Abdullah ibn Abbos", "Anas ibn Molik", "Abu Bakr"],
                correctAnswer: 0
            },
            {
                id: 10,
                categoryId: 3,
                text: "'Sahih al-Buxoriy' muallifi kim?",
                answers: ["Imom Muslim", "Imom Buxoriy", "Imom Tirmiziy", "Imom Ahmad"],
                correctAnswer: 1
            },
            // Tawhid (2 ta)
            {
                id: 11,
                categoryId: 4,
                text: "Tawhidning ma'nosi nima?",
                answers: ["Imon keltirish", "Allohning birligiga iqror bo'lish", "Namoz o'qish", "Sadaqa berish"],
                correctAnswer: 1
            },
            {
                id: 12,
                categoryId: 4,
                text: "Islomning asosiy ustunlari nechta?",
                answers: ["3 ta", "4 ta", "5 ta", "6 ta"],
                correctAnswer: 2
            },
            // Fiqh (1 ta)
            {
                id: 13,
                categoryId: 5,
                text: "Tahoratning farzlari nechta?",
                answers: ["3 ta", "4 ta", "5 ta", "6 ta"],
                correctAnswer: 1
            },
            // Axloq (1 ta)
            {
                id: 14,
                categoryId: 7,
                text: "Islomda eng yaxshi xulq-atvor nima?",
                answers: ["Saxiylik", "Halollik", "Sabr-toqat", "Barchasi to'g'ri"],
                correctAnswer: 3
            },
            // Qur'on (1 ta)
            {
                id: 15,
                categoryId: 8,
                text: "Qur'ondagi suralar soni?",
                answers: ["100 ta", "110 ta", "114 ta", "120 ta"],
                correctAnswer: 2
            }
        ];
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(defaultQuestions));
        updateCategoriesQuestionCount();
    }

    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
    }

    if (!localStorage.getItem(STORAGE_KEYS.RESULTS)) {
        localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify([]));
    }
}

// Helper functions for localStorage
function getFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getCurrentUser() {
    return getFromStorage(STORAGE_KEYS.CURRENT_USER);
}

function setCurrentUser(user) {
    saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
}

function getUsers() {
    return getFromStorage(STORAGE_KEYS.USERS) || [];
}

function getQuestions() {
    return getFromStorage(STORAGE_KEYS.QUESTIONS) || [];
}

function getCategories() {
    return getFromStorage(STORAGE_KEYS.CATEGORIES) || [];
}

function getResults() {
    return getFromStorage(STORAGE_KEYS.RESULTS) || [];
}

function updateCategoriesQuestionCount() {
    const categories = getCategories();
    const questions = getQuestions();

    categories.forEach(cat => {
        cat.questionCount = questions.filter(q => q.categoryId === cat.id).length;
    });

    saveToStorage(STORAGE_KEYS.CATEGORIES, categories);
}

// ==================== SCREEN NAVIGATION ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ==================== AUTHENTICATION ====================
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        setCurrentUser(user);
        loadHomeScreen();
        showScreen('homeScreen');
    } else {
        alert('Email yoki parol noto\'g\'ri!');
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const users = getUsers();

    if (users.find(u => u.email === email)) {
        alert('Bu email allaqachon ro\'yxatdan o\'tgan!');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        isAdmin: users.length === 0 // First user is admin
    };

    users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, users);

    setCurrentUser(newUser);
    loadHomeScreen();
    showScreen('homeScreen');
});

document.getElementById('showRegister').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('registerScreen');
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('loginScreen');
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    showScreen('loginScreen');
});

// ==================== HOME SCREEN ====================
function loadHomeScreen() {
    const user = getCurrentUser();
    const results = getResults().filter(r => r.userId === user.id);

    // Update stats
    document.getElementById('totalTests').textContent = results.length;

    if (results.length > 0) {
        const avgScore = Math.round(
            results.reduce((sum, r) => sum + r.percentage, 0) / results.length
        );
        document.getElementById('avgScore').textContent = avgScore + '%';
    } else {
        document.getElementById('avgScore').textContent = '0%';
    }

    // Load categories
    loadCategories();

    // Show/hide admin button
    if (user.isAdmin) {
        document.getElementById('showAdminBtn').style.display = 'inline-block';
    } else {
        document.getElementById('showAdminBtn').style.display = 'none';
    }
}

function loadCategories() {
    const categories = getCategories();
    const categoriesList = document.getElementById('categoriesList');

    categoriesList.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="startTest(${cat.id})">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.questionCount} ta savol</p>
        </div>
    `).join('');
}

document.getElementById('showAdminBtn').addEventListener('click', () => {
    loadAdminScreen();
    showScreen('adminScreen');
});

// ==================== TEST LOGIC ====================
let currentTest = {
    categoryId: null,
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    startTime: null,
    timer: null,
    timeLimit: 600 // 10 minutes in seconds
};

function startTest(categoryId) {
    const allQuestions = getQuestions();
    const categoryQuestions = allQuestions.filter(q => q.categoryId === categoryId);

    if (categoryQuestions.length === 0) {
        alert('Bu kategoriyada hali savollar yo\'q!');
        return;
    }

    // Shuffle questions and take up to 10
    const shuffledQuestions = categoryQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

    currentTest = {
        categoryId,
        questions: shuffledQuestions,
        currentQuestionIndex: 0,
        userAnswers: new Array(shuffledQuestions.length).fill(null),
        startTime: Date.now(),
        timer: null,
        timeLimit: 600
    };

    loadTestScreen();
    showScreen('testScreen');
    startTimer();
}

function loadTestScreen() {
    const category = getCategories().find(c => c.id === currentTest.categoryId);
    document.getElementById('testCategoryName').textContent = category.name;

    showQuestion();
}

function showQuestion() {
    const question = currentTest.questions[currentTest.currentQuestionIndex];
    const progress = `${currentTest.currentQuestionIndex + 1}/${currentTest.questions.length}`;

    document.getElementById('testProgress').textContent = progress;
    document.getElementById('questionText').textContent = question.text;

    const answersContainer = document.getElementById('answersContainer');
    const letters = ['A', 'B', 'C', 'D'];

    answersContainer.innerHTML = question.answers.map((answer, index) => `
        <div class="answer-option ${currentTest.userAnswers[currentTest.currentQuestionIndex] === index ? 'selected' : ''}" 
             onclick="selectAnswer(${index})">
            <div class="answer-letter">${letters[index]}</div>
            <div class="answer-text">${answer}</div>
        </div>
    `).join('');

    // Show/hide next button
    const nextBtn = document.getElementById('nextQuestionBtn');
    if (currentTest.userAnswers[currentTest.currentQuestionIndex] !== null) {
        nextBtn.style.display = 'block';
        nextBtn.textContent = currentTest.currentQuestionIndex === currentTest.questions.length - 1
            ? 'Yakunlash'
            : 'Keyingi savol';
    } else {
        nextBtn.style.display = 'none';
    }
}

function selectAnswer(answerIndex) {
    currentTest.userAnswers[currentTest.currentQuestionIndex] = answerIndex;
    showQuestion();
}

document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    if (currentTest.currentQuestionIndex < currentTest.questions.length - 1) {
        currentTest.currentQuestionIndex++;
        showQuestion();
    } else {
        finishTest();
    }
});

document.getElementById('exitTestBtn').addEventListener('click', () => {
    if (confirm('Testni to\'xtatmoqchimisiz? Natijalaringiz saqlanmaydi.')) {
        stopTimer();
        showScreen('homeScreen');
    }
});

function startTimer() {
    updateTimerDisplay();

    currentTest.timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - currentTest.startTime) / 1000);
        const remaining = currentTest.timeLimit - elapsed;

        if (remaining <= 0) {
            stopTimer();
            finishTest();
        } else {
            updateTimerDisplay(remaining);

            if (remaining <= 60) {
                document.getElementById('timer').classList.add('warning');
            }
        }
    }, 1000);
}

function stopTimer() {
    if (currentTest.timer) {
        clearInterval(currentTest.timer);
        currentTest.timer = null;
    }
}

function updateTimerDisplay(seconds = currentTest.timeLimit) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timeLeft').textContent =
        `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function finishTest() {
    stopTimer();

    // Calculate results
    let correctCount = 0;
    currentTest.questions.forEach((question, index) => {
        if (currentTest.userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });

    const totalQuestions = currentTest.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const timeSpent = Math.floor((Date.now() - currentTest.startTime) / 1000);

    // Save result
    const user = getCurrentUser();
    const results = getResults();
    results.push({
        id: Date.now(),
        userId: user.id,
        categoryId: currentTest.categoryId,
        correct: correctCount,
        total: totalQuestions,
        percentage,
        timeSpent,
        date: new Date().toISOString()
    });
    saveToStorage(STORAGE_KEYS.RESULTS, results);

    // Show results
    showResults(correctCount, totalQuestions, percentage, timeSpent);
}

function showResults(correct, total, percentage, timeSpent) {
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('scoreDetails').textContent = `${correct}/${total}`;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('wrongAnswers').textContent = total - correct;

    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    document.getElementById('timeSpent').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Animate score circle
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;

    setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1s ease-in-out';
        circle.style.strokeDashoffset = offset;
    }, 100);

    showScreen('resultsScreen');
}

document.getElementById('backToHomeBtn').addEventListener('click', () => {
    loadHomeScreen();
    showScreen('homeScreen');
});

document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
    alert('Bu funksiya keyingi versiyada qo\'shiladi!');
});

// ==================== ADMIN PANEL ====================
function loadAdminScreen() {
    loadCategorySelects();
    loadQuestionsList();
    loadCategoriesManageList();
}

function loadCategorySelects() {
    const categories = getCategories();
    const options = categories.map(cat =>
        `<option value="${cat.id}">${cat.icon} ${cat.name}</option>`
    ).join('');

    document.getElementById('questionCategory').innerHTML =
        '<option value="">Kategoriyani tanlang</option>' + options;
    document.getElementById('filterCategory').innerHTML =
        '<option value="">Barcha kategoriyalar</option>' + options;
}

document.getElementById('backFromAdminBtn').addEventListener('click', () => {
    showScreen('homeScreen');
});

// Admin tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(tabName + 'QuestionTab').classList.add('active') ||
            document.getElementById(tabName + 'sTab').classList.add('active');
    });
});

// Add question
document.getElementById('addQuestionForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const categoryId = parseInt(document.getElementById('questionCategory').value);
    const text = document.getElementById('questionTextInput').value;
    const answers = [
        document.getElementById('answer1').value,
        document.getElementById('answer2').value,
        document.getElementById('answer3').value,
        document.getElementById('answer4').value
    ];
    const correctAnswer = parseInt(document.getElementById('correctAnswer').value);

    const questions = getQuestions();
    const newQuestion = {
        id: Date.now(),
        categoryId,
        text,
        answers,
        correctAnswer
    };

    questions.push(newQuestion);
    saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
    updateCategoriesQuestionCount();

    e.target.reset();
    alert('Savol muvaffaqiyatli qo\'shildi!');
    loadQuestionsList();
    loadCategorySelects();
});

// Load questions list
function loadQuestionsList(filterCategoryId = null) {
    let questions = getQuestions();
    const categories = getCategories();

    if (filterCategoryId) {
        questions = questions.filter(q => q.categoryId === parseInt(filterCategoryId));
    }

    const questionsList = document.getElementById('questionsList');

    if (questions.length === 0) {
        questionsList.innerHTML = '<p class="text-center">Savollar topilmadi</p>';
        return;
    }

    questionsList.innerHTML = questions.map(q => {
        const category = categories.find(c => c.id === q.categoryId);
        const letters = ['A', 'B', 'C', 'D'];

        return `
            <div class="question-item">
                <div class="question-item-header">
                    <span class="question-category-badge">${category ? category.name : 'Noma\'lum'}</span>
                    <div class="question-actions">
                        <button class="btn-delete" onclick="deleteQuestion(${q.id})">O'chirish</button>
                    </div>
                </div>
                <div class="question-text">${q.text}</div>
                <div class="question-answers">
                    ${q.answers.map((ans, i) =>
            `<div ${i === q.correctAnswer ? 'class="correct-answer"' : ''}>
                            ${letters[i]}. ${ans} ${i === q.correctAnswer ? '✓' : ''}
                        </div>`
        ).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function deleteQuestion(questionId) {
    if (!confirm('Bu savolni o\'chirmoqchimisiz?')) return;

    let questions = getQuestions();
    questions = questions.filter(q => q.id !== questionId);
    saveToStorage(STORAGE_KEYS.QUESTIONS, questions);
    updateCategoriesQuestionCount();

    loadQuestionsList();
    loadCategorySelects();
}

document.getElementById('filterCategory').addEventListener('change', (e) => {
    loadQuestionsList(e.target.value);
});

// Manage categories
function loadCategoriesManageList() {
    const categories = getCategories();
    const list = document.getElementById('categoriesManageList');

    list.innerHTML = categories.map(cat => `
        <div class="category-manage-item">
            <div class="category-icon">${cat.icon}</div>
            <h4>${cat.name}</h4>
            <p>${cat.questionCount} ta savol</p>
            <button onclick="deleteCategory(${cat.id})">O'chirish</button>
        </div>
    `).join('');
}

document.getElementById('addCategoryForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('categoryName').value;
    const icon = document.getElementById('categoryIcon').value;

    const categories = getCategories();
    const newCategory = {
        id: Date.now(),
        name,
        icon,
        questionCount: 0
    };

    categories.push(newCategory);
    saveToStorage(STORAGE_KEYS.CATEGORIES, categories);

    e.target.reset();
    alert('Kategoriya muvaffaqiyatli qo\'shildi!');
    loadCategoriesManageList();
    loadCategorySelects();
    loadCategories();
});

function deleteCategory(categoryId) {
    if (!confirm('Bu kategoriyani o\'chirmoqchimisiz? Undagi barcha savollar ham o\'chiriladi!')) return;

    let categories = getCategories();
    let questions = getQuestions();

    categories = categories.filter(c => c.id !== categoryId);
    questions = questions.filter(q => q.categoryId !== categoryId);

    saveToStorage(STORAGE_KEYS.CATEGORIES, categories);
    saveToStorage(STORAGE_KEYS.QUESTIONS, questions);

    loadCategoriesManageList();
    loadCategorySelects();
    loadCategories();
    loadQuestionsList();
}

// ==================== INITIALIZATION ====================
window.addEventListener('DOMContentLoaded', () => {
    initializeDefaultData();

    // Simulate loading
    setTimeout(() => {
        const currentUser = getCurrentUser();
        if (currentUser) {
            loadHomeScreen();
            showScreen('homeScreen');
        } else {
            showScreen('loginScreen');
        }
    }, 1500);
});
