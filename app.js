const appData = {
    currentUser: null,
    selectedParty: null,
    selectedCandidate: null,
    parties: [
        {
            id: 1,
            name: "حزب الإصلاح الديمقراطي",
            color: "#3498db",
            candidates: [
                { id: 101, name: "محمد أحمد", votes: 0 },
                { id: 102, name: "أحمد محمود", votes: 0 },
                { id: 103, name: "سامي خليل", votes: 0 }
            ]
        },
        {
            id: 2,
            name: "حزب التغيير الوطني",
            color: "#e74c3c",
            candidates: [
                { id: 201, name: "سارة محمد", votes: 0 },
                { id: 202, name: "فاطمة علي", votes: 0 },
                { id: 203, name: "نورا كمال", votes: 0 }
            ]
        },
        {
            id: 3,
            name: "حزب العدالة والتنمية",
            color: "#2ecc71",
            candidates: [
                { id: 301, name: "علي حسن", votes: 0 },
                { id: 302, name: "خالد عمر", votes: 0 },
                { id: 303, name: "محمود سعيد", votes: 0 }
            ]
        },
        {
            id: 4,
            name: "حزب الوسط العربي",
            color: "#f1c40f",
            candidates: [
                { id: 401, name: "أيمن عبدالله", votes: 0 },
                { id: 402, name: "بسام ناصر", votes: 0 },
                { id: 403, name: "جمال فاروق", votes: 0 }
            ]
        },
        {
            id: 5,
            name: "حزب المستقبل الواعد",
            color: "#9b59b6",
            candidates: [
                { id: 501, name: "حسناء محمد", votes: 0 },
                { id: 502, name: "دعاء أحمد", votes: 0 },
                { id: 503, name: "رنا خالد", votes: 0 }
            ]
        },
        {
            id: 6,
            name: "حزب النهضة العربية",
            color: "#1abc9c",
            candidates: [
                { id: 601, name: "سعيد مصطفى", votes: 0 },
                { id: 602, name: "طارق حسين", votes: 0 },
                { id: 603, name: "وسام علي", votes: 0 }
            ]
        },
        {
            id: 7,
            name: "حزب الأحرار",
            color: "#d35400",
            candidates: [
                { id: 701, name: "يوسف نادر", votes: 0 },
                { id: 702, name: "ياسر كمال", votes: 0 },
                { id: 703, name: "هاني سمير", votes: 0 }
            ]
        },
        {
            id: 8,
            name: "حزب الوحدة الوطنية",
            color: "#34495e",
            candidates: [
                { id: 801, name: "زينب فاروق", votes: 0 },
                { id: 802, name: "هبة الله", votes: 0 },
                { id: 803, name: "إيمان سليمان", votes: 0 }
            ]
        },
        {
            id: 9,
            name: "حزب الشعب الديمقراطي",
            color: "#16a085",
            candidates: [
                { id: 901, name: "نبيل عبدالرحمن", votes: 0 },
                { id: 902, name: "مازن عادل", votes: 0 },
                { id: 903, name: "كمال أسامة", votes: 0 }
            ]
        },
        {
            id: 10,
            name: "حزب التضامن الاجتماعي",
            color: "#c0392b",
            candidates: [
                { id: 1001, name: "ليلى مصطفى", votes: 0 },
                { id: 1002, name: "منى أحمد", votes: 0 },
                { id: 1003, name: "نادية محمود", votes: 0 }
            ]
        },
        {
            id: 11,
            name: "حزب البناء والتنمية",
            color: "#8e44ad",
            candidates: [
                { id: 1101, name: "عماد الدين", votes: 0 },
                { id: 1102, name: "صلاح عبدالله", votes: 0 },
                { id: 1103, name: "فؤاد ناصر", votes: 0 }
            ]
        },
        {
            id: 12,
            name: "حزب الأصالة والمعاصرة",
            color: "#2c3e50",
            candidates: [
                { id: 1201, name: "ريماس علي", votes: 0 },
                { id: 1202, name: "سلمى خالد", votes: 0 },
                { id: 1203, name: "تهاني وائل", votes: 0 }
            ]
        },
        {
            id: 13,
            name: "حزب الوفاء الوطني",
            color: "#f39c12",
            candidates: [
                { id: 1301, name: "وائل كمال", votes: 0 },
                { id: 1302, name: "هشام نبيل", votes: 0 },
                { id: 1303, name: "أنس أحمد", votes: 0 }
            ]
        },
        {
            id: 14,
            name: "حزب النور الجديد",
            color: "#d35400",
            candidates: [
                { id: 1401, name: "إيهاب سعيد", votes: 0 },
                { id: 1402, name: "جلال محمد", votes: 0 },
                { id: 1403, name: "رامي خالد", votes: 0 }
            ]
        },
        {
            id: 15,
            name: "حزب العدل والمساواة",
            color: "#27ae60",
            candidates: [
                { id: 1501, name: "سمية فاروق", votes: 0 },
                { id: 1502, name: "فيروز ناصر", votes: 0 },
                { id: 1503, name: "غادة كمال", votes: 0 }
            ]
        },
        {
            id: 16,
            name: "حزب الاستقلال",
            color: "#2980b9",
            candidates: [
                { id: 1601, name: "نبيل سعد", votes: 0 },
                { id: 1602, name: "ماهر علي", votes: 0 },
                { id: 1603, name: "أسامة محمد", votes: 0 }
            ]
        },
        {
            id: 17,
            name: "حزب التجمع الوطني",
            color: "#8e44ad",
            candidates: [
                { id: 1701, name: "حسام الدين", votes: 0 },
                { id: 1702, name: "بدر ناصر", votes: 0 },
                { id: 1703, name: "جاسم علي", votes: 0 }
            ]
        },
        {
            id: 18,
            name: "حزب الأمل العربي",
            color: "#e74c3c",
            candidates: [
                { id: 1801, name: "لمياء أحمد", votes: 0 },
                { id: 1802, name: "آية محمد", votes: 0 },
                { id: 1803, name: "ياسمين خالد", votes: 0 }
            ]
        }
    ],
    voters: [],
    adminPassword: "admin123",
    electionName: "الانتخابات البرلمانية 2023",
    voteTimestamps: []
};

