package main

func isValid(s string) bool {
	stack := make([]rune, 0)

	bracketMap := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for _, char := range s {
		switch char {
		case '(', '[', '{':
			stack = append(stack, char)
		case ')', ']', '}':
			if len(stack) == 0 {
				return false
			}
			if bracketMap[stack[len(stack)-1]] != char {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
func main() {
}
