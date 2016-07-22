from flask import render_template, redirect, url_for, request

from app import app, db, freezer
from models import *


# Project Title
app.config['PROJ_TITLE'] = 'Black Lives Matter Portraits Project'

# Site Path/Slug
app.config['PATH'] = 'black-lives-matter'

# Project Category for Omniture 
app.config['CATEGORY'] = 'News'

# Project Hashtag
app.config['HASHTAG'] = 'blacklivesmatter'

"""
slug completes:
- twitter:url
- og:image/Facebook image preview
- Twitter/Facebook share url
- url for email body

title:
- Page title
- og:title/Facebook headline
- email subject
- twitter:title

description:
- meta description
- og:description/Facebook description

twitter_text:
- text that appears on tweet

"""

@app.route('/')
def index():
    return render_template('index.html',
    	slug='',
    	title="",
    	description="",
    	twitter_text="")
