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
        var graduate_table2 = document.createElement("table");
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
            tmp.innerHTML = graduate_lecture[lecture];
            if(lecture < graduate_lecture.length / 2){
                graduate_table.appendChild(tmp);
            }
            else{
                graduate_table2.appendChild(tmp);
            }
        }

        if(["유학", "문과", "사회과학", "경제", "경영", "사범1", "예술", "스포츠과학", "글로벌융합학부"].includes(graduate_major)){
            var graduate_grade = graduate_grade1;
        }
        else if(["자연과학", "생명공학"].includes(graduate_major)){
            var graduate_grade = graduate_grade2;
        }
        else if(["정보통신1", "소프트웨어", "공과"].includes(graduate_major)){
            var graduate_grade = graduate_grade3;
        }
        else if( ["정보통신2"].includes(graduate_major)){
            var graduate_grade = graduate_grade4;
        }
        else if(["융합원"].includes(graduate_major)){
            var graduate_grade = graduate_grade5;
        }
        else if(["사범2", "의과"].includes(graduate_major)){
            var graduate_grade = graduate_grade6;
        }
        else if(["건축"].includes(graduate_major)){
            var graduate_grade = graduate_grade7;
        }
        else if(["약학"].includes(graduate_major)){
            var graduate_grade = graduate_grade8;
        }
        else{
            var graduate_grade = [];
        }

        var tmp_tr = document.createElement("tr");
        var tmp_tr2 = document.createElement("tr");
        for (grade in graduate_grade){
            var tmp = document.createElement("td")
            tmp.innerHTML = graduate_grade[grade];
            if(grade < graduate_lecture.length / 2){
                tmp_tr.appendChild(tmp);
            }
            else{
                tmp_tr2.appendChild(tmp);
            }
        }
        tmp_tr2.children[3].colSpan = 2;
        graduate_table.appendChild(tmp_tr);
        graduate_table2.appendChild(tmp_tr2);
        document.getElementById("graduate_result").innerHTML = "";
        document.getElementById("graduate_result").appendChild(graduate_table);
        document.getElementById("graduate_result").appendChild(graduate_table2);
    }
    else if(graduate_class == "16~19"){
        var graduate_table = document.createElement("table");
        var graduate_table2 = document.createElement("table");
        var graduate_lecture = ["인성", "리더십", "의사소통", "창의와 사유", "소프트웨어기초", "기본영어", "전문영어+글로벌문화", "인간/문화의 이해", "사회/역사의 이해", "자연/과학/기술의 이해", "기초인문사회과학", "기초자연과학", "합계"];
        var graduate_grade1 = ['2', '2', '4', '2', '4', '4', '2', '3', '3', '3', '9', '0', '38'];
        var graduate_grade2 = ['2', '2', '4', '2', '4', '4', '2', '3', '3', '3', '0', '24', '53'];
        var graduate_grade3 = ['2', '2', '4', '2', '0', '4', '2', '3', '3', '3', '0', '30', '55'];
        var graduate_grade4 = ['2', '2', '4', '2', '0', '4', '2', '3', '3', '3', '0', '24', '49'];
        var graduate_grade5 = ['2', '2', '4', '2', '0(4)', '4', '2', '3', '3', '3', '0', '24(21)', '49(50)'];
        var graduate_grade6 = ['2', '2', '4', '2', '4', '4', '2', '3', '3', '3', '3', '12', '44'];
        var graduate_grade7 = ['2', '2', '4', '2', '4', '4', '2', '3', '3', '3', '6', '12', '47'];
        var graduate_grade8 = ['2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2'];
        var graduate_grade9 = ['2', '2', '4', '2', '4', '4', '2(6)', '3(6)', '3(6)', '3(6)', '6(0)', '12(24)', '47(66)'];
        var graduate_grade10 = ['2', '2', '4', '2', '4', '4', '2', '3', '3', '3', '9', '38'];

        for (lecture in graduate_lecture){
            var tmp = document.createElement("th")
            tmp.innerHTML = graduate_lecture[lecture];
            if(lecture < graduate_lecture.length / 2){
                graduate_table.appendChild(tmp);
            }
            else{
                graduate_table2.appendChild(tmp);
            }
        }

        if(["유학", "문과", "사회과학", "경제", "경영", "사범1", "예술", "스포츠과학"].includes(graduate_major)){
            var graduate_grade = graduate_grade1;
        }
        else if(["자연과학", "생명공학"].includes(graduate_major)){
            var graduate_grade = graduate_grade2;
        }
        else if(["정보통신1", "공과", "융합원"].includes(graduate_major)){
            var graduate_grade = graduate_grade3;
        }
        else if(["정보통신2"].includes(graduate_major)){
            var graduate_grade = graduate_grade4;
        }
        else if(["소프트웨어"].includes(graduate_major)){
            var graduate_grade = graduate_grade5;
        }
        else if(["사범2"].includes(graduate_major)){
            var graduate_grade = graduate_grade6;
        }
        else if(["건축"].includes(graduate_major)){
            var graduate_grade = graduate_grade7;
        }
        else if(["약학"].includes(graduate_major)){
            var graduate_grade = graduate_grade8;
        }
        else if(["의과"].includes(graduate_major)){
            var graduate_grade = graduate_grade9;
        }
        else if(["글로벌융합학부"].includes(graduate_major)){
            var graduate_grade = graduate_grade10;
        }
        else{
            var graduate_grade = [];
        }

        var tmp_tr = document.createElement("tr");
        var tmp_tr2 = document.createElement("tr");
        for (grade in graduate_grade){
            var tmp = document.createElement("td")
            tmp.innerHTML =graduate_grade[grade];
            if(grade < graduate_lecture.length / 2){
                tmp_tr.appendChild(tmp);
            }
            else{
                tmp_tr2.appendChild(tmp);
            }
        }
        if(graduate_major == "글로벌융합학부"){
            tmp_tr2.children[3].colSpan = 2;
        }
        graduate_table.appendChild(tmp_tr);
        graduate_table2.appendChild(tmp_tr2);
        document.getElementById("graduate_result").innerHTML = "";
        document.getElementById("graduate_result").appendChild(graduate_table);
        document.getElementById("graduate_result").appendChild(graduate_table2);
    }
}