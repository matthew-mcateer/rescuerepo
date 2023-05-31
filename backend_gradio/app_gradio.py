import gradio as gr
import request
from .app.gh_client_clean import {
    repo_exists
}
import dotenv





## function for searching github repository and fetches the repo to backend for analysis
def searchRepo(repoName) -> any:
    assert repo_exists(dotenv.get('GITHUB_TOKEN'), repoName), "Repository does not exist"

    
    return null 


mainsearchPage = gr.Interface(fn=searchRepo, inputs='text', outputs='text')

mainsearchPage.launch()