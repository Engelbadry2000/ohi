function search() {
    const searchInput = document.getElementById('searchInput').value;
    const studentData = {
        "2022101903": {
            "name": "أحمد شريف عزت حامد عبدالعزيز",
            "seatNumber": "2022101903",
            "nationalID": "30710261102111",
            "level": "الثاني",
            "department": "علم الإدارة",
            "totalGrade": "C",
            "gpa": "2.55",
            "grades": [
                {"subject": "نظم المعلومات الإدارية", "grade": "C"},
                {"subject": "تشغيلات الأعمال", "grade": "C+"},
                {"subject": "بيئة الأعمال", "grade": "C"},
                {"subject": "مبادئ الإنتاج والعمليات", "grade": "C+"},
                {"subject": "مبادئ المحاسبة الإدارية", "grade": "C"},
                {"subject": "لغة إنجليزية (2)", "grade": "C+"}
            ]
        }
    };
    
    if (studentData[searchInput]) {
        const student = studentData[searchInput];
        document.getElementById('studentName').innerText = student.name;
        document.getElementById('seatNumber').innerText = student.seatNumber;
        document.getElementById('nationalID').innerText = student.nationalID;
        document.getElementById('level').innerText = student.level;
        document.getElementById('department').innerText = student.department;
        document.getElementById('totalGrade').innerText = student.totalGrade;
        document.getElementById('gpa').innerText = student.gpa;
        
        const gradesTable = document.getElementById('gradesTable');
        gradesTable.innerHTML = `
            <tr>
                <th>اسم المادة</th>
                <th>التقدير</th>
            </tr>`;
        
        student.grades.forEach(subject => {
            const row = gradesTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerText = subject.subject;
            cell2.innerText = subject.grade;
        });
        
        document.getElementById('studentInfo').style.display = 'block';
    } else {
        alert('لم يتم العثور على الطالب');
    }
}
