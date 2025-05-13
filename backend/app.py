from flask import Flask, request, jsonify
from flask_cors import CORS
from profiler import run_profiler
from analyzer import analyze_complexity, generate_suggestions
import pymongo

app = Flask(__name__)
CORS(app)
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client['smart_profiler']

@app.route('/profile', methods=['POST'])
def profile_code():
    code = request.json.get('code')
    stats = run_profiler(code)
    complexity = analyze_complexity(code)
    suggestions = generate_suggestions(stats, complexity)

    db.reports.insert_one({"code": code, "stats": stats, "complexity": complexity, "suggestions": suggestions})
    return jsonify({"stats": stats, "complexity": complexity, "suggestions": suggestions})

if __name__ == '__main__':
    app.run(debug=True)
