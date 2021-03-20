user_input = int(input())
start_time = []
end_time = []
start_min = []
end_min = []
for i in range(user_input):
	a, b = (input().split(' ~ '))
	c,d = a.split(':')
	start_time.append(c)
	start_min.append(d)
	e, f = b.split(':')
	end_time.append(e)
	end_min.append(f)
	
able_start_time = max(start_time)
able_min_list = []
for _ in range(user_input):
    able_min_list.append(start_min[start_time.index(able_start_time)])

able_start_min = max(able_min_list)

able_end_time = min(end_time)
able_min_list = []
for _ in range(user_input):
    able_min_list.append(end_min[end_time.index(able_end_time)])

able_end_min = min(able_min_list)

print(f'{able_start_time}:{able_start_min} ~ {able_end_time}:{able_end_min}')