```python
import jieba
import jieba.posseg as pseg


def isname(single_word_string):
    pair_word_list = pseg.lcut(single_word_string)
    for eve_word, cixing in pair_word_list:
        if cixing == "nr":
            return True
    return False


def read_file(file_path):
    f = open(file_path, "r", encoding="utf-8")
    line = f.read()
    return line


text_str = read_file("三国演义.txt")

name = {}

for j in jieba.cut(text_str):
    if isname(j):
        if name.get(j) is not None:
            name[j] += 1
        else:
            name.setdefault(j, 1)

res = sorted(name, key=lambda x: name[x], reverse=True)


for i in range(51):
    print(f"{res[i]}: {name[res[i]]}次")

```



# 得到的数据(出现次数最多的前50个)

```
曹操: 636次
玄德: 394次
关公: 323次
吕布: 297次
玄德曰: 280次
瑜: 195次
袁绍: 187次
汝: 181次
张飞: 171次
孔明: 168次
布: 136次
云长: 133次
孔明曰: 129次
周瑜: 118次
刘表: 112次
董卓: 109次
耶: 104次
孙策: 104次
赵云: 101次
李: 98次
肃: 85次
袁术: 82次
蔡瑁: 71次
卓: 66次
孙权: 64次
曹军: 53次
李典: 51次
黄盖: 50次
曹兵: 50次
糜竺: 49次
诸侯: 48次
鲁肃: 48次
瓒: 47次
孙坚: 46次
宫: 46次
陈宫: 46次
曹: 45次
太史慈: 45次
公孙瓒: 44次
徐晃: 44次
徐庶: 44次
许昌: 43次
刘玄德: 42次
许褚: 42次
曹仁: 41次
黄祖: 41次
袁尚: 41次
杨奉: 38次
孙乾: 37次
侯: 35次
黄巾: 34次
```

