# My wonderful world of macOS [![Thanks](https://img.shields.io/badge/Say%20Thanks-💗-ff69b4.svg)](https://www.patreon.com/nikitavoloboev)
> A list of applications, alfred workflows and various tools that make my macOS experience even more amazing

<img src="https://i.imgur.com/TQUUbAF.jpg" width="600" alt="img">

> [Wallpaper link](https://i.imgur.com/kJ0QXUf.jpg)

##### Contents
- [Applications](#applications)
- [Browsers](#browsers)
- [Command Line Apps](#command-line-apps)
- [My wonderful world of iOS](#my-wonderful-world-of-ios-)
- [Similar Setups](#similar-setups)
- [Related](#related)
- [Contributing](#contributing)

## Applications
I use a lot of applications on my mac. Below is a list of the ones that I love and use the most in my day to day life, sorted by their importance.

I also share [my dotfiles](https://github.com/nikitavoloboev/dotfiles) and I made a [Telegram group](https://t.me/macOSautomation) to discuss all things macOS/iOS.

### 1. [Alfred](https://www.alfredapp.com) - Launcher
- Alfred is a very powerful launcher that you can program to show you anything you want. It saved me a lot of time in my life.
<img src="https://i.imgur.com/kbw0yCF.png" width="600" alt="img">

- It has a great [community](http://www.alfredforum.com/) and very powerful [workflows](https://github.com/learn-anything/alfred-workflows#readme) that you can use.

- I wrote [an article](https://medium.com/@NikitaVoloboev/writing-alfred-workflows-in-go-2a44f62dc432) on how anyone can start developing workflows of their own using Go language and [AwGo](https://github.com/deanishe/awgo) library.

### 2. [Karabiner](https://pqrs.org/osx/karabiner/) - Keyboard remapping
- Karabiner is an absolutely amazing app that lets you remap keys at a very low level on macOS.
- I have completely remapped my keyboard with it and every key on my keyboard is a custom modifier key that I can program to do what I want.
- For example you can make caps lock into an escape key when pressed once but if you hold it, it becomes a [hyper key](http://brettterpstra.com/2017/06/15/a-hyper-key-with-karabiner-elements-full-instructions/). Hyper key means that a key now serves two purposes, once when pressed alone and once when held down. So for example for remapping caps lock, we can remap it to act as escape when pressed alone once but if we hold down on it it becomes ⌘ + ⌃ modifier key. So `caps lock + F` becomes ⌘ + ⌃ + F. And so on.
- I take this idea further and define these kind of hyper keys for __every single key on my keyboard__.
- My Karabiner config can be seen [here](https://github.com/nikitavoloboev/dotfiles/blob/master/karabiner/private.xml) and is described [here](https://wiki.nikitavoloboev.xyz/macOS/apps/karabiner/karabiner.html).

### 3. [Keyboard Maestro](https://www.keyboardmaestro.com/main/) - Automation tool
- Keyboard Maestro is essentially an IDE for automation. You create macros of actions that you can then easily call from Karabiner.
- It has a [wonderful community](https://forum.keyboardmaestro.com/) that is happy to help with whatever you are trying to achieve.
- I share [all the macros I use](km-macros#readme) with the app.

### 4. [VS Code](https://github.com/Microsoft/vscode) - Code editor
- My favourite editor that I use to write code in. Most notably I like its [Vim](https://github.com/VSCodeVim/Vim) and [Go](https://github.com/Microsoft/vscode-go) plugins.
- My config for it can be found [here](https://github.com/nikitavoloboev/dotfiles/blob/master/vscode/settings.json).
- I also love using [Ayu One Dark](https://marketplace.visualstudio.com/items?itemName=faceair.ayu-one-dark) theme with [Fira Code](https://github.com/tonsky/FiraCode) font. Here is how it looks:

<img src="https://i.imgur.com/q44Or5z.png" width="500" alt="img">

### 5. [iTerm](https://www.iterm2.com/) - Terminal Emulator
- Moved completely to using the command line for all my development needs. I go over how I use the app [here](https://wiki.nikitavoloboev.xyz/macOS/apps/iterm.html).
- [Here](https://gist.github.com/nikitavoloboev/3fbe13ce427132d0297f411b62f49034) are all the [Homebrew](http://brew.sh/index.html) packages I like and use.
- I also love using [this workflow](https://github.com/isometry/alfred-tty) to quickly switch between iTerm tabs.
<img src="http://i.imgur.com/RNLb5wj.png" width="500" alt="img">

### 6. [2Do](http://www.2doapp.com/mac) - Flexible task manager
- I love GTD methodology, this application is phenomenal with helping me [organise my tasks and things](https://wiki.nikitavoloboev.xyz/macOS/apps/2do.html) I want to do and achieve. Here is how my sidebar looks:
<img src="https://i.imgur.com/0yUToEK.png" width="150">

- And it has global quick add with a hotkey. Together with lists, priorities, powerful search and a lot more.
<img src="https://i.imgur.com/UPdjh6N.png" width="400" alt="img">

### 7. [Sublime Text](https://www.sublimetext.com) - Text Editor
- Use this editor in addition to VS Code and Neovim for its blazing fast speed of opening files.
- I use it primarily to edit markdown files like [my wiki](https://wiki.nikitavoloboev.xyz/other/wiki-workflow.html). I also edit config files and open large and small files for quick edits.
- [Six](https://github.com/guillermooo/Six) vim plugin for this editor is genuinely amazing. Alongside [Ayu theme](https://github.com/dempfi/ayu).

### 8. [Trello](https://trello.com) - Project management tool
- I use the app a lot to track various ongoing things I have in my life.
- I share many boards I made [publically](https://wiki.nikitavoloboev.xyz/sharing/my-trello.html). Here is an example of a public board for tracking various [things I want to learn](https://trello.com/b/cu32qF3q).
![](https://i.imgur.com/YHmPwsx.jpg)

- I nearly always use two labels: __Important__ and __Next__. And I mark the cards I am working on and set deadlines on most cards.

### 9. [1Password](https://1password.com) - Password manager
- Generate all of my passwords with it and keep everything in a secured and encrypted vault kept secure by my one master password.
- No longer need to remember passwords and I now have a unique password for every website that I am signed up on whilist activating two factor authentication wherever possible.

### 10. [MindNode](https://mindnode.com) - Interactive Mind Mapping
- An application which allowed me to originally create all of the maps for [Learn Anything](https://learn-anything.xyz).
<img src="https://raw.githubusercontent.com/learn-anything/learn-anything/master/media/header.png" width="700" alt="img">

- It is an incredible joy to make mind maps in this app and I use it to visualize everything. [My Notes, projects, plans and thoughts](https://medium.com/@NikitaVoloboev/mind-map-everything-d27670f70739#.p7w44kr44).
- I also try to completely bridge the gap between [my mind maps](https://wiki.nikitavoloboev.xyz/sharing/my-mind.html) and my mind with [Alfred My Mind](https://github.com/nikitavoloboev/alfred-my-mind).
- In short, MindNode for me is the ultimate playground where ideas get born and played with first. I even have a __thinking__ map that I open with Karabiner by pressing `f + :`. And I [brainstorm things](https://wiki.nikitavoloboev.xyz/research/solving-problems.html) I am doing __now__ there. Here is how that looks:

![](https://i.imgur.com/uYr28eZ.png)

### 11. [Dash](https://kapeli.com/dash) - API Documentation Browser
- Allows you to download any docset that you might want to use, search for any method, class or anything that you need very quickly, comes with the amazing [Alfred Worfklow](https://www.alfredapp.com/blog/productivity/dash-quicker-api-documentation-search/) to simplify the process of searching for the right things.
<img src="http://i.imgur.com/tBEkKtL.png" width="500" alt="img">

- I also use [this workflow](https://github.com/nikitavoloboev/small-workflows/tree/master/dash-profile-switch#readme) I made to quickly switch between Dash profiles.

<img src="https://i.imgur.com/wyqtfCM.png" width="500" alt="img">

### 12. [Textual](https://www.codeux.com/textual/) - IRC Client
- I love IRC and this is the best macOS client for it.
- I created my own custom [Ayu theme](textual#readme) that I love.
<img src="https://i.imgur.com/5SglNCi.png" width="500" alt="img">

- The app also has an awesome channel search feature that I use a lot.
<img src="http://i.imgur.com/jwVCcMb.png" width="500" alt="img">

### 13. [Telegram](https://desktop.telegram.org/) - Messenger
- The app has a very clean interface, a native client for macOS and stickers. Chats are not encrypted by default and don't use [approved cryptography](https://security.stackexchange.com/questions/49782/is-telegram-secure) but the client is really amazing and fast.

### 14. [SnippetsLab](https://www.renfei.org/snippets-lab/) - Snippet manager
- I use the app to manage my own personal library of snippets. I prefix all snippets I make. For example vim snippets are prefixed with `vim:`. Git related snippets with `git:` and so on.
- This lets me then use the [Alfred workflow](https://www.renfei.org/snippets-lab/press-release/whats-new/osx-1.6.html) that the App's author provides to search for these snippets insanely fast.
<img src="https://i.imgur.com/gzoH1Dh.png" width="500" alt="img">

Here is how my library looks:
![](https://i.imgur.com/cDmCSyE.png)

- I share my entire library of snippets you can import yourself [here](snippetslab#readme).

### 15. [Timing](https://timingapp.com/whats-new) - Automatic time tracker
- I use Timing app to fully automate tracking my time on my computer.
- The fact that I can combine active and passive tracking together is very powerful and allows me to be more aware of where I spend my time.
<img src="https://i.imgur.com/U6wxKLn.png" width="500" alt="img">

### 16. [Day One](http://dayoneapp.com/) - Digital journal
- Day One is my digital life journal.
- My entire life's experiences lives encrypted in the journal. Adding photographs I made, the thoughts I had and events that happened to me.
- I document and review [my life](https://wiki.nikitavoloboev.xyz/looking-back/looking-back.html) publicly too.
- The app has integration with [IFTTT](https://ifttt.com/day_one) which I use to automatically log all [my tweets](https://twitter.com/nikitavoloboev) and [Insgragram posts](https://www.instagram.com/nikitavoloboev/).
- If you don't journal, I suggest you to start, it is a very powerful mind cleanser and acts as a wonderful history record of your life.

### 17. [Ulysses](http://www.ulyssesapp.com/) - Writing app
- The app I use to write all my [Medium](https://medium.com/@NikitaVoloboev) articles in. As well as writing notes for different [books I read](https://wiki.nikitavoloboev.xyz/books/books.html).
- All your writing in one place is the motto and the underlying design of the app. I hook up my [wiki](https://github.com/nikitavoloboev/knowledge) as an external folder and I love how it creates an index of everything that I can search over:
<img src="http://i.imgur.com/Aa17RCQ.png" width="500" alt="img">

- It also has pretty awesome export functions that let you export the text you write to PDF, ePub and HTML. I mostly use it's ability to export text to Medium.
- I describe my thoughts and approach to writing [here](https://wiki.nikitavoloboev.xyz/writing/writing.html).

### 18. [Typinator](http://www.ergonis.com/products/typinator/) - Text expansions
- I use the app to [fully automate writing repetitive text](https://medium.com/@NikitaVoloboev/write-once-never-write-again-c2fa1f6c4e8).
- I share all the Typinator sets I made with the app [here](typinator).

### 19. [Pixave](http://www.littlehj.com/mac) - Image/GIF/Video organizer
- I use Pixave as my own personal image library. I sort images in groups and I have the powerful search I can use to find any image I need.
- Here is how my library looks like:
![](https://i.imgur.com/MjGFvSb.jpg)

- The red tag means that the image was uploaded to my [Instagram page](https://www.instagram.com/niikivi) for sharing.

### 20. [BetterTouchTool](https://www.boastr.net/) - Mac input customizer
- I use this app a lot for mapping [various trackpad gestures](https://medium.com/@NikitaVoloboev/take-control-of-your-touchpad-on-macos-45c581f542e0#.7n1ye6vze) to hotkeys and actions both globally and per specific application.
<img src="https://i.imgur.com/BXdQ1LZ.png" width="500" alt="img">

- I love scrolling through my tabs in Safari with three finger swipes left and right as well as opening and closing tabs with swiping up and down respectively.
- I share [all the different gestures I have setup to use with the app](btt#readme) that you can view and download.

### 21. [PDF Expert](https://pdfexpert.com/) - PDF reader/editor
- I read a lot of PDFs like books, uni assignments and the like. This app is a huge upgrade over Preview app that I used before.
- Multiple tabs, sepia mode, very nice annotation tools, great search, performance.

### 22. [Airmail](http://airmailapp.com/) - Email client
- By far the most well designed and feature rich mail application that I have used so far. Has simple design, support for multiple accounts and a multitude of nice shortcuts that you can use.
- I approach all of my email tasks in GTD style. Keeping my email inbox close to 0 at all times.

### 23. [Spotify](https://www.spotify.com/us/) - Music streaming
- Found a [lot of great music](https://open.spotify.com/user/nikitavoloboev) with this application and the phenomenal [Alfred Workflow](http://alfred-spotify-mini-player.com/) makes using the application an absolute joy.
- Quickly finding artists, songs I want to listen, instantly adding the song playing to my [Likes](https://open.spotify.com/user/nikitavoloboev/playlist/0ERn0U4qZIKC8Dy7RrMMsn?) playlist or any other playlist I want, seeing what other songs the artist has and more.
<img src="https://i.imgur.com/UgRLB92.png" width="500" alt="img">

### 21. [Fantastical](https://flexibits.com/fantastical) - Calendar
- I use the app to manage events in my life.
- I take great use of Fantastical's natural language input and I use [many Typinator expansions](https://medium.com/@NikitaVoloboev/fantastical-natural-input-text-expansions-3ea8cf7ccac3#.pv5937ncr) to ease this process.
- I always view my events from `Week` view. And show 5 days only with all 24h shown for all days. This lets me have a perspective over what I have to do now. What deadlines I have to complete soon. And gives my the freedom to adjust my schedule in light of upcoming deadlines and events.

### 22. [Contexts](https://contexts.co) - Window switcher
- Allows me to fuzzy search through all the currenly active windows that I have.
<img src="https://i.imgur.com/KNuimJv.png" width="500" alt="img">

- Makes jumping to the right window I need effortless. I often may have many VS Code instances with different projects running and this lets me switch to the project I need in seconds.

### 21. [Dictionary](http://www.wikiwand.com/en/Dictionary_(software))
- Comes natively with macOS and I started to love using it for exploring and searching through Wikipedia.
- It is incredibly fast to make the searches and it gives quick autosuggestions for any query I type that I can then select with up and down arrows.
<img src="http://i.imgur.com/BPOmjkZ.png" width="500" alt="img">

### 22. [Bartender](https://www.macbartender.com/) - Menu bar organizer
- A great utility app that allows you to customise and hide the contents of your menu bar and improve the aesthetics of your OS. It is also is quite beneficial for me as I customised it to have the most important information that I need to show in it.
<img src="https://i.imgur.com/E0ODZBv.png" width="500" alt="img">

- I can also activate Bartender and start searching for the menu bar item I need all from the keyboard.

### 23. [Ship](https://www.realartists.com/index.html) - Issue tracking and code review for GitHub
- An awesome native app that lets me manage my GitHub issues.
- Can schedule certain issues as 'Up Next' and complete them one by one.
<img src="https://i.imgur.com/YSfRGUf.png" width="500" alt="img">

### 25. [Focus](https://heyfocus.com) - Block distracting websites
- I have front pages of [hckrnews](http://hckrnews.com), [Reddit](https://www.reddit.com), [Twitter](https://twitter.com) and many more time sinking websites on the black list.
<img src="https://i.imgur.com/OwIlq6v.png" width="500" alt="img">

- I then have a schedule where I can only use these websites for 30 minutes every 2 hours.
<img src="https://i.imgur.com/OsAazBy.png" width="500" alt="img">

- If I go to any of my blocked websites during my `Focus` time, I am greeted with this message.
<img src="https://i.imgur.com/MMSn0zl.png" width="500" alt="img">

### 26. [Tweetbot](http://tapbots.com/tweetbot/mac/) - Twitter client
- I use the app to stay up to date and communicate on Twitter.
- Tweetbot is also blocked for me during my `Focus` time. I can only post tweets but I can't visit the app to see my feeds.
- Twitter is my primary way to stay up to date on things and is my favourite social network after GitHub. I curate and publically share all [Twitter lists](https://twitter.com/nikitavoloboev/lists) I personally use.
- I have Tweetbot open in full screen with four columns (Mentions/[Top](https://twitter.com/nikitavoloboev/lists/top1)/[ML](https://twitter.com/nikitavoloboev/lists/ml)/[Other](https://twitter.com/nikitavoloboev/lists/other1)). Here is how that looks for me:

<img src="https://i.imgur.com/cy67ddm.png" width="500" alt="img">

### 27. [YNAB](https://www.youneedabudget.com/) - Budget manager
- Use it to track and overview all of my finances, the most important part of this app is the [ideology](http://classic.youneedabudget.com/method) behind it. The whole app is built around this methodology and I recommend you take a look at it even if you are not planning to use the app, I find it very freeing and powerful.

### 28. [Reeder](http://reederapp.com/mac/) - RSS Reeder
- The app I use to keep up with my RSS feeds. I use RSS to follow my favourite blogs, stay up to date on new podcast episodes and even track some software releases.
- Here is how Reeder looks like for me:
<img src="https://i.imgur.com/WCGFLl8.png" width="500" alt="img">

### 30. [Transmit](https://www.panic.com/transmit/) - Transfer files
- I often use this app to quickly send files from my local file system to the cloud (either S3 or dropbox) and get a shareable link I can send to people.
- I use [this alfred workflow](https://www.dropbox.com/s/6y1lwy7lq9njdv6/Transmit.alfredworkflow?dl=1) to quickly open the cloud storage I need.
<img src="http://i.imgur.com/RkkcdvA.png" width="400" alt="img">

### 31. [Transmission](https://www.transmissionbt.com/) - BitTorrent client
- A torrent client that I use, very minimal in its UI but is very powerful and has all the features that I need without the bloat that [uTorrent](http://www.utorrent.com/intl/en/) and other clients have.

### 32. [Sketch](https://www.sketchapp.com/) - Design tool
- Use the app to quickly prototype new designs.

### 33. [Pixelmator](http://www.pixelmator.com/mac/) - Image editor
- Mostly use the app to do quick, small edits on images like adding transparent background to an image.

### 34. [Flux](https://justgetflux.com) - Removes blue light
- A simple utility that makes the screen have nice and warm non blue light emitting colour in the evening. On macOS Sierra, you can use the [built-in feature](https://support.apple.com/en-us/HT207513) instead.

### 35. [Dropzone](https://aptonic.com) - Drag and drop actions
- A quick utility that pops up when I drag some file into it or open it with a hotkey, use it to upload images to [Imgur](http://imgur.com), dropping files into a preset number of folders that I made quickly as well as going to them in an instant.
<img src="https://i.imgur.com/UTqei1d.png" width="300" alt="img">

### 36. [Popclip](https://pilotmoon.com/popclip/) - iOS like mouse text selection popopver
- Another great utility I cannot live without, brings up a quick menu whenever some text is selected on which I can do a number of quick actions, like searching on Google, DuckDuckGo, Youtube, Dictionary, Reddit, Google Images or it can translate text selected, copy it or even make a SnippetsLab snippet from it. Here is how it looks for me:
<img src="https://i.imgur.com/VLFRDAC.png" width="400" alt="img">

### 37. [Next Meeting](https://itunes.apple.com/us/app/next-meeting-menu-bar-app/id1017470484?mt=12) - Show time until next event in menu bar
- It has been quite a big addition to my workflow as I know can quickly know how much time is left until my next class or some other event starts.

### 38. [Marked](http://marked2app.com) - Preview rendered markdown files
- If I ever need to preview a readme or any other markdown file that I wrote or just want to read, this app is the best application for that I found. It also features live updating and quite a lot of customisable features.

### 40. [DaisyDisk](https://daisydiskapp.com) - Visualise taken disk space
- A great tool to quickly get a visual glance over what is taking up your disk space and where.

### 41. [Gemini](http://macpaw.com/gemini) - Search & remove duplicate files
- A great little utility to find duplicate files in the system. Didn't get much use of it so far but it may be quite useful on occasions where I do want to clean up my system from useless files and junk.

### 42. [MonthlyCal](https://itunes.apple.com/us/app/monthlycal-colorful-monthly/id935250717?mt=12) - Notification Centre Calendar
- A great visual representation of my month in form of a notification center widget that allows me to see any day I want at a glance as well as what day of month it is and how many events I have in this week.
<img src="https://i.imgur.com/VbDVrWM.png" width="300" alt="img">

### 43. [iStat Menus](https://bjango.com/mac/istatmenus/) - Mac system monitioring from menu bar
- Great system monitoring tools of which I use CPU and storage tracking, I find it very valuable to know if my CPU is being abused by some application and if so by which.

### 44. [Annotate](https://itunes.apple.com/us/app/annotate-capture-screenshot/id918207447?mt=12) - Create and annotate screenshots
- Best annotation tool I found to exist. After you make a screenshot, it allows for quick edits. Adding arrows, some text, blurring parts of the image as well as ability to quickly save the image or drag it to Dropzone to upload to Imgur to share quickly and send the link to anyone I want.

### 45. [BeardedSpice](https://github.com/beardedspice/beardedspice) - Extend Mac Media Keys
- Enhance play/pause as well as previous/next playback keys to not only work in iTunes and Spotify but work for [Soundcloud](https://soundcloud.com/stream), [Youtube](https://www.youtube.com) and many other services.

### 46. [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) - Control incoming/outgoing network traffic
- An amazing networking tool that gives you a clear picture of what connections are incoming to your computer and what are outgoing.
- Takes a bit of time to set it up correctly and is quite an insightful experience first turning it on and having it notify every couple of seconds that some app is trying to send data to some server and whether you want to allow that.
- This is essential if you want to take control of what information gets sent out from your computer and what connections have right to connect to your data.

### 47. [Texpad](https://www.texpadapp.com/osx) - LaTeX editor
- Great LaTeX editor that has builin preview and great autosuggestions together with great UI interface.

### 50. [Anki](http://ankisrs.net) - Intelligent flash cards
- Still not fully utilising the full power of [spaced repetition learning](http://www.wikiwand.com/en/Spaced_repetition) but it was one of my goals this year to start to use this to my advantage. Essentially all this software does is provide you the means to write your own digital flashcards that you can then test yourself on. It also has a lot of [amazing addons](https://ankiweb.net/shared/addons/) that you can get to add more functionality to the app.

### 51. [ImageOptim](https://imageoptim.com/mac) - Compress images without losing quality & remove metadata
- Quickly remove all the unneeded metadata from the image as well as compress images without losing any visual quality and saving a lot of bandwidth when uploading these images on your website or blog.

### 52. [Dragand](http://dragand.watch) - Download subtitles
- Quickly get subtitles that I want by dragging the file with the movie/series I want to watch to the app.

### 53. [GIF Brewery](http://gifbrewery.com) - Create GIFs
- Allows me to create some great GIFs from video clips as well as converting the entire video clip into a GIF if need be.

### 54. [Noizio](http://noiz.io/) - Ambient sounds
- Rain, whale noises, coffee shop noises right from my menu bar, when I am tired of listening to music and just want to focus.

### 55. [Sip](https://sipapp.io/) Collect, organize & share colors
- A great color picker that is quite often getting updated.

### 56. [Paw](https://paw.cloud) - HTTP client
- A great tool for working with APIs, only recently started to use it but the features it has are handy and the design is intuitive and great.

### 58. [IINA](https://github.com/lhc70000/iina) - Video player
- Open source alternative to VLC built specifically for macOS.
- It is based on [mpv](https://github.com/mpv-player/mpv) and has a more modern and native look than VLC.

### 59. [Hammerspoon](http://www.hammerspoon.org) - Automation tool
- Powerul automation engine, wanted to use it for window management at first but found BetterTouchTool to be more performant.
- Right now I use it show the task I am currenly working on in a little window in the middle of the screen for a brief moment:
<img src="https://i.imgur.com/E7RsarV.png" width="300" alt="img">

- My config for it can be seen [here](https://github.com/nikitavoloboev/dotfiles/blob/master/hammerspoon/init.lua).

### 60. [Kap](https://github.com/wulkano/kap) - Screen recorder
- An open source screen recorder I use to record GIFs.
- Has keyboard support so I can quickly start and end recording of the GIF in one hotkey.

### 61. [PodcastMenu](https://github.com/insidegui/PodcastMenu) - Puts Overcast in menu bar
- Allows you to listen and control playback of podcasts from [Overcast](https://overcast.fm) right from your menu bar.

### 62. [TotalSpaces2](https://totalspaces.binaryage.com/) - Grid space manager
- Allows me to completely remove the animation of switching between spaces/full screen apps.
- I now run most applications in full screen and switch between them with [Karabiner](https://github.com/tekezo/Karabiner-Elements).

### 63. [Default Folder X](http://stclairsoft.com/DefaultFolderX/) - Extend & improve open/save dialogues
- Neat little utility I mostly use to quickly go to various folders from file save windows from hotkeys.
<img src="https://i.imgur.com/RATGaNJ.png" width="400" alt="img">

### 64. [Hazel](https://www.noodlesoft.com) - Automated File Organization
- Use it to fully automate my filing process and automatically commit changes in my [Web Searches](https://github.com/nikitavoloboev/alfred-web-searches) repo.
- I use prefixes for everything, bookmarks, notes, Ulysses entries and even files.
	- This allows me to write some great rules for my Downloads folder that will file the files where I want them to be.
	- Here is one example of such rule:
<img src="http://i.imgur.com/7oiSYV3.png" width="500" alt="img">

## Browsers
### [Safari](https://www.apple.com/lae/safari/)
- My favourite browser for many reasons. It is incredibly fast, doesn't have the baggage of all the Google Chrome tracking and is native to macOS so it is extremely optimised and doesn't kill your battery.
- One powerful plus that Chrome does have over safari is the amount of chrome extensions that you can get. Fortunately the ones most needed for me do [exist on Safari](https://github.com/learn-anything/safari-extensions#readme).

### [Google Chrome](https://www.google.com/chrome/)
- I only use Chrome for web devolopment due to its superior Chrome Dev tools.
- I also really love the variety of [Chrome extensions](https://github.com/learn-anything/chrome-extensions#readme) that people have built and shared.

### [Beaker Browser](https://beakerbrowser.com)
- Experimental Peer to Peer browser. Experimenting with using it more and more as I find the technology and the implications of it fascinating.

### [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- Use it for web devolopment for its superior Dev Tools in debugging CSS Grid. Prefer Chrome dev tools still.

## Command Line Apps
[Homebrew](https://brew.sh) is a wonderful and user friendly package manager for macOS. I am however trying to move and use [nix](https://github.com/NixOS/nix) package manager instead.

[Here](https://gist.github.com/nikitavoloboev/3fbe13ce427132d0297f411b62f49034) are all the packages I am currently using. There's also a curated list of [amazing CLI tools](https://github.com/learn-anything/command-line-tools#readme).

Below are some command line tools I personally use and love:
- [thefuck](https://github.com/nvbn/thefuck) - Corrects your previous console command.
- [ccat](https://github.com/jingweno/ccat) - [cat](http://www.linfo.org/cat.html) command with colours.
- [coreutils](https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/) - Various useful GNU utils that don’t come with macOS.
- [ripgrep](https://github.com/BurntSushi/ripgrep) - Search text for patterns fast.
- [m-cli](https://github.com/rgcr/m-cli) - Useful utils for macOS.
- [mas](https://github.com/mas-cli/mas) - CLI for mac app store.
- [youtube-dl](https://github.com/rg3/youtube-dl) - Download videos from youtube and other video sites.
- [tmux](https://github.com/tmux/tmux) - Terminal multiplexer.
- [pandoc](https://github.com/jgm/pandoc) - Universal markup converter.
- [trash](https://github.com/sindresorhus/trash) - Move files and folders to the trash.
- [vtop](https://github.com/MrRio/vtop) - Graphical activity monitor.
- [curl](https://github.com/curl/curl) - Transfer data, supports various protocols.
- [howdoi](https://github.com/gleitz/howdoi) - Instant coding answers.
- [asciinema](https://github.com/asciinema/asciinema) - Terminal session recorder.
- [tldr](https://github.com/tldr-pages/tldr) - Simplified and community-driven man pages.
- [imgcat](https://github.com/eddieantonio/imgcat) - Like [cat](http://www.linfo.org/cat.html) but for images.
- [screenfetch](https://github.com/KittyKatt/screenFetch) - Fetches system/theme information in terminal.
- [hugo](https://github.com/gohugoio/hugo) - Fast and flexible static site generator.
- [coala](https://github.com/coala/coala) - Linting and fixing of code.
- [reflex](https://github.com/cespare/reflex) - Run a command when files change.
- [create-react-app](https://github.com/facebookincubator/create-react-app) - Create React apps with no build configuration.
- [now](https://github.com/zeit/now-cli) - Realtime global deployments served over HTTP/2.
- [yarn](https://github.com/yarnpkg/yarn) - Fast, reliable, and secure dependency management.
- [iStats](https://github.com/Chris911/iStats) - System stats from the command-line.
- [alfred](https://github.com/jason0x43/go-alfred#installation) - Symlinks your go project to alfred directory and builds your workflow.
- [license up](https://github.com/nikitavoloboev/license-up) - Create a license quickly for your project.
- [fzf](https://github.com/junegunn/fzf) - Command-line fuzzy finder.
- [exa](https://github.com/ogham/exa) - Replacement for ls written in rust.

## Desktop Screenshot
> Using [Screenfetch](https://github.com/KittyKatt/screenFetch)

![](https://i.imgur.com/01RJrn2.jpg)

## Launchpad

![](https://i.imgur.com/jr0JS8h.jpg)

## [My wonderful world of iOS 📱](https://github.com/nikitavoloboev/my-ios#readme)
If you found this interesting, I also have [similar repository](https://github.com/nikitavoloboev/my-ios#readme) going over what applications I use on iOS as well as how and why I use them.

<a align="center" href="https://github.com/nikitavoloboev/my-ios#readme">
    <img width="200" heigth="400" src="https://i.imgur.com/tdRKBBh.jpg"></a>

<a align="center" href="https://github.com/nikitavoloboev/my-ios#readme">
    <img width="200" heigth="400" src="https://i.imgur.com/04HIo7S.jpg"></a>

<a align="center" href="https://github.com/nikitavoloboev/my-ios#readme">
    <img width="200" heigth="400" src="https://i.imgur.com/b7HA1ee.jpg"></a>

## Similar Setups
Here you can find more setups by other people that you can take ideas and inspiration from.
- [Works for me](https://works-for-me.github.io/) - Collection of developer toolkits.
- [Use This Interviews](https://usesthis.com) - What do people use to get stuff done?

## Related
- [Awesome mac](https://github.com/jaywcjlove/awesome-mac#readme)

## Contributing
If you shared a similiar personal setup to this, be it for Windows, Linux or anything else, you can add it in [Similar Setups](#similar-setups) section.

I love finding new awesome tools and apps. If you have a favourite tool or app that you think I missed, please [say it](../../issues/new).

## Thank you 💜
You can support what I do on [Patreon](https://www.patreon.com/nikitavoloboev) or look into [other projects](https://nikitavoloboev.xyz/projects) I shared.

## License
MIT © [Nikita Voloboev](https://www.nikitavoloboev.xyz)