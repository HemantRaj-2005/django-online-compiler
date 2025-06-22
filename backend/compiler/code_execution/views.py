from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
import os
import uuid

# Create your views here.
@api_view(['POST']) # to ensure it only accepts POST requests
def compile_code(request):
    # step 1: Get code from frontend
    code = request.data.get('code', '')
    user_input = request.data.get('input', '')
    uid = uuid.uuid4().hex
    filename = f'code_{uid}.py'
    filepath = os.path.join('/tmp', filename)


    #step 2: Execute the code (for now I am giving service of python code execution only)
    try:
        if(code == ''):
            return Response({"error": "No code provided"}, status=400)
        
        # Write the code to a temporary file
        with open(filepath, 'w') as f:
            f.write(code)
        
        # Execute the code using subprocess
        result = subprocess.run(
            ['python3', filepath],
            input=user_input.encode(),
            text=True,
            capture_output=True,
            timeout=5  # Set a timeout to prevent hanging
        )

        output = result.stdout.decode()
        error = result.stderr.decode()

        return Response({
            "output": output,
            "error": error,
        })
    except subprocess.TimeoutExpired:
        return Response({"error": "Code execution timed out"}, status=408)
    except Exception as e: # Catch any other exceptions
        return Response({"error": str(e)}, status=500)
    finally:
        # Clean up the temporary file
        if os.path.exists(filepath):
            os.remove(filepath)
        