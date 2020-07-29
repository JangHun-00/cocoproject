function graduateResult(){
    var graduate_class = document.getElementById("graduate_class").value;
    var graduate_major = document.getElementById("graduate_major").value;
    if(graduate_class == ""){
        alert("학번을 선택해주세요!");
    }
    else if(graduate_major == ""){
        alert("소속대학을 선택해주세요!");
    }
    else if(graduate_class == "20"){
        var graduate_table = document.createElement("table");
        var graduate_lecture = ["성균인성·리더십", "고전·명저", "의사소통", "창의", "미래(SW/AI)", "글로벌", "인간/문화", "사회/역사", "자연/과학/기술", "인문사회과학기반", "자연과학기반", "합계"];
        var graduate_grade1 = ['2', '3', '4', '3', '6', '6', '3', '3', '3', '9', '42'];
        var graduate_grade2 = ['2', '3', '4', '3', '6', '6', '3', '3', '3', '24', '57'];
        var graduate_grade3 = ['2', '3', '4', '3', '8', '6', '3', '3', '3', '18', '53'];
        var graduate_grade4 = ['2', '3', '4', '3', '8', '6', '3', '3', '3', '12', '47'];
        var graduate_grade5 = ['2', '3', '4', '3', '8', '6', '3', '3', '3', '21', '56'];
        var graduate_grade6 = ['2', '3', '4', '3', '6', '6', '3', '3', '3', '15', '48'];
        var graduate_grade7 = ['2', '3', '4', '3', '6', '6', '3', '3', '3', '18', '51'];
        var graduate_grade8 = ['2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2'];

        for (lecture in graduate_lecture){
            var tmp = document.createElement("th")
            tmp.innerHTML = lecture;
            graduate_table.appendChild(tmp);
        }

        if(graduate_major in ["유학", "문과", "사회과학", "경제", "경영", "사범1", "예술", "스포츠과학", "글로벌융합학부"]){
            var graduate_grade = graduate_grade1;
        }
        else if(graduate_major in ["자연과학", "생명공학"]){
            var graduate_grade = graduate_grade2;
        }
        else if(graduate_major in ["정보통신1", "소프트웨어", "공과"]){
            var graduate_grade = graduate_grade3;
        }
        else if(graduate_major in ["정보통신2"]){
            var graduate_grade = graduate_grade4;
        }
        else if(graduate_major in ["융합원"]){
            var graduate_grade = graduate_grade5;
        }
        else if(graduate_major in ["사범2", "의과"]){
            var graduate_grade = graduate_grade6;
        }
        else if(graduate_major in ["건축"]){
            var graduate_grade = graduate_grade7;
        }
        else if(graduate_major in ["약학"]){
            var graduate_grade = graduate_grade8;
        }
        else{
            var graduate_grade = [];
        }
        var tmp_tr = document.createElement("tr");
        for (grade in graduate_grade){
            var tmp = document.createElement("td")
            tmp.innerHTML = grade;
            tmp_tr.appendChild(tmp);
        }
        graduate_table.appendChild(tmp_tr);
        document.getElementById("graduate_result").innerHTML = "";
        document.getElementById("graduate_result").appendChild(graduate_table);
    }
    else if(graduate_class == "16~19"){
        var graduate_lecture = ["인성", "리더십", "의사소통", "창의와 사유", "소프트웨어기초", "기본영어", "전문영어+글로벌문화", "인간/문화의 이해", "사회/역사의 이해", "자연/과학/기술의 이해", "기초인문사회과학", "기초자연과학", "합계"];
        
    }
}