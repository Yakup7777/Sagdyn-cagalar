const fs = require('fs');
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf-8');

const translations = {
  tk: {
    'tuina.body.title': 'Beden Agzalary we Tilsimler',
    'tuina.body.1.title': '1. Kelle we Ýüz',
    'tuina.body.1.how': 'Nädip etmeli: Maňlaý: Barmaklaryňyz bilen maňlaýda kiçeňräk aýlawly hereketler bilen ýuwaşja owkalaň. Çekge: Iki çekgeden hem aýlawly owkalaň. Gözüň töweregi: Dartgynlygy aýyrmak üçin gözüň we gaşyň töweregine ýeňil basyş ediň.',
    'tuina.body.1.benefits': 'Peýdasy: Kelleagyryny aýyrýar, göz ýadamagyny azaldýar we çagany rahatlandyrýar.',
    'tuina.body.1.when': 'Haçan etmeli: Çaga ukamazdan öň rahatlanmak üçin. Ekrandan soň ýa-da stresli ýagdaýlardan soň gözüň ýadamagyny aýyrmak üçin.',
    'tuina.body.2.title': '2. Boýun we Eginler',
    'tuina.body.2.how': 'Nädip etmeli: Boýun: Başbarmaklaryňyz bilen boýun myşsalaryny ýeňil basyň we owkalaň. Eginler: Aýaňyz bilen egin myşsalarynda ýuwaşja aýlawly hereketler ediň.',
    'tuina.body.2.benefits': 'Peýdasy: Boýundaky we egindäki dartgynlygy aýyrýar, syratlylyga kömek edýär we stresi aýyrýar.',
    'tuina.body.2.when': 'Haçan etmeli: Köp wagt oturanyndan ýa-da oýnanyndan soň. Çaga dartgynly ýa-da stresli bolanda.',
    'tuina.body.3.title': '3. Gollar we Eller',
    'tuina.body.3.how': 'Nädip etmeli: Gollar: Barmaklaryňyz bilen gollarda ýokary-aşak sypalaň. Eller: Başbarmagyňyz bilen aýa we barmaklary aýlawly hereketler bilen owkalaň.',
    'tuina.body.3.benefits': 'Peýdasy: Gan aýlanyşyny gowulandyrýar, çeýeligi artdyrýar we ellerdäki dartgynlygy azaldýar.',
    'tuina.body.3.when': 'Haçan etmeli: Ýazandan ýa-da enjamlardan peýdalanandan soň. Çeýeligi artdyrmak üçin sportdan öň ýa-da soň.',
    'tuina.body.4.title': '4. Arka we Oňurga',
    'tuina.body.4.how': 'Nädip etmeli: Oňurga: Barmaklaryňyz bilen oňurga boýunça boýundan bil arkasyna çenli ýuwaşja owkalaň. Bil arkasy: Bil arkasyna ýeňilçe basyň we aýaňyzy aýlawly owkalaň.',
    'tuina.body.4.benefits': 'Peýdasy: Arka agyrylaryny aýyrýar, oňat syratlylyga kömek edýär we rahatlandyrýar.',
    'tuina.body.4.when': 'Haçan etmeli: Ylgaw ýa-da oýun ýaly bedenterbiýe işjeňliklerinden soň. Arka ýadamagyny azaltmak üçin köp oturylýan wagtlardan soň.',
    'tuina.body.5.title': '5. Aýaklar we Dabanlar',
    'tuina.body.5.how': 'Nädip etmeli: Daban: Başbarmaklaryňyz bilen kiçi aýlawlar edip dabany we barmaklary ýuwaşja owkalaň. Aýaklar: Aýaklardan butlara çenli uzyn sypalamalar ediň. Baldyra we butlara ýeňil basyň.',
    'tuina.body.5.benefits': 'Peýdasy: Aýak damar çekmesini azaldýar, gan aýlanyşygyny gowulandyrýar we sagdyn ösmegine ýardam berýär.',
    'tuina.body.5.when': 'Haçan etmeli: Ylgamak ýa-da sport oýnamak ýaly beden işjeňliklerinden öň ýa-da soň. Ukudan öň rahatlanmak üçin.',
    'tuina.timing.title': 'Tuina Massažy Haçan Edilmeli?',
    'tuina.timing.daily': 'Gündelik ulanmak: Rahatlygy saklamak we umumy saglygy ösdürmek üçin Tuinany gündelik edip bolýar.',
    'tuina.timing.special': 'Ýörite wagtlar: Sport ýa-da oýun ýaly beden işjeňliklerinden soň. Çaga stresli, dartgynly bolanda ýa-da myşsa agyrylary bolanda. Uky kynçylyklary, kelleagyry ýa-da iýmit siňdiriş kynçylyklarynda kömek etmek üçin.',
    'tuina.keybenefits.title': 'Çagalar üçin Tuina Massažynyň Esasy Peýdalary',
    'tuina.keybenefits.health': 'Saglyk peýdalary: Gan aýlanyşygyna kömek edýär, immunitet ulgamyny goldaýar we umumy saglygy gowulandyrýar.',
    'tuina.keybenefits.relieves': 'Adaty kynçylyklary aýyrýar: Myşsa dartgynlygyny, stresi, kelleagyrylary we iýmit siňdiriş kynçylyklaryny egisýär.',
    'tuina.keybenefits.sleep': 'Ukyny gowulandyrýar: Rahatlanmaga ýardam berýär we çagalaryň oňat uklamagyna kömek edýär.'
  },
  ru: {
    'tuina.body.title': 'Части тела и техники',
    'tuina.body.1.title': '1. Голова и лицо',
    'tuina.body.1.how': 'Как выполнять: Лоб: Кончиками пальцев мягко массируйте лоб мелкими круговыми движениями. Виски: Слегка массируйте виски круговыми движениями. Вокруг глаз: Мягко надавливайте вокруг глаз и бровей для снятия напряжения.',
    'tuina.body.1.benefits': 'Польза: Снимает головные боли, уменьшает усталость глаз и успокаивает ребенка.',
    'tuina.body.1.when': 'Когда выполнять: Перед сном для расслабления. После экрана или стресса для снятия усталости глаз.',
    'tuina.body.2.title': '2. Шея и плечи',
    'tuina.body.2.how': 'Как выполнять: Шея: Большими пальцами мягко нажимайте и массируйте мышцы шеи. Плечи: Делайте мягкие круговые движения ладонями по плечевым мышцам.',
    'tuina.body.2.benefits': 'Польза: Снимает напряжение в шее и плечах, улучшает осанку и снимает стресс.',
    'tuina.body.2.when': 'Когда выполнять: После долгого сидения или игр. Когда ребенок напряжен или испытывает стресс.',
    'tuina.body.3.title': '3. Руки и кисти',
    'tuina.body.3.how': 'Как выполнять: Руки: Поглаживайте предплечья вверх-вниз легкими движениями. Кисти: Мягко массируйте ладони и пальцы большими пальцами круговыми движениями.',
    'tuina.body.3.benefits': 'Польза: Улучшает кровообращение, повышает гибкость и снимает напряжение в руках.',
    'tuina.body.3.when': 'Когда выполнять: После письма или использования устройств. До или после спорта для гибкости.',
    'tuina.body.4.title': '4. Спина и позвоночник',
    'tuina.body.4.how': 'Как выполнять: Позвоночник: Мягко массируйте вдоль позвоночника от шеи до поясницы кончиками пальцев. Поясница: Слегка надавливайте на поясницу и массируйте круговыми движениями ладоней.',
    'tuina.body.4.benefits': 'Польза: Снимает боли в спине, улучшает осанку и способствует расслаблению.',
    'tuina.body.4.when': 'Когда выполнять: После физических нагрузок или игр. После долгого сидения для снятия напряжения.',
    'tuina.body.5.title': '5. Ноги и стопы',
    'tuina.body.5.how': 'Как выполнять: Стопы: Мягко массируйте подошвы и пальцы ног большими пальцами круговыми движениями. Ноги: Поглаживайте ноги от стоп до бедер. Слегка надавливайте на икры и бедра.',
    'tuina.body.5.benefits': 'Польза: Снимает спазмы ног, улучшает кровообращение и способствует здоровому росту.',
    'tuina.body.5.when': 'Когда выполнять: До или после спорта. Перед сном для расслабления и улучшения сна.',
    'tuina.timing.title': 'Когда следует делать массаж Туйна?',
    'tuina.timing.daily': 'Ежедневное использование: Туйна можно делать ежедневно для поддержания расслабления и здоровья.',
    'tuina.timing.special': 'Особые случаи: После физических нагрузок. Когда ребенок напряжен, испытывает стресс или мышечные боли. Для помощи при проблемах со сном, головных болях или расстройствах пищеварения.',
    'tuina.keybenefits.title': 'Ключевые преимущества массажа Туйна для детей',
    'tuina.keybenefits.health': 'Польза для здоровья: Улучшает кровообращение, поддерживает иммунную функцию и общее здоровье.',
    'tuina.keybenefits.relieves': 'Облегчает частые проблемы: Снимает мышечное напряжение, стресс, головные боли и проблемы с пищеварением.',
    'tuina.keybenefits.sleep': 'Улучшает сон: Способствует расслаблению и помогает детям лучше спать.'
  },
  de: {
    'tuina.body.title': 'Körperteile und Techniken',
    'tuina.body.1.title': '1. Kopf und Gesicht',
    'tuina.body.1.how': 'Durchführung: Stirn: Mit den Fingern vorsichtig in kleinen kreisenden Bewegungen auf der Stirn reiben. Schläfen: Leicht in Kreisen an beiden Schläfen massieren. Um die Augen: Sanft um die Augen und Augenbrauen drücken, um Verspannungen zu lösen.',
    'tuina.body.1.benefits': 'Vorteile: Lindert Kopfschmerzen, reduziert die Belastung der Augen und hilft dem Kind, sich zu beruhigen.',
    'tuina.body.1.when': 'Wann: Vor dem Schlafengehen, um dem Kind zu helfen, sich zu entspannen. Nach dem Fernsehen oder stressigen Aktivitäten.',
    'tuina.body.2.title': '2. Nacken und Schultern',
    'tuina.body.2.how': 'Durchführung: Nacken: Mit den Daumen sanft drücken und die Muskeln entlang des Nackens massieren. Schultern: Mit den Handflächen sanfte kreisende Bewegungen auf den Schultermuskeln ausführen.',
    'tuina.body.2.benefits': 'Vorteile: Reduziert Verspannungen in Nacken und Schultern, hilft bei der Körperhaltung und baut Stress ab.',
    'tuina.body.2.when': 'Wann: Nach langem Sitzen oder Spielen. Wenn das Kind angespannt oder gestresst ist.',
    'tuina.body.3.title': '3. Arme und Hände',
    'tuina.body.3.how': 'Durchführung: Arme: Die Unterarme mit leichten Streichbewegungen auf- und abreiben. Hände: Die Handflächen und Finger sanft mit den Daumen in kreisenden Bewegungen massieren.',
    'tuina.body.3.benefits': 'Vorteile: Verbessert die Durchblutung, erhöht die Flexibilität und löst Verspannungen in den Händen.',
    'tuina.body.3.when': 'Wann: Nach dem Schreiben oder Verwenden von Geräten. Vor oder nach dem Sport.',
    'tuina.body.4.title': '4. Rücken und Wirbelsäule',
    'tuina.body.4.how': 'Durchführung: Wirbelsäule: Massieren Sie sanft entlang der Wirbelsäule vom Nacken zum unteren Rücken. Unterer Rücken: Üben Sie leichten Druck aus und bewegen Sie die Handflächen kreisförmig.',
    'tuina.body.4.benefits': 'Vorteile: Lindert Rückenschmerzen, fördert eine bessere Körperhaltung und Entspannung.',
    'tuina.body.4.when': 'Wann: Nach körperlichen Aktivitäten. Nach langem Sitzen, um Verspannungen im Rücken zu lösen.',
    'tuina.body.5.title': '5. Beine und Füße',
    'tuina.body.5.how': 'Durchführung: Füße: Massieren Sie die Fußsohlen und Zehen sanft mit Daumen. Beine: Streichen Sie von den Füßen zu den Oberschenkeln. Drücken Sie sanft auf Waden und Oberschenkel.',
    'tuina.body.5.benefits': 'Vorteile: Reduziert Beinkrämpfe, verbessert die Durchblutung und unterstützt ein gesundes Wachstum.',
    'tuina.body.5.when': 'Wann: Vor oder nach körperlichen Aktivitäten. Vor dem Schlafengehen.',
    'tuina.timing.title': 'Wann sollte die Tuina-Massage durchgeführt werden?',
    'tuina.timing.daily': 'Täglicher Gebrauch: Tuina kann täglich durchgeführt werden, um Entspannung und allgemeine Gesundheit zu erhalten.',
    'tuina.timing.special': 'Besondere Zeiten: Nach körperlichen Aktivitäten. Wenn das Kind gestresst ist oder Muskelschmerzen hat. Bei Schlafproblemen, Kopfschmerzen oder Verdauungsbeschwerden.',
    'tuina.keybenefits.title': 'Hauptvorteile der Tuina-Massage für Kinder',
    'tuina.keybenefits.health': 'Gesundheitliche Vorteile: Hilft bei der Durchblutung, unterstützt die Immunfunktion und verbessert die allgemeine Gesundheit.',
    'tuina.keybenefits.relieves': 'Lindert häufige Probleme: Löst Muskelverspannungen, Stress, Kopfschmerzen und Verdauungsprobleme.',
    'tuina.keybenefits.sleep': 'Verbessert den Schlaf: Fördert die Entspannung und hilft Kindern, besser zu schlafen.'
  }
};

