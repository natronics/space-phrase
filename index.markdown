---
layout: article
title: space-phrase
---

# space-phrase

Get a [passphrase](https://xkcd.com/936/) made of famous space words, for example names of rockets and astronauts.<sup>1</sup>

<div id="phrase" class="notification" style="font-family:monospace;font-size:1.6em;"> </div>
<p><button class="btn" onclick="gen()">Make another one</button></p>


--------------------------------------------------------------------------------

 1. Maybe don't actually use this for an important password<sup>2</sup>
 2. <small>Seriously, the word list is small and public. Still, fun though</small>





<script src="space-phrase.js"></script>
<script>
    var show = document.getElementById('phrase');
    var gen = function () {
        show.innerHTML = phrase({'deliminator': '-'});
    }
    gen();
</script>
