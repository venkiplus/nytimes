## Basics

Welcome to your Moovweb project! Moovweb is a great way to build a compelling front-end for a website. The files in this project describe the changes we want to make to the front end of a site. There's places in this project to add new images (assets/images/), styles (assets/stylesheets/) and even manipulate HTML (scripts/).

This is a sample project, so you will find the code commented to help you follow what is happening. It is a fairly complex example, and therefore suitable for an intermediate/advanced user of Moovweb. For a simpler project, try the [Moovweb blog project](http://github.com/moovweb-demos/moovweb-blog).

## Before Running This

To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://console.moovweb.com/download) to download and install.

We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [console.moovweb.com](http://console.moovweb.com).

You might find [the page about the scripts folder](http://console.moovweb.com/learn/docs/local/project_files) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://console.moovweb.com/learn/docs/configuration/stylesheet) for information on how we structure our stylesheets.

## Launching

Typically, on Mac or Linux, just browse to this project folder in a terminal and then run the following command:

    sudo moov server --auto-hosts

Then, just browse to [mlocal.nytimes.com](http://mlocal.nytimes.com) and you are ready to start developing!

## Deployment

Moovweb uses a git-based deployment system. To deploy, just type

    git commit -a -m 'New code'
    git push origin master

## More Info

See detailed documentation for Moovweb at [console.moovweb.com](http://console.moovweb.com).

## Domains

If you don't run the server with the `--auto-hosts` command, remember to put all domains you're going to hit in your etc/hosts.

    127.0.0.1   mlocal.nytimes.com
    127.0.0.1   mlocal.mobile.nytimes.com
    127.0.0.1   mlocal.video.nytimes.com
    127.0.0.1   mlocal.global.nytimes.com
    127.0.0.1   mlocal.graphics8.nytimes.com
    127.0.0.1   mlocal.dealbook.nytimes.com
    127.0.0.1   mlocal.wordplay.blogs.nytimes.com
    127.0.0.1   mlocal.jobmarket.nytimes.com
    127.0.0.1   mlocal.travel.nytimes.com
    127.0.0.1   mlocal.lens.blogs.nytimes.com
    127.0.0.1   mlocal.myaccount.nytimes.com
    127.0.0.1   mlocal.beta620.nytimes.com
    127.0.0.1   mlocal.movies.nytimes.com
    127.0.0.1   mlocal.theater.nytimes.com
    127.0.0.1   mlocal.timesmachine.nytimes.com
    127.0.0.1   mlocal.timeslimited.nytimes.com
    127.0.0.1   mlocal.homedelivery.nytimes.com
    127.0.0.1   mlocal.eedition.nytimes.com
    127.0.0.1   mlocal.json8.nytimes.com
    127.0.0.1   mlocal.thecaucus.blogs.nytimes.com
    127.0.0.1   mlocal.well.blogs.nytimes.com
    127.0.0.1   mlocal.publiceditor.blogs.nytimes.com
    127.0.0.1   mlocal.gadgetwise.blogs.nytimes.com
    127.0.0.1   mlocal.opinionator.blogs.nytimes.com
    127.0.0.1   mlocal.takingnote.blogs.nytimes.com
    127.0.0.1   mlocal.markets.on.nytimes.com
    127.0.0.1   mlocal.realestate.nytimes.com
    127.0.0.1   mlocal.realestateads.nytimes.com
    127.0.0.1   mlocal.listings.nytimes.com
    127.0.0.1   mlocal.autos.nytimes.com
    127.0.0.1   mlocal.placead.nytimes.com
    127.0.0.1   mlocal.bits.blogs.nytimes.com
    127.0.0.1   mlocal.frugaltraveler.blogs.nytimes.com
    127.0.0.1   mlocal.tmagazine.blogs.nytimes.com
    127.0.0.1   mlocal.artsbeat.blogs.nytimes.com
    127.0.0.1   mlocal.offthedribble.blogs.nytimes.com
    127.0.0.1   mlocal.thelede.blogs.nytimes.com
    127.0.0.1   mlocal.6thfloor.blogs.nytimes.com
    127.0.0.1   mlocal.nocera.blogs.nytimes.com
    127.0.0.1   mlocal.dotearth.blogs.nytimes.com
    127.0.0.1   mlocal.krugman.blogs.nytimes.com
    127.0.0.1   mlocal.latitude.blogs.nytimes.com
    127.0.0.1   mlocal.spiderbites.nytimes.com
    127.0.0.1   mlocal.up.nytimes.com
    127.0.0.1   mlocal.wt.o.nytimes.com