// عناصر DOM
const loginSection = document.getElementById('loginSection');
const partiesSection = document.getElementById('partiesSection');
const candidatesSection = document.getElementById('candidatesSection');
const confirmationSection = document.getElementById('confirmationSection');
const adminSection = document.getElementById('adminSection');

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const backToPartiesBtn = document.getElementById('backToPartiesBtn');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const refreshBtn = document.getElementById('refreshBtn');
const exportBtn = document.getElementById('exportBtn');

const welcomeName = document.getElementById('welcomeName');
const partyNameHeader = document.getElementById('partyNameHeader');
const confirmationMessage = document.getElementById('confirmationMessage');
const electionNameInput = document.getElementById('electionName');
const resultsBody = document.getElementById('resultsBody');
const partiesList = document.getElementById('partiesList');
const candidatesList = document.getElementById('candidatesList');
const partySearch = document.getElementById('partySearch');
const resultsSearch = document.getElementById('resultsSearch');
const votersBody = document.getElementById('votersBody');
const totalVoters = document.getElementById('totalVoters');
const totalVotes = document.getElementById('totalVotes');
const lastVoteTime = document.getElementById('lastVoteTime');
const voteRate = document.getElementById('voteRate');

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderParties();
    setupEventHandlers();
    electionNameInput.value = appData.electionName;
});

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('electionData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        appData.parties = parsedData.parties || appData.parties;
        appData.voters = parsedData.voters || appData.voters;
        appData.electionName = parsedData.electionName || appData.electionName;
        appData.voteTimestamps = parsedData.voteTimestamps || appData.voteTimestamps;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('electionData', JSON.stringify({
        parties: appData.parties,
        voters: appData.voters,
        electionName: appData.electionName,
        voteTimestamps: appData.voteTimestamps
    }));
}

function calculateTotalVotes() {
    let total = 0;
    appData.parties.forEach(party => {
        party.candidates.forEach(candidate => {
            total += candidate.votes;
        });
    });
    return total;
}

