import os
import re
import sqlite3
import struct
import time
import webbrowser
import hugchat
from playsound import playsound
import eel
import pyaudio
from engine.command import speak
from engine.config import ASSISTANT_NAME
# Playing assiatnt sound function
import pywhatkit as kit
import pvporcupine

from engine.helper import extract_yt_term

con = sqlite3.connect("kala.db")
cursor = con.cursor()

@eel.expose
def playAssistantSound():
    music_dir = "www\\assets\\audio\\start_sound.mp3"
    playsound(music_dir)

    
def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()

    app_name = query.strip()

    if app_name != "":

        try:
            cursor.execute(
                'SELECT path FROM sys_command WHERE name IN (?)', (app_name,))
            results = cursor.fetchall()

            if len(results) != 0:
                speak("Opening "+query)
                os.startfile(results[0][0])

            elif len(results) == 0: 
                cursor.execute(
                'SELECT url FROM web_command WHERE name IN (?)', (app_name,))
                results = cursor.fetchall()
                
                if len(results) != 0:
                    speak("Opening "+query)
                    webbrowser.open(results[0][0])

                else:
                    speak("Opening "+query)
                    try:
                        os.system('start '+query)
                    except:
                        speak("not found")
        except:
            speak("some thing went wrong")

       

def PlayYoutube(query):
    search_term = extract_yt_term(query)
    speak("Playing "+search_term+" on YouTube")
    kit.playonyt(search_term)


def hotword():
    porcupine=None
    paud=None
    audio_stream=None
    try:
       
        # pre trained keywords    
        porcupine=pvporcupine.create(keywords=["jarvis","alexa"]) 
        paud=pyaudio.PyAudio()
        audio_stream=paud.open(rate=porcupine.sample_rate,channels=1,format=pyaudio.paInt16,input=True,frames_per_buffer=porcupine.frame_length)
        
        # loop for streaming
        while True:
            keyword=audio_stream.read(porcupine.frame_length)
            keyword=struct.unpack_from("h"*porcupine.frame_length,keyword)

            # processing keyword comes from mic 
            keyword_index=porcupine.process(keyword)

            # checking first keyword detetcted for not
            if keyword_index>=0:
                print("hotword detected")

                # pressing shorcut key win+j
                import pyautogui as autogui
                autogui.keyDown("win")
                autogui.press("j")
                time.sleep(2)
                autogui.keyUp("win")
                
    except:
        if porcupine is not None:
            porcupine.delete()
        if audio_stream is not None:
            audio_stream.close()
        if paud is not None:
            paud.terminate()

from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Hugging Face token
HUGGING_FACE_TOKEN = "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"

def chatBot(query):
    try:
        # Load model and tokenizer
        tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.2-1B", token=HUGGING_FACE_TOKEN)
        model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.2-1B", token=HUGGING_FACE_TOKEN)
        
        # Encode the input and generate response
        inputs = tokenizer(query, return_tensors="pt")  # Adjust for CPU use
        outputs = model.generate(inputs.input_ids, max_length=50)
        
        # Decode and return the response
        answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
        
        print("Bot:", answer)
        speak(answer)  # Ensure speak function is defined

        return answer

    except Exception as e:
        print(f"An error occurred: {e}")
        return "Sorry, something went wrong."
