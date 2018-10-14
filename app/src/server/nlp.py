import os
import re
import nltk
from stop_words import get_stop_words
from operator import itemgetter


def read_files(folder):
    notes = {}
    for f in os.listdir(folder):
        if f != '.DS_Store':
            path = folder + '/' + f
            with open(path, 'r',encoding='utf-8') as readFile:
                text = readFile.read()
            notes[f] = text
    return notes

def search_for_word(w, notes):
    locations = []
    for k in notes.keys():
        wordPositions = []
        text = notes[k]
        for m in re.finditer(w, text):
            #wordPositions.append(m.start(), m.end())
            print(k, text[m.start()-40:m.end()+40], '\n')
        #locations.append((k, wordPositions))

def split_files(folder):
    for f in os.listdir(folder):
        if f != '.DS_Store':
            path = folder + '/' + f
            with open(path, 'r') as readFile:
                text = readFile.read()
            chunksize = int(len(text)/10)
            for i in range(10):
                create_new_file(f.split('.')[0], text[i*chunksize:chunksize*(i+1)], i)

def create_new_file(name,txt,i):
    f = open('data/' + name + '_' + str(i) + '.txt', 'w+')
    f.write(txt)


def find_top_doc(word, d):
    top_doc = ''
    max_freq = 0
    for key in d:
        filtered_text = preprocess(d[key])
        filtered_length = len(filtered_text)
        rel_freq = (filtered_text.count(word.lower()))/filtered_length
        if rel_freq > max_freq:
            max_freq = rel_freq
            top_doc = key
    if max_freq == 0 or top_doc == '':
        print('NO MATCHES')
        return ('',-1,'','')
    else:
        print('WORD', word,
              'DOCUMENT',top_doc,
              'RELATIVE FREQ', max_freq,
              '\n',d[top_doc], '\n','-'*80)

        return (word, max_freq,top_doc, d[top_doc])



def inputSent(sent, dict):
    results = []
    stop_words = get_stop_words('english')
    words = sent.split(' ')
    not_stop_words = [w for w in words if w not in stop_words]
    for x in not_stop_words:
        tup = find_top_doc(x,dict)
        results.append(tup)
    results = sorted(results, key=itemgetter(1), reverse=True)
    return results[0]

def preprocess(block):
    stop_words = get_stop_words('english')
    noPunc = re.sub('[^a-zA-Z]',' ', block.lower())
    wlist = noPunc.split()
    filtered_words = [w.lower() for w in wlist if w not in stop_words]
    return filtered_words

def initializeDict():
    dataFolder = '../data'
    notes = read_files(dataFolder)
    return notes


if __name__ == '__main__':
    dataFolder = 'data'
    notes = read_files(dataFolder)
    inputSent('mexican assimilation',notes)


    #search_for_word('health',notes)
    #split_files(dataFolder)