let contentModified = content;

// Use regex to locate each language's object block
for (const [lang, langTranslations] of Object.entries(translations)) {
  const blockStartRegex = new RegExp(`^\\s*${lang}\\s*:\\s*\\{\\s*$`, 'm');
  const matchStart = blockStartRegex.exec(contentModified);
  
  if (matchStart) {
    const startIndex = matchStart.index;
    const innerBracketStart = contentModified.indexOf('{', startIndex);
    
    // Find the matching closing bracket
    let bracketCount = 1;
    let innerBracketEnd = innerBracketStart + 1;
    while (bracketCount > 0 && innerBracketEnd < contentModified.length) {
      if (contentModified[innerBracketEnd] === '{') bracketCount++;
      if (contentModified[innerBracketEnd] === '}') bracketCount--;
      innerBracketEnd++;
    }
    
    let blockContent = contentModified.substring(innerBracketStart + 1, innerBracketEnd - 1);
    
    // Within this block content, replace the specific keys
    for (const [key, value] of Object.entries(langTranslations)) {
      // Create a regex to match the key and its value
      // Handle the fact that some values might contain line breaks or single quotes (escaped or not)
      const keyRegex = new RegExp(`^\\s*'${key.replace(/\\./g, '\\\\.')}'\\s*:\\s*'.*?',?$`, 'gm');
      
      const safeValue = value.replace(/'/g, "\\'");
      const newKeyValueStr = `    '${key}': '${safeValue}',`;
      
      if (keyRegex.test(blockContent)) {
        blockContent = blockContent.replace(keyRegex, newKeyValueStr);
      } else {
        // Append if not found (though they should be there)
        blockContent += `\n${newKeyValueStr}`;
      }
    }
    
    // Reconstruct the file content
    contentModified = contentModified.substring(0, innerBracketStart + 1) + blockContent + contentModified.substring(innerBracketEnd - 1);
  }
}

fs.writeFileSync('src/context/LanguageContext.tsx', contentModified);
console.log('LanguageContext.tsx updated with correct translations.');
