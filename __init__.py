from flask import Flask, render_template, request, url_for
import numpy as np
import pandas as pd
import pickle
import functions

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/main')
def main():
    return render_template("main.html")

@app.route('/result', methods=['GET'])
def result():
    if request.method == "GET":
        # GET으로 받은 정보들을 딕셔너리에 담음. 그리고 먼저 필수 정보들을 수집하면서 삭제함. 남은 정보들은 안 되는 시간에 대한 정보
        info = request.args.to_dict()
        required = ['major1', 'major2', 'homework_value', 'teamwork_value', 'grade_value', 'numoftest_value']
        for menu in required:
            if menu not in info:
                return render_template("result_error.html")
        major1 = info['major1']; del info['major1']
        major2 = info['major2']; del info['major2']
        homework = info['homework_value']; del info['homework_value']
        teamwork = info['teamwork_value']; del info['teamwork_value']
        grade = info['grade_value']; del info['grade_value']
        numoftest = info['numoftest_value']; del info['numoftest_value']
        if 'emptylecture_value' in info:
            empty = True; del info['emptylecture_value']
        else:
            empty = False
        time = []
        index = 0
        while info:
            index += 1
            day = "timeban-day" + str(index)
            start = "timeban-start" + str(index)
            end = "timeban-end" + str(index)
            tmp_list = []
            if day in info:
                tmp_list.append(info[day])
                del info[day]
            if start in info:
                tmp_list.append(info[start])
                del info[start]
            if end in info:
                tmp_list.append(info[end])
                del info[end]
            if len(tmp_list) == 3:
                check_time = [tuple(map(int, tmp_list[1].split(":"))), tuple(map(int, tmp_list[2].split(":")))]
                if (check_time[1][0] - check_time[0][0]) * 60 + (check_time[1][1] - check_time[0][1]) > 0:
                    time.append((tmp_list[0] + " " + tmp_list[1], tmp_list[0] + " " + tmp_list[2]))
        pandas_result, new_result = functions.calculate_score(major1, major2, homework, teamwork, grade, numoftest, empty, time)
        if new_result is None:
            new_result = pd.DataFrame()
        length = len(pandas_result)
        new_length = len(new_result)
        return render_template("result.html", df = pandas_result, new_df = new_result, length = length, new_length = new_length)

@app.route('/graduate_table')
def graduate_table():
    return render_template("graduate_table.html")

myhost = "127.0.0.1"
myport = 5000

if __name__ == "__main__":
    app.run(host=myhost, port=myport)
