function major1Click(tmp){
    var general = ['고전.명저 (인문사회)', '성균인성.리더십 (인문사회)', '성균인성.리더십 (I-CAMPUS)', '성균인성.리더십 (자연과학)', '글로벌 (인문사회)', '글로벌 (자연과학)', '의사소통 (인문사회)', '의사소통 (자연과학)', '창의 (인문사회)', '창의 (자연과학)', '미래(SW/AI) (인문사회)', '미래(SW/AI) (I-CAMPUS)', '미래(SW/AI) (자연과학)', '인문사회과학/자연과학기반 (인문사회)', '인문사회과학/자연과학기반 (I-CAMPUS)', '인문사회과학/자연과학기반 (자연과학)', '인간/문화 (인문사회)', '인간/문화 (I-CAMPUS)', '인간/문화 (자연과학)', '사회/역사 (인문사회)', '사회/역사 (I-CAMPUS)', '사회/역사 (자연과학)', '자연/과학/기술 (인문사회)', '자연/과학/기술 (I-CAMPUS)', '자연/과학/기술 (자연과학)', '일반선택 (인문사회)', '일반선택 (I-CAMPUS)', '일반선택 (자연과학)', '기타과목 (인문사회)', '기타과목 (자연과학)', '외국인전용교과목 (인문사회)', '외국인전용교과목 (자연과학)'];
    var business = ['앙트레프레너십연계전공', '경영학과', '경영대학', '글로벌경영학과'];
    var economic = ['통계학과', '국제통상학전공', '경제학과', '글로벌경제학과'];
    var engineer = ['마이크로시스템기술전공', '사회환경시스템공학과', '건축학과', '시스템경영공학과', '건설환경공학부', '텍스타일시스템공학전공', '화학공학/고분자공학부', '텍스타일시스템공학과', '신소재공학부', '나노공학과', '공과대학', '기계공학부', '건축공학과', '조경학과', '화학공학과', '고분자시스템공학과', '화학공학부', '건축토목공학부'];
    var eastasia = ['한국학전공', '한국학연계전공'];
    var humanity = ['프랑스어문학과', '여성학전공', '유라시아지역문화경제전공', '문과대학', '중어중문학과', '고전학연계전공', '러시아어문학과', '글로컬문화콘텐츠전공', '한문학과', '비교문화전공', '융합언어학연계전공', '미래인문학연계전공', '영어영문학과', '독어독문학과', '문헌정보학과', '사학과', '철학과', '중국학전공', '국어국문학과', '일본학전공'];
    var law = ['법학과'];
    var education = ['한문교육과', '교육학과', '수학교육과', '컴퓨터교육과'];
    var society = ['정치외교학과', '미디어커뮤니케이션학과', '아동·청소년학과', '법무정책학연계전공', '사회과학대학', '심리학과', '사회학과', '소비자학과', '공익과법연계전공', '사회복지학과', '글로벌리더학부', '행정학과'];
    var biotechnology = ['생명공학대학', '식품생명공학과', '유전공학과', '생명산업공학전공', '융합생명공학과', '바이오메카트로닉스학과', '생명공학전공'];
    var nano = ['나노과학공학전공'];
    var convergence = ['글로벌바이오메디컬엔지니어링학과', '에너지과학연계전공', '컬처앤테크놀로지융합전공', '데이터사이언스융합전공', '인공지능융합전공', '인포매틱스융합전공', '글로벌바이오메디컬공학과'];
    var software = ['컴퓨터공학과', '소프트웨어학과', '융합소프트웨어전공', '융합소프트웨어연계전공-SCSC', '융합소프트웨어연계전공-SW융합'];
    var sport = ['스포츠과학과'];
    var medicine = ['약학부', '약학과'];
    var art = ['디자인학과', '연기예술학과', '무용학과', '영상학과', '예술대학', '미술학과', '의상학과'];
    var confucianism = ['유학대학', '유학.동양학과'];
    var natural = ['물리학과', '화학과', '자연과학대학', '수학과', '생명과학과'];
    var information = ['전자전기컴퓨터공학전공', '소프트웨어학과', '반도체시스템공학과', '정보통신대학', '전자전기공학부', '융합소프트웨어연계전공'];
    var hakbu = ['정보통신계열', '경영학(글로벌)전공', '공학계열', '자연과학계열'];

    if(tmp == "교양/기타") var a = general;
    else if(tmp == "경영대학") var a = business;
    else if(tmp == "경제대학") var a = economic;
    else if(tmp == "공과대학") var a = engineer;
    else if(tmp == "동아시아학술원") var a = eastasia;
    else if(tmp == "문과대학") var a = humanity;
    else if(tmp == "법과대학") var a = law;
    else if(tmp == "사범대학") var a = education;
    else if(tmp == "사회과학대학") var a = society;
    else if(tmp == "생명공학대학") var a = biotechnology;
    else if(tmp == "성균나노과학기술원") var a = nano;
    else if(tmp == "성균융합원") var a = convergence;
    else if(tmp == "소프트웨어대학") var a = software;
    else if(tmp == "스포츠과학대학") var a = sport;
    else if(tmp == "약학대학") var a = medicine;
    else if(tmp == "예술대학") var a = art;
    else if(tmp == "유학대학") var a = confucianism;
    else if(tmp == "자연과학대학") var a = natural;
    else if(tmp == "정보통신대학") var a = information;
    else if(tmp == "학부대학") var a = hakbu;

    var major2 = document.getElementById("major2");
    major2.innerHTML = "";
    var opt = document.createElement("option");
    opt.value = "";
    opt.innerHTML = "전공/영역 소단위";
    opt.selected = true;
    opt.disabled = true;
    major2.appendChild(opt);
    for (x in a) {
        var opt = document.createElement("option");
        opt.value = a[x];
        opt.innerHTML = a[x];
        major2.appendChild(opt);
      } 
}

