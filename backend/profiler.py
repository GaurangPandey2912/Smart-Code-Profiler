import timeit
import tracemalloc
import tempfile

def run_profiler(code):
    with tempfile.NamedTemporaryFile(mode='w+', suffix='.py', delete=False) as tmp:
        tmp.write(code)
        tmp.flush()
        start = timeit.default_timer()
        tracemalloc.start()
        exec(code, {})
        current, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()
        end = timeit.default_timer()
    return {
        "execution_time": round(end - start, 6),
        "memory_usage": round(peak / 1024, 2)
    }
