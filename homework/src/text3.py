# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
from operator import itemgetter

rate = list(map(float, input().split()))
n, m = map(int, input().split())

watch_list = [[] for _ in range(n)]

for i in range(n):
	watch = input()
	for j in watch:
		watch_list[i].append(j)
						
grade_list = [[] for _ in range(n)]
for i in range(n):
	grade = input()
	for j in grade:
		grade_list[i].append(j)

Y_list = [] 
O_list = []
rate_list = {
	'A':rate[0],
	'B':rate[1],
	'C':rate[2],
	'D':rate[3],
	'E':rate[4]
}

for i in range(n):
	for j in range(m):
		if watch_list[i][j] == "Y":
			Y_list.append([i,j])
			
			
for i in range(n):
	for j in range(m):
		if watch_list[i][j] == "O":
			O_list.append([i,j])

result1 = []
result2 = []
for i in Y_list:
	x, y = i[0],i[1]
	result1.append([grade_list[x][y], rate_list[grade_list[x][y]], x, y]) 
	
for i in O_list:
	x, y = i[0],i[1]
	result2.append([grade_list[x][y], rate_list[grade_list[x][y]], x, y]) 
	


result1.sort(key=itemgetter(1), reverse=True)

result2.sort(key=itemgetter(1), reverse=True)

for i in result1:
    print(*i)
for j in result2:
    print(*j)
	
	
	
	