function modalOpen(){
  document.getElementById("modal").style.display="block";
}

function modalClose(){
  document.getElementById("modal").style.display="none";
}

function timebanAdd(){
  /* 제외할 시간 추가 */
  var timebandiv = document.getElementById("timeban")
  if(timebandiv.childElementCount == 0){
    var length = 0;
  }
  else{
    var last_id = document.getElementById("timeban").lastChild.id;
    var length = parseInt(last_id.slice(-1), 10);
  }
  var new_timeban = document.createElement("div");
  new_timeban.id = "timeban" + (length+1).toString(10);
  var tmp_html = `<select class="timeban-day" name="timeban-day`+(length+1).toString(10)+`">
  <option value="" selected disabled>요일</option>
  <option value="월">월요일</option>
  <option value="화">화요일</option>
  <option value="수">수요일</option>
  <option value="목">목요일</option>
  <option value="금">금요일</option>
</select>
:
<select class="timeban-start" name="timeban-start`+(length+1).toString(10)+`">
  <option value="" selected disabled>시작 시간</option>
  <option value="09:00">오전 9시 00분</option>
  <option value="09:30">오전 9시 30분</option>
  <option value="10:00">오전 10시 00분</option>
  <option value="10:30">오전 10시 30분</option>
  <option value="11:00">오전 11시 00분</option>
  <option value="11:30">오전 11시 30분</option>
  <option value="12:00">오후 12시 00분</option>
  <option value="12:30">오후 12시 30분</option>
  <option value="13:00">오후 1시 00분</option>
  <option value="13:30">오후 1시 30분</option>
  <option value="14:00">오후 2시 00분</option>
  <option value="14:30">오후 2시 30분</option>
  <option value="15:00">오후 3시 00분</option>
  <option value="15:30">오후 3시 30분</option>
  <option value="16:00">오후 4시 00분</option>
  <option value="16:30">오후 4시 30분</option>
  <option value="17:00">오후 5시 00분</option>
  <option value="17:30">오후 5시 30분</option>
  <option value="18:00">오후 6시 00분</option>
  <option value="18:30">오후 6시 30분</option>
  <option value="19:00">오후 7시 00분</option>
  <option value="19:30">오후 7시 30분</option>
  <option value="20:00">오후 8시 00분</option>
  <option value="20:30">오후 8시 30분</option>
  <option value="21:30">오후 9시 00분</option>
</select>
~
<select class="timeban-end" name="timeban-end`+(length+1).toString(10)+`">
  <option value="" selected disabled>끝 시간</option>
  <option value="09:00">오전 9시 00분</option>
  <option value="09:30">오전 9시 30분</option>
  <option value="10:00">오전 10시 00분</option>
  <option value="10:30">오전 10시 30분</option>
  <option value="11:00">오전 11시 00분</option>
  <option value="11:30">오전 11시 30분</option>
  <option value="12:00">오후 12시 00분</option>
  <option value="12:30">오후 12시 30분</option>
  <option value="13:00">오후 1시 00분</option>
  <option value="13:30">오후 1시 30분</option>
  <option value="14:00">오후 2시 00분</option>
  <option value="14:30">오후 2시 30분</option>
  <option value="15:00">오후 3시 00분</option>
  <option value="15:30">오후 3시 30분</option>
  <option value="16:00">오후 4시 00분</option>
  <option value="16:30">오후 4시 30분</option>
  <option value="17:00">오후 5시 00분</option>
  <option value="17:30">오후 5시 30분</option>
  <option value="18:00">오후 6시 00분</option>
  <option value="18:30">오후 6시 30분</option>
  <option value="19:00">오후 7시 00분</option>
  <option value="19:30">오후 7시 30분</option>
  <option value="20:00">오후 8시 00분</option>
  <option value="20:30">오후 8시 30분</option>
  <option value="21:30">오후 9시 00분</option>
</select>
<button type="button" class="timeban_delete_btn" onclick="timebanDelete(`+(length+1).toString(10)+`)">삭제</button>`;

  new_timeban.innerHTML = tmp_html;
  document.getElementById("timeban").appendChild(new_timeban);
}

function timebanDelete(num){
  var remove_id = "timeban" + num.toString(10);
  var remove_node = document.getElementById(remove_id);
  remove_node.remove();
}