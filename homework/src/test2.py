# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
n,m = map(int, input().split())
store = []
for i in range(m):
	store.append(list(map(int, input().split())))
	
buying_list = []
def dfs(Lv, store, bought,me):
	if Lv == m - 1 and me < n-1:
		bought += store[Lv][me]
		buying_list.append(bought)
		return
	if Lv == m-1 and me == n-1:
		buying_list.append(bought)
		return
	
	bought += store[Lv][me]
	if me < n-1:
		dfs(Lv+1,store,bought,me)
		me += 1
		bought += store[Lv][me]
		dfs(Lv, store, bought,me)
	elif me == n-1:
		dfs(Lv+1, store, bought,me)
	
	
dfs(0, store, 0, 0)
print(buying_list)