function calculateVoteRate() {
    const now = Date.now();
    const oneMinuteAgo = now - 60000; // 60 ثانية
    const recentVotes = appData.voteTimestamps.filter(timestamp => timestamp > oneMinuteAgo);
    return recentVotes.length;
}

function renderParties(searchTerm = '') {
    partiesList.innerHTML = '';
    
    const filteredParties = appData.parties.filter(party => 
        party.name.includes(searchTerm)
    );
    
    filteredParties.forEach(party => {
        const card = document.createElement('div');
        card.className = 'party-card';
        card.style.borderTop = `5px solid ${party.color}`;
        card.innerHTML = `
            <h3>${party.name}</h3>
            <p>${party.candidates.length} مرشح</p>
            <button onclick="selectParty(${party.id})" class="btn btn-party">عرض المرشحين</button>
        `;
        partiesList.appendChild(card);
    });
}

function renderCandidates(partyId) {
    const party = appData.parties.find(p => p.id === partyId);
    if (!party) return;
    
    partyNameHeader.textContent = party.name;
    partyNameHeader.style.backgroundColor = party.color;
    
    candidatesList.innerHTML = '';
    
    party.candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <h4>${candidate.name}</h4>
            <p>الأصوات: ${candidate.votes}</p>
            <button onclick="selectCandidate(${party.id}, ${candidate.id})" class="btn btn-candidate">اختيار هذا المرشح</button>
        `;
        candidatesList.appendChild(card);
    });
}

function renderResults(searchTerm = '') {
    resultsBody.innerHTML = '';
    
    const totalVotesCount = calculateTotalVotes();
    let hasResults = false;
    
    appData.parties.forEach(party => {
        party.candidates.forEach(candidate => {
            const candidateMatch = candidate.name.includes(searchTerm);
            const partyMatch = party.name.includes(searchTerm);
            
            if (searchTerm === '' || candidateMatch || partyMatch) {
                const percentage = totalVotesCount > 0 
                    ? ((candidate.votes / totalVotesCount) * 100).toFixed(2) 
                    : 0;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${party.name}</td>
                    <td>${candidate.name}</td>
                    <td>${candidate.votes}</td>
                    <td>${percentage}%</td>
                `;
                resultsBody.appendChild(row);
                hasResults = true;
            }
        });
    });
    
    if (!hasResults) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="4" style="text-align: center;">لا توجد نتائج تطابق البحث</td>`;
        resultsBody.appendChild(row);
    }
    
    // تحديث إحصائية إجمالي الأصوات
    totalVotes.textContent = totalVotesCount;
}

function renderVotersList(newVoter = null) {
    votersBody.innerHTML = '';
    
    // عرض آخر 10 ناخبين (الأحدث أولاً)
    const lastVoters = [...appData.voters]
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10);
    
    lastVoters.forEach((voter, index) => {
        const row = document.createElement('tr');
        
        // تمييز آخر ناخب تمت إضافته
        if (newVoter && voter.id === newVoter.id && voter.timestamp === newVoter.timestamp) {
            row.classList.add('last-voter');
        }
        
        row.innerHTML = `
            <td>${voter.id}</td>
            <td>${voter.name}</td>
            <td>${voter.partyName}</td>
            <td>${voter.candidateName}</td>
            <td>${voter.voteTime}</td>
        `;
        votersBody.appendChild(row);
    });
}

function updateAdminPanel(newVoter = null) {
    // تحديث الإحصائيات
    totalVoters.textContent = appData.voters.length;
    
    if (newVoter) {
        lastVoteTime.textContent = new Date(newVoter.timestamp).toLocaleTimeString();
    } else if (appData.voters.length > 0) {
        const lastVoter = appData.voters.reduce((latest, current) => 
            current.timestamp > latest.timestamp ? current : latest
        );
        lastVoteTime.textContent = new Date(lastVoter.timestamp).toLocaleTimeString();
    }
    
    // حساب معدل التصويت
    const currentRate = calculateVoteRate();
    voteRate.textContent = `${currentRate}/دقيقة`;
    
    // تحديث النتائج
    renderResults(resultsSearch.value);
    
    // تحديث قائمة الناخبين
    renderVotersList(newVoter);
    
    // إضافة تأثير التحديث الحي إذا كان هناك ناخب جديد
    if (newVoter) {
        const statsCards = document.querySelectorAll('.stats-card');
        statsCards.forEach(card => {
            card.classList.add('live-update');
            setTimeout(() => {
                card.classList.remove('live-update');
            }, 2000);
        });
    }
}

function setupEventHandlers() {
    loginBtn.addEventListener('click', startVoting);
    logoutBtn.addEventListener('click', logout);
    adminLoginBtn.addEventListener('click', adminLogin);
    adminLogoutBtn.addEventListener('click', adminLogout);
    backToPartiesBtn.addEventListener('click', backToParties);
    confirmBtn.addEventListener('click', confirmVote);
    cancelBtn.addEventListener('click', cancelVote);
    refreshBtn.addEventListener('click', refreshResults);
    exportBtn.addEventListener('click', exportToExcel);
    electionNameInput.addEventListener('change', updateElectionName);
    partySearch.addEventListener('input', searchParties);
    resultsSearch.addEventListener('input', searchResults);
}

function updateElectionName() {
    appData.electionName = electionNameInput.value;
    saveToLocalStorage();
}

function searchParties() {
    renderParties(partySearch.value);
}

function searchResults() {
    renderResults(resultsSearch.value);
}

function startVoting() {
    const voterId = document.getElementById('voterId').value;
    const voterName = document.getElementById('voterName').value;
    
    if (!voterId || !voterName) {
        alert('الرجاء إدخال رقم الهوية والاسم الكامل');
        return;
    }
    
    if (appData.voters.some(v => v.id === voterId)) {
        alert('لقد قمت بالتصويت مسبقاً!');
        return;
    }
    
    appData.currentUser = { id: voterId, name: voterName };
    welcomeName.textContent = voterName;
    
    loginSection.classList.add('hidden');
    partiesSection.classList.remove('hidden');
}

function logout() {
    appData.currentUser = null;
    document.getElementById('voterId').value = '';
    document.getElementById('voterName').value = '';
    
    partiesSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
}

function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    
    if (password === appData.adminPassword) {
        document.getElementById('adminPassword').value = '';
        loginSection.classList.add('hidden');
        adminSection.classList.remove('hidden');
        
        // تحميل جميع البيانات عند الدخول
        updateAdminPanel();
        
        // بدء التحديث التلقائي كل 5 ثواني
        startLiveUpdates();
    } else {
        alert('كلمة مرور المسؤول غير صحيحة!');
    }
}

let liveUpdateInterval;
function startLiveUpdates() {
    // إيقاف أي interval سابق
    if (liveUpdateInterval) clearInterval(liveUpdateInterval);
    
    // بدء interval جديد
    liveUpdateInterval = setInterval(() => {
        if (!adminSection.classList.contains('hidden')) {
            updateAdminPanel();
        }
    }, 5000); // تحديث كل 5 ثواني
}

function adminLogout() {
    // إيقاف التحديث التلقائي
    if (liveUpdateInterval) clearInterval(liveUpdateInterval);
    
    adminSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
}

function selectParty(partyId) {
    appData.selectedParty = appData.parties.find(p => p.id === partyId);
    renderCandidates(partyId);
    partiesSection.classList.add('hidden');
    candidatesSection.classList.remove('hidden');
}

function backToParties() {
    appData.selectedParty = null;
    candidatesSection.classList.add('hidden');
    partiesSection.classList.remove('hidden');
}

function selectCandidate(partyId, candidateId) {
    const party = appData.parties.find(p => p.id === partyId);
    if (!party) return;
    
    appData.selectedCandidate = party.candidates.find(c => c.id === candidateId);
    appData.selectedParty = party;
    
    confirmationMessage.innerHTML = `
        أنت على وشك التصويت للمرشح:<br>
        <strong>${appData.selectedCandidate.name}</strong><br>
        من <strong>${party.name}</strong>
    `;
    
    candidatesSection.classList.add('hidden');
    confirmationSection.classList.remove('hidden');
}

function confirmVote() {
    if (!appData.selectedCandidate || !appData.currentUser || !appData.selectedParty) return;
    
    // تسجيل التصويت
    appData.selectedCandidate.votes++;
    
    // تسجيل وقت التصويت
    const voteTime = new Date();
    const timestamp = voteTime.getTime();
    
    // حفظ بيانات الناخب
    const voterData = {
        id: appData.currentUser.id,
        name: appData.currentUser.name,
        voteTime: voteTime.toLocaleString(),
        timestamp: timestamp,
        partyId: appData.selectedParty.id,
        partyName: appData.selectedParty.name,
        candidateId: appData.selectedCandidate.id,
        candidateName: appData.selectedCandidate.name
    };
    
    appData.voters.push(voterData);
    appData.voteTimestamps.push(timestamp);
    saveToLocalStorage();
    
    // إذا كان المسؤول متصل، قم بتحديث النتائج فوراً
    if (!adminSection.classList.contains('hidden')) {
        updateAdminPanel(voterData);
    }
    
    showThankYouMessage();
}

function cancelVote() {
    confirmationSection.classList.add('hidden');
    candidatesSection.classList.remove('hidden');
}

function showThankYouMessage() {
    confirmationSection.classList.add('hidden');
    alert(`شكراً لك ${appData.currentUser.name} على مشاركتك في التصويت!`);
    logout();
}

function refreshResults() {
    renderResults(resultsSearch.value);
    alert('تم تحديث النتائج بنجاح');
}

function exportToExcel() {
    const totalVotesCount = calculateTotalVotes();
    const now = new Date();
    const formattedDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    
    // تحضير البيانات للتصدير
    const exportData = [
        ["تقرير نتائج الانتخابات", "", "", "", ""],
        ["اسم الانتخابات:", appData.electionName, "", "", ""],
        ["تاريخ وتوقيت التصدير:", formattedDate, "", "", ""],
        ["إجمالي عدد الناخبين:", appData.voters.length, "", "", ""],
        ["إجمالي عدد الأصوات:", totalVotesCount, "", "", ""],
        ["معدل التصويت:", `${calculateVoteRate()} تصويت/دقيقة`, "", "", ""],
        [],
        ["النتائج النهائية", "", "", "", ""],
        ["الحزب", "المرشح", "عدد الأصوات", "النسبة المئوية", ""],
        ...appData.parties.flatMap(party => {
            return party.candidates.map(candidate => {
                const percentage = totalVotesCount > 0 
                    ? ((candidate.votes / totalVotesCount) * 100).toFixed(2) 
                    : 0;
                return [
                    party.name,
                    candidate.name,
                    candidate.votes,
                    `${percentage}%`,
                    ""
                ];
            });
        }),
        [],
        ["قائمة الناخبين", "", "", "", ""],
        ["رقم الهوية", "اسم الناخب", "الحزب", "المرشح", "وقت التصويت"],
        ...appData.voters.map(voter => [
            voter.id,
            voter.name,
            voter.partyName,
            voter.candidateName,
            voter.voteTime
        ])
    ];
    // إنشاء ورقة العمل
            const ws = XLSX.utils.aoa_to_sheet(exportData);
            
            // تنسيق الأعمدة
            ws['!cols'] = [
                { width: 25 }, { width: 25 },
                { width: 15 }, { width: 15 },
                { width: 20 }
            ];
            
            // دمج خلايا العناوين
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } },
                { s: { r: 6, c: 0 }, e: { r: 6, c: 4 } },
                { s: { r: 8 + appData.parties.reduce((sum, party) => sum + party.candidates.length, 0) + 1, c: 0 }, e: { r: 8 + appData.parties.reduce((sum, party) => sum + party.candidates.length, 0) + 1, c: 4 } }
            ];
            
            // إنشاء المصنف
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "تقرير الانتخابات");
            
            // تصدير الملف
            const fileName = `نتائج_${appData.electionName.replace(/\s+/g, '_')}_${now.toISOString().slice(0,10)}.xlsx`;
            XLSX.writeFile(wb, fileName);
            
            alert(`تم تصدير التقرير الكامل إلى ملف ${fileName}`);
        }

        // جعل الدوال متاحة عالمياً لاستخدامها في onClick
        window.selectParty = selectParty;
        window.selectCandidate = selectCandidate;