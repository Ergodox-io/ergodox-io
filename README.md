# [ergodox.io](http://www.ergodox.io)
The new home of the ErgoDox project; an entirely open source, split hand, keyboard designed with ergonomics in mind.

Site is built with [Jekyll](http://jekyllrb.com/) and themed with [Docster](http://digitalmindch.github.io/docster-jekyll-theme/)

##Repo Structure:
Github page is served to http://www.ergodox.io from the /deploy directory and the source code to render is all inside of the /src directory. 

## Prerequsities
- jekyll
- jekyll-seo-tag
- jekyll-sitemap

## Building the site locally
Once you have Jekyll installed, navigate to the /src directory and ```jekyll serve``` or ```jekyll build``` to either build and serve the site locally or just build the site. The rendered files will be put in the /deploy directory.

## Ready to push to the live site?
`git subtree push --prefix deploy origin gh-pages`
