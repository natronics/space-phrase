---
layout: article
title: Space Phrase
---

# Space Phrase

Create a [passphrase](https://xkcd.com/936/) made of famous space words, for example names of rockets and astronauts.<sup>1</sup>

<div id="phrase" class="notification" style="font-family:monospace;font-size:1.6em;"> </div>
<p><button onclick="gen()">Make another one!</button></p>


### How to use:

Go to the project on github:

<https://github.com/natronics/space-phrase>

Download the code. To use, for example, in a site like this include it and call `phrase`:

{% highlight html %}
<script src="space-phrase.js"></script>
<script>
    // Get a random space phrase:
    console.log(phrase({'deliminator': '-'}));
</script>
{% endhighlight %}


--------------------------------------------------------------------------------

 1. Maybe don't actually use this for an important password<sup>2</sup>
 2. <small>Seriously, the word list is small and public. Still, it's fun though</small>

<script src="space-phrase.js"></script>
<script>
    var show = document.getElementById('phrase');
    var gen = function () {
        show.innerHTML = phrase({'deliminator': '-'});
    }
    gen();
</script>
