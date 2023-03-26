if __name__ == '__main__':
    scores = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        scores.append([name, score])
    sorted_scores = sorted(scores, key=lambda x: (x[1], x[0]))
    
    lowest = sorted_scores[0][1]
    i = 1
    while(i < len(sorted_scores) and sorted_scores[i][1] == lowest):
        i += 1
    else:
        second_lowest = sorted_scores[i][1]
    
    while(i < len(sorted_scores) and sorted_scores[i][1] == second_lowest):
        print(sorted_scores[i][0])
        i += 1