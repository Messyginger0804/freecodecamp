def arithmetic_arranger(problems, show_answers=False):
    if len(problems) > 5:
        return "Error: Too many problems."

    top_row = []
    bottom_row = []
    dash_row = []
    answer_row = []

    for problem in problems:
        operand1, operator, operand2 = problem.split()
        width = max(len(operand1), len(operand2)) + 2

        top_row.append(operand1.rjust(width))
        bottom_row.append(operator + " " + operand2.rjust(width - 2))
        dash_row.append("-" * width)

        if not operand1.isdigit() or not operand2.isdigit():
            return 'Error: Numbers must only contain digits.'

        if len(operand1) > 4 or len(operand2) > 4:
            return 'Error: Numbers cannot be more than four digits.'


        if operator == '*' or operator == '/':
            return "Error: Operator must be '+' or '-'."

        if show_answers:
            if operator == "+":
                answer = str(int(operand1) + int(operand2))
            else:
                answer = str(int(operand1) - int(operand2))
            answer_row.append(answer.rjust(width))

    arranged_problems = "    ".join(top_row) + "\n" + "    ".join(bottom_row) + "\n" + "    ".join(dash_row)

    if show_answers:
        arranged_problems += "\n" + "    ".join(answer_row)

    return arranged_problems


print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')
