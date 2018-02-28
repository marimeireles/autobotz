# Autobot'z webpage

## Getting Started

These instructions will get you a copy of the project up and running on your local 
machine for creating posts purposes. To edit specific content of the page please have a look
at [HUGO templates page](https://gohugo.io/templates/).

### Prerequisistes

Autobotz's webpage was created using [HUGO](https://gohugo.io/), a platform similar to 
Jekyll. You'll need to install HUGO in your computer.

#### MacOS (Homebrew)

If you have [homebrew](https://brew.sh/).

```
brew install hugo
```

#### Windows (Chocolatey)

Download the [Chocolatey](https://chocolatey.org/) package management.

```
choco install hugo -confirm
```

#### Debian and Ubuntu

```
sudo apt-get install hugo
```

#### Archlinux

```
sudo pacman -Sy hugo
```

### Clone the repository

Open your terminal and go to the directory where you want to save the website.

```
git init
git clone git@github.com:autobotz-ufmg/autobotz-ufmg.github.io.git
```

## Creating a new blog post and uploading it

Go to the directory where you cloned the repository and then to the hugo directory. Type the following to create a blog post.

```
hugo new posts/name-your-post.md
```

To add an image in your post first add the image in the paste /images/, then add the following to your post header.

```
---
title: ...
...
image: /images/your-image-name.jpg
---
```

Then, simply add it in your text using markdown language.

### Check your post

If you want to check how your post is going, type:

```
hugo server -D
```

Access the site [http://localhost:1313/](http://localhost:1313/) to check your changes.

Once you're happy with your changes make them real.

```
hugo undraft
```

### Upload it to the real world

Go up a directory.

```
git add -A

git commit -m "your message here"

git push
```