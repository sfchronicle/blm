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
    	twitter_text="",
    	highland_text='"As a physician I watch these videos and I see health care infractions." Dr. Tiffany C. Anaebere',
    	kamau_text='"I\'m not ready to have the conversation with my daughters." W. Kamau Bell',
    	mistah_text='"We\'re just a bullet away from being a hashtag." Mistah F.A.B.',
    	zaynab_text='"My Twitter timeline ... was a complete listing of details about deaths." Zaynab AbdulQadir-Morris',
    	templeton_text='"I\'m 61 years old, and I have been stopped by police 53 times in my life." John William Templeton',
    	wanda_text='"Hearing my son say to the officer, \'You shot me,\' it pierced my heart." Wanda Johnson')
