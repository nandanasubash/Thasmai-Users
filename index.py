from pytube import YouTube
import os

link = input("Enter the video link: ")
yt = YouTube(link)
audio_stream = yt.streams.filter(only_audio=True).first()
output_path = f'C:\\Users\\hp\\Desktop\\Thasmai-admin\\thasmai-frontend\\'
audio_stream.download(output_path=output_path)