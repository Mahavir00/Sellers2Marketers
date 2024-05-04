import json
from pprint import pprint
from openai import OpenAI

client = OpenAI(api_key="")

prompt = "What is the capital of France?"

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": prompt,
        }
    ],
    model="gpt-3.5-turbo",
)
response = json.loads(chat_completion.to_json())
text = response['choices'][0]['message']['content']

pprint(text)
