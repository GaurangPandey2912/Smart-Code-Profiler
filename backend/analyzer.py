import ast

def analyze_complexity(code):
    tree = ast.parse(code)
    return {
        "function_count": sum(isinstance(n, ast.FunctionDef) for n in ast.walk(tree)),
        "loop_count": sum(isinstance(n, (ast.For, ast.While)) for n in ast.walk(tree)),
        "if_count": sum(isinstance(n, ast.If) for n in ast.walk(tree)),
    }

def generate_suggestions(stats, complexity):
    suggestions = []
    if stats['execution_time'] > 2:
        suggestions.append("Code is taking too long to execute. Optimize loops or use efficient algorithms.")
    if stats['memory_usage'] > 100:
        suggestions.append("Memory usage is high. Consider data structure optimization.")
    if complexity['loop_count'] > 3:
        suggestions.append("Too many loops. Consider reducing nested iterations.")
    return suggestions
