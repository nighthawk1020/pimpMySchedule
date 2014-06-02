pimpMySchedule is a Chrome extension designed to automate the process of checking to see if someone else has dropped the course you're interested in, and register yourself in it. Initially that was the sole functionality, however, if you look around you'll notice that I have other plans in the works, namely: session tracking, schedule conflict recognizing, synchronous course registration, intraUser class trading (through a priority system), data collection, and the final goal will be to expand this utility to work with any registration system, allowing the user to easily configure the utility to their own method of registration.

Currently only works with web registration software released by Ellucian in 2014.




*****

For Mike: look at manifest.json for how to easily add scripts to specific pages, using content_scripts.

I think it's a little weird (and annoying) that I manually navigate to the schedule page when I can just, say, start a PMS session on prompt instead of forcing myself to turn the extension off because it keeps redirecting me.

Occurs on URL: /banner/bwckgens.p_proc_term_date
60 minute login class node:
document.getElementsByClassName("errortext")[0];
document.getElementsByClassName("errortext")[0].innerText == "60 minute inactivity caused web session timeout. ";

