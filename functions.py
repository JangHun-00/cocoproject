import pickle
import numpy as np
import pandas as pd

def calculate_score(major_big, major_small, assign='상관없음', teamwork='상관없음', grade='상관없음', exam='상관없음', show_new_info = False, times=[]):
    
    major_dict = pickle.load(open('data/major_dict.p', 'rb'))
    df = pickle.load(open("data/" + str(major_dict[major_big][major_small]), 'rb'))
    
    data = []

    df2 = None
    if show_new_info:
        condition = df['everytime_rating'] == 0
        df2 = df[condition]
    
    if assign=='많음':
        dic1 = {'많음': 1, '보통': 0, '없음': -1}
    elif assign=='보통':
        dic1 = {'많음': 0, '보통': 1, '없음': 0}
    elif assign == '없음':
        dic1 = {'많음': -1, '보통': 0, '없음': 1}
    else:
        dic1 = {'많음': 0, '보통': 0, '없음': 0}
    
    if teamwork=='많음':
        dic2 = {'많음': 1, '보통': 0, '없음': -1}
    elif teamwork=='보통':
        dic2 = {'많음': 0, '보통': 1, '없음': 0}
    elif teamwork == '없음':
        dic2 = {'많음': -1, '보통': 0, '없음': 1}
    else:
        dic2 = {'많음': 0, '보통': 0, '없음': 0}
        
    if grade == '학점느님':
        dic3 = {'학점느님': 1, '비율 채워줌': 0, '매우 깐깐함': -1, 'F 폭격기': -1}
    elif grade == '비율채워줌':
        dic3 = {'학점느님': 0, '비율 채워줌': 1, '매우 깐깐함': 0, 'F 폭격기': 0}
    elif grade == '깐깐':
        dic3 = {'학점느님': -1, '비율 채워줌': 0, '매우 깐깐함': 1, 'F 폭격기': 1}
    else:
        dic3 = {'학점느님': 0, '비율 채워줌': 0, '매우 깐깐함': 0, 'F 폭격기': 0}
    
    if exam == '3번이상':
        dic4 = {'네번이상': 1, '세 번': 1, '두 번': 0, '한 번': -1, '없음':-1}
    elif exam == '2번':
        dic4 = {'네번이상': 0, '세 번': 0, '두 번': 1, '한 번': 0, '없음':0}
    elif exam == '1번이하':
        dic4 = {'네번이상': -1, '세 번': -1, '두 번': 0, '한 번': 1, '없음':1}
    else:
        dic4 = {'네번이상': 0, '세 번': 0, '두 번': 0, '한 번': 0, '없음':0}
        
    df = filtering_time(df, times)
    for i in range(len(df)):
        try:
            score = dic1[df.iloc[i]['hw']] + dic2[df.iloc[i]['Teamwork']]+ dic3[df.iloc[i]['grade_ratio']] + dic4[df.iloc[i]['exam']]
            score *= 2
            score += df.iloc[i]['everytime_rating']
        except:
            score = np.nan
        data.append(score)
    df['score'] = pd.Series(data)
    df.dropna(axis=0, inplace = True)
    df.drop('filtered', axis=1, inplace=True)
    df.sort_values('score', ascending=False, inplace = True)
    return df, df2


def filtering_time(df, times):
    data = [False] * len(df)
    for time in times:
        day = time[0][0]
        start_time = 60 * int(time[0][2:4]) + int(time[0][5:7])
        end_time = 60 * int(time[1][2:4]) + int(time[1][5:7])
        for i in range(len(df)-1, -1, -1):
            try:
                start_1, end_1 = df.iloc[i]['start_1'], df.iloc[i]['end_1']
                lecture_start_time = 60 * int(start_1[1:3]) + int(start_1[4:6])
                lecture_end_time = 60 * int(end_1[1:3]) + int(end_1[4:6])
                if end_1[0] == day:
                    if end_time > lecture_start_time and start_time < lecture_end_time:
                        # drop
                        data[i] = np.nan
                        continue

                start_2, end_2 = df.iloc[i]['start_2'], df.iloc[i]['end_2']
                lecture_start_time = 60 * int(start_2[1:3]) + int(start_2[4:6])
                lecture_end_time = 60 * int(end_2[1:3]) + int(end_2[4:6])
                if end_2[0] == day:
                    if end_time > lecture_start_time and start_time < lecture_end_time:
                        # drop
                        data[i] = np.nan
            except:
                pass
    df['filtered'] = pd.Series(data)
    return df