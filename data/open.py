import pickle

df = pickle.load(open("df_all.p", 'rb'))
print(len(df))
